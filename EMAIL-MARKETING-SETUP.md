# Email marketing and newsletter setup

Reviewed 23 November 2026. The static site now includes the owner-provided MailerLite universal script (account 2061486) on all 15 HTML pages and embedded form V8H7Ot in the shared footer on the 14 pages that have a footer. Subscriber records are handled by MailerLite, not the website. The form's content and behavior are controlled in the owner's MailerLite account and still need review before collection is enabled.

## Recommended path

1. Use the owner's MailerLite account and intended subscriber group; do not create a second list or migrate contacts without a clear reason and permission.
2. Keep the official embedded form on the static site. It avoids a framework, database and exposed API key.
3. Keep subscriber records in the owner's MailerLite account. Do not add a browser-side API integration.

## Free options if she no longer has an active provider

These are the provider limits checked on 13 November 2026; plans can change.

| Provider | Published free allowance | Notes |
| --- | --- | --- |
| [Sender](https://www.sender.net/pricing/free-plan/) | Up to 2,500 subscribers and 15,000 email sends per month | Signup forms and newsletters are included; the free plan includes Sender branding and one seat. |
| [Brevo](https://help.brevo.com/hc/en-us/articles/208589409-About-Brevo-s-pricing-plans) | Up to 100,000 stored contacts and 300 sends per day | Includes CRM and transactional-email tools; the daily send limit is the practical cap. |
| [MailerLite](https://www.mailerlite.com/help/free-plan-update-faq) | Up to 250 active subscribers and 2,500 sends per month | The provider says these limits took effect on 16 June 2026. |

If there is no active account, Sender has the largest published free newsletter allowance among these three. This compares quotas, not deliverability. Its free emails and forms carry Sender branding. Keeping an existing owner account and list is simpler if one is already in use.

## Signup and sending rules

- Collect only the email address unless the owner has a clear use for another field.
- Use the owner's exact text to explain the newsletter and how often it will arrive. The supplied Wix exports do not include a newsletter promise or signup wording.
- Use an unchecked consent control and provider-managed confirmation if available. Each campaign must include the provider's unsubscribe link.
- Update the privacy notice to name the provider before enabling the signup form.
- Do not add WhatsApp enquiries, customer lists or old contacts to marketing email unless they separately agreed to receive it.
- Use an owner-controlled sender address. Follow provider instructions for SPF/DKIM and DMARC where supported. The Vercel vercel.app address is a website host, not a mailbox domain.

## What to send when ready

- Email provider name and confirmation that the account/list is owner-controlled.
- Official hosted-form or embed code, plus the audience/list identifier.
- Newsletter signup promise, consent wording and send frequency in the owner's exact words.
- Public sender name and owner-controlled sender email.
- If the integration needs a private API key, add it through Vercel environment settings; do not commit it or paste it into a public source file.

The supplied Wix text exports contain no newsletter promise or signup wording. Do not invent that copy locally; review the text configured in MailerLite with the owner.

## Activation checks

Before public activation, confirm that form V8H7Ot is enabled and targets the intended group, review the signup and privacy/consent text, and verify the confirmation and unsubscribe flow in MailerLite. A live signup and delivery test has not been performed from this code integration.
