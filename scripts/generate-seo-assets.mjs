import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(await readFile(resolve(projectRoot, 'seo.config.json'), 'utf8'));
const suppliedSiteUrl = process.argv[2] || process.env.SITE_URL || config.siteUrl;
const siteBase = new URL(suppliedSiteUrl);
const provisionalOrigin = !config.siteUrlConfirmed && !process.argv[2] && !process.env.SITE_URL;

if (siteBase.protocol !== 'https:' && siteBase.hostname !== 'localhost') {
  throw new Error('SITE_URL must use HTTPS for a public production site.');
}
if (siteBase.search || siteBase.hash) throw new Error('SITE_URL must not include a query string or fragment.');
if (!siteBase.pathname.endsWith('/')) siteBase.pathname += '/';

const pageUrl = (route) => new URL(route.replace(/^\/+/, ''), siteBase).href;
const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

function upsertMeta(html, attribute, key, content) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const matcher = new RegExp(`<meta\\s+${attribute}=["']${escapedKey}["'][^>]*>`, 'i');
  const tag = `<meta ${attribute}="${escapeHtml(key)}" content="${escapeHtml(content)}">`;
  return matcher.test(html) ? html.replace(matcher, tag) : html.replace(/<\/head>/i, `${tag}\n</head>`);
}

function upsertCanonical(html, canonical) {
  const matcher = /<link\s+rel=["']canonical["'][^>]*>/i;
  const tag = `<link rel="canonical" href="${escapeHtml(canonical)}">`;
  return matcher.test(html) ? html.replace(matcher, tag) : html.replace(/<\/head>/i, `${tag}\n</head>`);
}

function crumbsFor(page) {
  const labels = {
    services: 'Services',
    cleaning: 'Professional cleaning',
    'home-assistants': 'Home assistants',
    nannies: 'Nanny services',
    pricing: 'Pricing',
    about: 'About',
    faq: 'FAQs',
    contact: 'Contact',
  };
  const segments = page.path.split('/').filter(Boolean);
  const crumbs = [{ name: 'Home', url: pageUrl('/') }];
  let route = '';
  for (const segment of segments) {
    if (segment === '404.html') continue;
    route += `${segment}/`;
    crumbs.push({ name: labels[segment] || segment, url: pageUrl(`/${route}`) });
  }
  return crumbs;
}

function structuredDataFor(page) {
  const canonical = pageUrl(page.path);
  const organizationId = `${pageUrl('/')}#organization`;
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbsFor(page).map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };

  if (page.kind === 'home') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': organizationId,
          name: 'Home & Ease',
          url: pageUrl('/'),
          telephone: config.phone,
          areaServed: config.areaServed,
          contactPoint: [{
            '@type': 'ContactPoint',
            contactType: 'customer service',
            telephone: config.phone,
            url: config.whatsAppUrl,
            availableLanguage: ['English'],
          }],
        },
        { '@type': 'WebSite', '@id': `${pageUrl('/')}#website`, name: 'Home & Ease', url: pageUrl('/'), publisher: { '@id': organizationId } },
      ],
    };
  }

  if (page.kind === 'service') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${canonical}#service`,
          name: page.serviceName,
          serviceType: page.serviceType,
          areaServed: config.areaServed,
          description: page.description,
          url: canonical,
          provider: { '@id': organizationId },
        },
        breadcrumbs,
      ],
    };
  }

  return breadcrumbs;
}

function upsertSchema(html, data) {
  const matcher = /<script\s+type=["']application\/ld\+json["']\s+data-seo-schema>([\s\S]*?)<\/script>/i;
  const script = `<script type="application/ld+json" data-seo-schema>\n${JSON.stringify(data, null, 2)}\n</script>`;
  return matcher.test(html) ? html.replace(matcher, script) : html.replace(/<\/head>/i, `${script}\n</head>`);
}

const sitemapPages = [];
for (const page of config.pages) {
  const absoluteFile = resolve(projectRoot, page.file);
  if (!absoluteFile.startsWith(`${projectRoot}${sep}`) && absoluteFile !== resolve(projectRoot, 'index.html')) {
    throw new Error(`Page file escapes project directory: ${page.file}`);
  }

  let html = await readFile(absoluteFile, 'utf8');
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);
  html = upsertMeta(html, 'name', 'description', page.description);
  html = upsertMeta(html, 'property', 'og:title', page.title);
  html = upsertMeta(html, 'property', 'og:description', page.description);
  html = upsertMeta(html, 'property', 'og:type', 'website');
  html = upsertMeta(html, 'property', 'og:site_name', 'Home & Ease');
  html = upsertMeta(html, 'property', 'og:locale', 'en_NG');

  if (page.indexable) {
    const canonical = pageUrl(page.path);
    html = html.replace(/<meta\s+name=["']robots["'][^>]*>/i, '');
    html = upsertCanonical(html, canonical);
    html = upsertMeta(html, 'property', 'og:url', canonical);
    html = upsertMeta(html, 'property', 'og:image', config.socialImage);
    html = upsertMeta(html, 'property', 'og:image:alt', 'A home-cleaning professional at work in a bright home');
    html = upsertMeta(html, 'name', 'twitter:card', 'summary_large_image');
    html = upsertMeta(html, 'name', 'twitter:title', page.title);
    html = upsertMeta(html, 'name', 'twitter:description', page.description);
    html = upsertMeta(html, 'name', 'twitter:image', config.socialImage);
    html = upsertSchema(html, structuredDataFor(page));
    sitemapPages.push(page);
  } else {
    html = upsertMeta(html, 'name', 'robots', 'noindex, nofollow');
    html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, '');
    html = html.replace(/<script\s+type=["']application\/ld\+json["']\s+data-seo-schema>[\s\S]*?<\/script>/i, '');
  }

  await writeFile(absoluteFile, html, 'utf8');
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  ...(provisionalOrigin ? ['<!-- PROVISIONAL: regenerate with the final production SITE_URL before launch. -->'] : []),
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapPages.map((page) => `  <url><loc>${escapeHtml(pageUrl(page.path))}</loc></url>`),
  '</urlset>',
  '',
].join('\n');
await writeFile(resolve(projectRoot, 'sitemap.xml'), xml, 'utf8');
const robotsComment = provisionalOrigin ? '# Provisional sitemap URL; set SITE_URL and regenerate before launch.\n' : '';
await writeFile(resolve(projectRoot, 'robots.txt'), `${robotsComment}User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${pageUrl('/sitemap.xml')}\n`, 'utf8');

console.log(`Updated SEO metadata for ${config.pages.length} routes.`);
console.log(`Generated sitemap.xml with ${sitemapPages.length} canonical public routes.`);
if (!config.siteUrlConfirmed && !process.argv[2] && !process.env.SITE_URL) {
  console.warn(`SITE_URL is provisional (${siteBase.href}); set SITE_URL or pass the final production URL before launch.`);
}
