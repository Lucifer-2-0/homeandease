# SEO implementation and release steps

The website uses static HTML, CSS and browser JavaScript. Search metadata is configured per page; a Node script generates canonical tags, Open Graph and X/Twitter metadata, JSON-LD, sitemap.xml and robots.txt. No framework or SEO plugin is required.

## Current state

- Titles and descriptions use the owner's supplied Wix wording and service terms, with relevant Enugu references.
- The pages include the source descriptions for Home Assistants (Maids), Nannies, Professional Cleaners, process, pricing and FAQs.
- Price and process details are sourced from the supplied Wix exports. The process page publishes the source's stated maximum matching time of 72 hours.
- areaServed is Enugu. No other service area is claimed.
- Indexable routes are declared in seo.config.json; the generator includes only those routes in the sitemap. Legal drafts, photo credits and the 404 page remain noindex.
- The configured WhatsApp number is +234 708 600 7268. Service enquiries use a prepared WhatsApp message.
- No ratings, hours, street address or LocalBusiness address markup are fabricated.

## Current production URL

The owner supplied https://homeandease.vercel.app/ as the current deployment URL. Canonicals, structured data, robots.txt and sitemap.xml use it. The updated local copy has not been deployed or independently verified on the live site.

If the production domain changes, set the exact URL in SITE_URL and run node scripts/generate-seo-assets.mjs from PowerShell. Keep the site URL on HTTPS and include a trailing slash.

## Deployment and indexing

1. Deploy the updated static folder to the production site.
2. Confirm the production robots.txt and sitemap.xml return 200 and use the canonical production domain.
3. Verify ownership in Google Search Console and Bing Webmaster Tools.
4. Submit the sitemap, inspect the homepage and service pages, and request indexing after the public changes are live.
5. Keep the owner's Google Business Profile consistent with the real business name, WhatsApp number, service area and current hours.
6. Use Search Console query reports to refine useful service information. Do not create pages for areas outside the confirmed service area.

Google's sitemap documentation explains that a sitemap helps discovery but does not guarantee indexing or ranking. Structured data must describe visible, accurate business information and cannot guarantee a rich result.

## Further owner information

- Keep service claims limited to within Enugu.
- Confirm the supplied prices and transport charges before a future change or deployment.
- Supply approved logo and genuine service photos with web-use permission.
- Supply official business email, social links and opening hours if they should be published.
- Confirm a physical address only if the business wants to publish one and it meets Google's requirements.
- Do not install analytics without the owner's consent and an updated privacy notice.