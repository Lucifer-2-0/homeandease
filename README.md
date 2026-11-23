# Home & Ease

A small, framework-free website built with HTML, CSS and browser JavaScript. It has no package install or build step.

## Run locally

Install Node.js, then run node server.mjs from this folder and open http://127.0.0.1:4173. Service and recruitment calls to action open WhatsApp at +234 708 600 7268 with a prepared message. Visitors choose whether to send it.

## Project map

- index.html — cinematic homepage with GSAP scrollytelling.
- styles.css and site.js — shared visual system, navigation, WhatsApp prompts and page interactions.
- Route folders — service details, process, pricing, contact, FAQ, recruitment and supporting pages.
- HOME-AND-EASE-BLUEPRINT.md — project structure and implementation brief.
- OWNER-CONTENT-REQUIRED.md — source-copy decisions, missing assets and remaining owner approvals.
- EMAIL-MARKETING-SETUP.md — MailerLite integration notes and owner activation checks.
- seo.config.json, scripts/generate-seo-assets.mjs, sitemap.xml, SEO-IMPLEMENTATION.md and SEO-CONTENT-PLAN.md — search metadata, structured data and release notes.

## Owner copy and service area

The supplied Wix page exports are the source for the current homepage, service, process, pricing, contact, FAQ and staff copy. Their package prices and terms are displayed as supplied. The old Wix phone was replaced with the owner's current WhatsApp number, and service locations are described as within Enugu.

The export spells one package “Live-in Housekpeer/ Nanny”; that source spelling is preserved. The “Other areas off-town” transport line and all prices should be reconfirmed by the owner before they are changed. Updates made in this folder are local and still need to be deployed to Vercel.

## Integrations and approvals

MailerLite's universal script is installed on all 15 HTML pages, and embedded form V8H7Ot is placed in the shared footer where present. The form is hosted and configured in the owner's MailerLite account; its activation, subscriber group, signup wording, consent/privacy settings and confirmation flow still need owner review. The site does not store subscriber records locally. Update the draft privacy notice before collecting addresses.

Staff applications are not stored or delivered by a backend. “Apply Here” opens WhatsApp so the applicant can request the application steps; applicants should not send sensitive documents until the owner confirms an appropriate process.

The circular H mark is a temporary placeholder; replace it with the approved logo asset when supplied. Current Unsplash photos are illustrative and credited on the photo credits page. The privacy notice and terms remain drafts for owner/legal review.

## Search metadata and deployment

The site URL currently configured is https://homeandease.vercel.app/. If the production domain changes, set SITE_URL in PowerShell and run node scripts/generate-seo-assets.mjs to refresh canonicals, structured data, the sitemap and robots file.

The homepage uses a pinned GSAP and ScrollTrigger CDN. Without that CDN, the page remains readable in normal document flow. Fonts and Unsplash photos also load remotely.
