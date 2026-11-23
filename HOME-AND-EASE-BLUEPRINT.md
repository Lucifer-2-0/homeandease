---
author: Cyberdragon Technologies
date: 2026-11-09
subtitle: The Art of Living Well \| Premium Scrollytelling Website
title: Home & Ease --- Design & Development Handoff
---

# Project brief

**Client:** Home & Ease\
**Project:** Redesign and rebuild the existing Wix website as a premium,
responsive, conversion-focused website.\
**Creative direction:** **The Art of Living Well**\
**Primary audience:** Households and families seeking home assistants,
nannies, or professional cleaning services; prospective domestic staff
applying to work with the business.\
**Primary conversion:** A qualified service enquiry through the website
or WhatsApp.\
**Secondary conversion:** A completed staff application.\
**Developer:** Cyberdragon Technologies.

## Existing website

https://homeandease.wixsite.com/home-and-ease

Use the existing website as a source for current business information
and content to be reviewed. Do not assume every existing claim, price,
policy, testimonial, phone number, or process description is still
accurate. Verify with the owner before publication.

## Development directive

Build a premium editorial website, not a generic cleaning-company
template and not a public staff marketplace. The initial release is a
service-business website with clear service information, enquiry
capture, recruitment applications, and strong mobile usability. Do not
add customer accounts, staff profiles/marketplace functionality, online
payments, or an admin dashboard unless separately approved.

The homepage must be implemented first and establish the reusable design
system. Supporting pages should then reuse its components and visual
language.

------------------------------------------------------------------------

# 1. Business understanding and content boundaries

Home & Ease offers three core services:

1.  **Home Assistants:** housekeeping, laundry, kitchen assistance, and
    household organisation.
2.  **Nannies:** childcare support such as feeding, hygiene,
    supervision, play, and children's routines.
3.  **Professional Cleaners:** cleaning of kitchens, bathrooms, floors,
    and other residential spaces, including scheduled or deep cleaning
    where confirmed.

### Important service distinction

Clearly distinguish home-assistant duties from childcare duties. Do not
imply that a home assistant automatically provides childcare, or that a
nanny is responsible for general housekeeping, unless the owner confirms
a particular package explicitly includes those duties.

### Claims that must not be invented

Never fabricate or silently assume:

-   Staff screening, background checks, medical checks, references,
    certifications, or training.
-   Staff identities, qualifications, photographs, or profiles.
-   Customer testimonials, customer names, ratings, or endorsements.
-   Service prices, discounts, package inclusions, or payment terms.
-   Matching timeframes, service guarantees, replacement/refund
    policies, or availability.
-   Geographic coverage, opening hours, contact details, or business
    registration details.

Where information is missing, use a clearly marked content placeholder
in the implementation and list it in `OWNER-CONTENT-REQUIRED.md`. Do not
publish placeholder claims as facts.

------------------------------------------------------------------------

# 2. Creative direction and visual mood

## Concept: "The Art of Living Well"

The experience should combine the visual restraint of a premium
interior-design publication, the warmth of a hospitality brand, and the
clarity of a modern service business.

The emotional narrative is:

1.  **Aspiration:** Home should feel welcoming and comfortable.
2.  **Recognition:** Everyday household responsibilities can become
    overwhelming.
3.  **Relief:** Customers do not have to manage everything alone.
4.  **Understanding:** Home & Ease offers distinct types of support.
5.  **Confidence:** The business explains its real process and
    standards.
6.  **Action:** Visitors can easily enquire or apply.

### Desired visual characteristics

-   Warm, natural, sophisticated, reassuring, family-focused.
-   Large editorial typography and generous whitespace.
-   High-quality residential lifestyle photography.
-   Asymmetrical but balanced layouts.
-   Restrained borders, subtle transitions, and carefully placed
    accents.
-   Clear calls to action and strong readability.
-   Animation used to support storytelling, never to obstruct content.

### Avoid

-   Generic SaaS/dashboard styling.
-   Bright neon colours or excessive gradients.
-   Excessive glassmorphism and oversized rounded cards.
-   Unnecessary floating elements.
-   Over-animation, scroll hijacking, or long delays before content
    becomes readable.
-   Stock models presented as actual Home & Ease employees.

------------------------------------------------------------------------

# 3. Design system

## 3.1 Colour palette

  -----------------------------------------------------------------------
  Token                   Hex                     Intended use
  ----------------------- ----------------------- -----------------------
  Warm Ivory              `#F6F2EA`               Main page background

  Soft Porcelain          `#FFFCF7`               Alternate/light
                                                  surfaces

  Deep Forest             `#263D33`               Primary brand colour,
                                                  dark sections, buttons

  Muted Sage              `#A9B7A5`               Secondary surfaces and
                                                  accents

  Soft Olive              `#75836C`               Supporting accents

  Champagne               `#D9C5A5`               Fine decorative accents

  Warm Clay               `#C17D62`               Small accent details
                                                  only

  Charcoal                `#292D29`               Main text

  Muted Grey              `#77796F`               Secondary text

  Border Beige            `#E5DED2`               Borders and dividers
  -----------------------------------------------------------------------

Use warm ivory and porcelain as the primary backgrounds. Deep forest is
the dominant brand accent. Champagne and clay should be used sparingly.

Suggested overall balance: approximately 55% light neutrals, 20% forest,
12% sage/olive, 8% charcoal, and 5% warm accents. Treat this as a visual
guide, not a rigid per-page formula.

## 3.2 Typography

-   **Display:** Cormorant Garamond, weights 400/500/600.
-   **Interface/body:** DM Sans, weights 400/500/600/700.

Use Cormorant Garamond for hero and editorial headings, large
statements, service titles, and testimonial quotations. Use DM Sans for
navigation, body copy, forms, buttons, labels, and utility text.

Suggested responsive type scale:

  Element                    Desktop     Mobile
  ---------------------- ----------- ----------
  Hero heading             88--112px   44--56px
  Main section heading      64--76px   38--46px
  Service heading           58--68px   38--44px
  Subheading                25--30px   21--24px
  Body                      16--18px   15--17px
  Small label               11--13px   11--12px

Use `clamp()` for fluid scaling. Ensure line lengths remain readable and
headings do not overflow narrow devices.

## 3.3 Layout and component styling

-   Maximum content width: approximately 1200--1360px on large desktop.
-   Desktop horizontal gutters: approximately 5--7vw.
-   Use generous vertical spacing and clear section rhythm.
-   Use restrained corner radii; avoid making every component a rounded
    card.
-   Buttons should have clear hover, focus, active, and disabled states.
-   Maintain consistent spacing tokens and a documented type scale.

------------------------------------------------------------------------

# 4. Homepage structure and implementation specification

Build the homepage in this order:

1.  Navigation.
2.  Cinematic hero.
3.  Busy-life problem.
4.  Home transformation.
5.  Services showcase.
6.  Trust and standards.
7.  How it works.
8.  Customer testimonials.
9.  Final conversion section.
10. Footer.

## 4.1 Global navigation

**Desktop** - Transparent over the hero. - Logo on the left. - Links:
Home, Services, Our Process, About, Pricing. - Contact CTA on the
right. - Initial height around 88px. - On scroll, transition to a
warm-ivory background, forest text, subtle backdrop blur, fine bottom
border, and approximately 72px height.

**Mobile** - Logo left; accessible menu button right. - Full-screen or
full-height menu overlay. - Large, easy-to-tap links. - Clear close
control and visible focus state. - Do not rely on hover.

Navigation must work with keyboard and touch. Use semantic links and
buttons.

## 4.2 Scene 01 --- Cinematic hero

**Purpose:** Establish the emotional promise and premium visual identity
immediately.

**Height:** Approximately `100svh`, allowing for mobile browser UI.

**Imagery/video direction:** A beautiful modern family home in the
morning. Show natural sunlight entering through windows, curtains moving
gently, an inviting living room, carefully arranged flowers or home
details, and a subtle camera move through the space. Do not open with
cleaning equipment or a staged staff portrait; this opening is about the
feeling of a welcoming home.

**Headline:**\
"HOME SHOULD FEEL LIKE HOME."

**Supporting copy:**\
"Professional home care that gives your family more time, your home more
attention, and you more room to enjoy life."

**CTAs:** - Primary: "Explore Our Services" → `/services` - Secondary:
"Find Your Home Assistant" → contact/enquiry flow, with service
preselected if feasible.

**Composition:** Place a small brand label above the headline: "HOME &
EASE --- THE ART OF LIVING WELL." Position headline and copy in the
lower-left or central-left safe area. Add a discreet "Scroll to explore"
cue near the bottom.

**Motion:** - Background video/image subtly scales from about 1.06--1.08
to 1. - Brand label fades in. - Heading reveals by line or word, not
letter-by-letter. - Supporting copy fades/translates upward. - CTAs
enter with a small stagger. - Scroll cue moves subtly.

**Implementation:** - Use a silent, muted, looping background video only
where it performs well. - Provide a responsive AVIF/WebP poster. - Use a
mobile-specific image or lightweight video where appropriate. - Never
autoplay audio. - Provide a visible pause control if motion continues. -
Disable autoplay and large movement for `prefers-reduced-motion`. - Use
`object-fit: cover` and test text contrast against every crop. - Ensure
the hero message remains visible if video fails.

## 4.3 Scene 02 --- Busy-life problem

**Purpose:** Help visitors recognise the problem without shaming or
exaggerating.

**Desktop height:** Pinned scene with approximately 160--200vh of scroll
distance.\
**Mobile:** Normal-flow stacked section; no long pinning.

**Visual direction:** A parent or professional balancing work, family,
and ordinary household responsibilities. Use warm, realistic
photography. Do not depict an extreme or humiliatingly messy home.

**Headline:**\
"LIFE IS BUSY. YOUR HOME SHOULDN'T MAKE IT BUSIER."

**Supporting copy:**\
"Between work, family and everyday responsibilities, maintaining a
comfortable home can demand more time and energy than you have to give.
You don't have to do everything alone."

**Desktop scroll choreography:** - Stage 1: First lifestyle image
appears; text: "Your days are already full." - Stage 2: Crossfade to
another moment such as laundry, household organisation, or childcare;
text: "Between work, family and everything in between..." - Stage 3:
Image begins transitioning toward a calmer environment; text: "Perhaps
it's time to make room for a little help."

Use a GSAP timeline with ScrollTrigger pinning and scrub. Keep each text
state readable long enough. Avoid abrupt jumps and avoid hiding the full
copy from screen readers.

## 4.4 Scene 03 --- Transformation

**Purpose:** Deliver the emotional turning point from pressure to
relief.

**Height:** Approximately 90--100svh.

**Imagery:** A clean, peaceful family home, warm natural light, and a
family relaxing together. Use authentic licensed photography; do not
imply that a stock family is a customer.

**Headline:**\
"WHAT IF HOME FELT DIFFERENT?"

**Copy:**\
"A well-cared-for home gives you something valuable: more time, more
comfort and more opportunities to enjoy the people and moments that
matter. That's where Home & Ease comes in."

**Motion:** - Transition from the previous visual using a restrained
crossfade or clip-path reveal. - Reveal headline in two stages. - Fade
supporting copy in. - Add a subtle decorative underline/accent. - Keep
the transition smooth and short.

## 4.5 Scene 04 --- Services showcase

**Purpose:** Explain the three services clearly and move visitors toward
the relevant enquiry.

**Desktop:** Three large editorial panels in a pinned horizontal
sequence, driven by vertical scroll. Target approximately 280--320vh
total scroll distance, adjusted after usability testing.\
**Mobile/tablet:** Three stacked panels in natural vertical flow; do not
force horizontal scrolling on small screens.

### Service 01 --- Home Assistants

**Heading:** "A little help. A lot more ease."

**Copy:**\
"Professional home assistance that keeps your household organised,
comfortable and running smoothly."

**Responsibilities:** - Housekeeping. - Laundry. - Kitchen support. -
Household organisation.

**CTA:** "Explore Home Assistants" → `/services/home-assistants`

**Image direction:** A person arranging a living room, folding laundry,
or organising household items. If using a stock image, do not imply that
the person is an actual employee.

### Service 02 --- Nannies

**Heading:** "Because little moments matter."

**Copy:**\
"Thoughtful childcare support that helps parents balance their
responsibilities while children receive dedicated attention."

**Responsibilities:** - Feeding. - Hygiene. - Daily routines. - Play and
learning. - Child supervision.

**CTA:** "Explore Nanny Services" → `/services/nannies`

**Image direction:** Natural nanny/child interaction in a bright home.
Use licensed imagery and appropriate permissions for identifiable
children.

### Service 03 --- Professional Cleaners

**Heading:** "A fresh feeling, from room to room."

**Copy:**\
"Professional cleaning services that help maintain a fresh, comfortable
and well-cared-for living environment."

**Responsibilities:** - Kitchen cleaning. - Bathroom cleaning. - Floor
care. - Deep cleaning. - Scheduled cleaning, if confirmed.

**CTA:** "Explore Cleaning Services" → `/services/cleaning`

**Image direction:** A cleaner working in an elegant kitchen or
bathroom. Do not use imagery that falsely identifies a stock model as
staff.

**Desktop animation:** - Pin the showcase container. - Move a horizontal
track with a GSAP timeline. - Each panel should reveal its image,
number, title, copy, responsibilities, and CTA in a controlled
sequence. - Avoid competing nested scroll behaviours. - Ensure all
panels remain available to keyboard and screen-reader users.

## 4.6 Scene 05 --- Trust and standards

**Purpose:** Address the sensitivity of inviting someone into a home
and, in some cases, entrusting them with children.

**Background:** Deep Forest `#263D33`.

**Headline:**\
"YOUR HOME IS PERSONAL. WE TREAT IT THAT WAY."

**Four editorial pillars:**

1.  **Clear Responsibilities** --- "Every role has defined duties so
    clients and staff understand expectations."
2.  **Thoughtful Matching** --- "The objective is to find suitable
    support based on the household's requirements."
3.  **Transparent Communication** --- "Customers should understand the
    service, schedule, expectations and applicable costs before
    committing."
4.  **Professional Standards** --- Explain only the real staff
    verification, assessment, and training procedures confirmed by the
    owner.

Use oversized numbering, small restrained line icons, elegant headings,
and short descriptions. Reveal pillars sequentially on scroll without
turning them into generic corporate cards.

**Critical:** Do not publish screening, background-check, medical-check,
certification, training, or guarantee claims unless the owner confirms
the actual procedure and can substantiate it.

## 4.7 Scene 06 --- How it works

**Purpose:** Reduce uncertainty and explain the customer journey.

**Headline:**\
"GETTING THE RIGHT HELP IS SIMPLE."

Use the following proposed five-stage presentation, but compare it with
the owner's current process before publication:

  -----------------------------------------------------------------------
  Step                    Heading                 Copy
  ----------------------- ----------------------- -----------------------
  01                      Tell Us What You Need   Contact the team and
                                                  explain your
                                                  requirements.

  02                      We Understand Your Home Discuss the service,
                                                  schedule and
                                                  expectations.

  03                      Find the Right Package  Receive suitable
                                                  service and pricing
                                                  information.

  04                      Confirm Your Service    Review the agreement
                                                  and complete the
                                                  required arrangements.

  05                      Your Support Begins     The business introduces
                                                  the matched
                                                  professional and
                                                  confirms the start
                                                  date.
  -----------------------------------------------------------------------

**Desktop:** Horizontal timeline with a line that fills as the visitor
scrolls.\
**Mobile:** Vertical timeline.

Each step becomes active in sequence. Keep the motion restrained,
approximately 0.5--0.8 seconds per state, and do not make the content
dependent on animation.

**CTA:** "Talk to Our Team" → contact/enquiry flow.

Do not publish a fixed matching timeframe unless the owner confirms it.

## 4.8 Scene 07 --- Customer experiences

**Purpose:** Provide authentic social proof.

**Headline:**\
"REAL PEOPLE. REAL EXPERIENCES."

Use a large editorial quotation layout with one prominent testimonial at
a time. Include customer first name/location only with permission. Use
customer portraits or video testimonials only when supplied and
approved.

**Controls:** - Manual previous/next controls. - Keyboard accessible. -
No aggressive auto-advancing carousel. - Respect reduced-motion
preferences.

Use verified testimonials only. If no approved testimonials are
available, hide the section or replace it with a factual "What customers
can expect" section. Never invent quotes or customer ratings.

## 4.9 Scene 08 --- Final conversion

**Purpose:** End the narrative with a clear next step.

**Height:** Approximately 85--100svh.

**Visual:** A welcoming home at golden hour, warm ambient light, and a
peaceful living room.

**Headline:**\
"MAKE ROOM FOR WHAT MATTERS."

**Copy:**\
"Let Home & Ease take care of the details while you focus on living."

**CTAs:** - Primary: "Find Your Home Support" - Secondary: "Speak With
Our Team"

Use a subtle background scale, restrained heading reveal, and clear
button entrance. The section must remain usable without animation.

## 4.10 Footer

Use a Deep Forest background.

Suggested columns:

-   **Brand:** Logo, "The Art of Living Well", short verified business
    description.
-   **Explore:** Home, About, Services, Our Process, Pricing.
-   **Services:** Home Assistants, Nannies, Professional Cleaning.
-   **Contact:** Confirmed phone, WhatsApp, email, location, and social
    links.

Bottom bar: - Copyright year generated dynamically. - Privacy Policy and
Terms links, once approved. - Proposed attribution: **"Designed &
Developed by Cyberdragon Technologies"**. Include only after the owner
agrees. Link to the developer's approved portfolio/business destination
when supplied.

------------------------------------------------------------------------

# 5. Motion system and technical animation guidance

## 5.1 Responsibilities

-   **GSAP:** Main timeline and complex motion engine.
-   **ScrollTrigger:** Scroll-based timelines, pinning, scrub, and
    reveals.
-   **Framer Motion:** Small UI interactions such as menu transitions,
    accordion state, and button feedback.
-   **CSS:** Basic hover/focus transitions and simple decorative
    effects.
-   **Lenis:** Optional only. Do not add it unless it materially
    improves the experience.

Avoid having GSAP and Framer Motion control the same element
simultaneously.

## 5.2 Motion presets

  Motion                     Approx. duration Easing
  ------------------------ ------------------ ----------------
  Text reveal                            0.8s `power3.out`
  Image reveal                           1.2s `power3.inOut`
  Button entrance                        0.5s `power2.out`
  Section fade                           0.8s `power2.out`
  Editorial panel reveal                 0.7s `power3.out`
  Navigation transition                  0.3s `power2.out`

These are starting values. Adjust based on real-device testing and the
pace of the content.

## 5.3 GSAP implementation rules

-   Register GSAP plugins once in a client-side animation utility.
-   Use `gsap.context()` or the appropriate React integration to scope
    animations.
-   Clean up timelines and ScrollTriggers on component unmount.
-   Use `gsap.matchMedia()` for desktop/mobile and reduced-motion
    variants.
-   Avoid creating duplicate ScrollTriggers during React
    development/Strict Mode.
-   Refresh ScrollTrigger after fonts, images, and layout-critical
    content load.
-   Use `transform` and `opacity` for most animations.
-   Avoid animating layout properties such as `top`, `left`, `width`, or
    `height` where transforms can achieve the same effect.
-   Do not pin content on mobile unless testing proves it is
    comfortable.
-   Do not hijack native scrolling.
-   Ensure focus order and reading order remain logical regardless of
    visual animation.

## 5.4 Lenis

Lenis is optional. If included: - Synchronise it with GSAP
ScrollTrigger. - Keep native keyboard and touch scrolling functional. -
Test mouse wheel, trackpad, touch, page-up/down, space, and anchor
navigation. - Do not make scrolling sluggish. - Remove it if it causes
accessibility, browser, or performance issues.

## 5.5 Reduced motion

Respect `prefers-reduced-motion: reduce`.

When enabled: - Disable pinned storytelling and parallax. - Disable
autoplay background video. - Replace large movement with immediate or
simple opacity changes. - Show all content in normal document flow. -
Avoid scroll-scrubbed transitions. - Ensure no information is hidden
until an animation runs.

Provide a pause control for any continuous non-essential motion.

------------------------------------------------------------------------

# 6. Responsive behaviour

Use mobile-first styling and test at real breakpoints.

  -----------------------------------------------------------------------
  Breakpoint                          Behaviour
  ----------------------------------- -----------------------------------
  Mobile: below 768px                 Natural vertical flow, stacked
                                      services, vertical process
                                      timeline, static/light hero image,
                                      minimal motion

  Tablet: 768--1199px                 Reduced pinning, smaller headings,
                                      simplified parallax, compact
                                      navigation

  Desktop: 1200px+                    Full editorial layouts, selected
                                      pinned scenes, horizontal service
                                      showcase, optional cinematic video
  -----------------------------------------------------------------------

### Mobile requirements

-   Use `100svh` or a safe equivalent for viewport-sensitive hero
    sizing.
-   Use a mobile-specific image crop.
-   Keep text readable over images with overlays where needed.
-   Stack service panels vertically.
-   Avoid forced horizontal scroll.
-   Avoid hover-only functionality and custom cursor effects.
-   Use touch targets around 44px or larger.
-   Ensure WhatsApp and any sticky CTA do not cover form controls or
    content.
-   Keep animation lightweight and short.

------------------------------------------------------------------------

# 7. Supporting pages and routes

Create these routes:

  Route                         Purpose
  ----------------------------- -----------------------------------------
  `/`                           Cinematic homepage
  `/services`                   Overview of all services
  `/services/home-assistants`   Home assistant service detail
  `/services/nannies`           Nanny service detail
  `/services/cleaning`          Professional cleaning detail
  `/our-process`                Customer journey
  `/become-a-staff`             Recruitment information and application
  `/pricing`                    Approved packages and prices
  `/contact`                    Contact details and enquiry form
  `/faq`                        Categorised FAQs
  `/privacy-policy`             Approved privacy policy
  `/terms`                      Approved terms and conditions

## 7.1 Services overview

Include an editorial introduction, three service categories, clear
responsibilities, relevant benefits, and service-specific CTAs.

## 7.2 Individual service pages

Each page should include: - Service-specific hero. - Concise
introduction. - Responsibilities and inclusions. - Explicit
boundaries/exclusions where relevant. - Available arrangements only when
confirmed. - Approved packages/prices where relevant. - FAQs. - Enquiry
CTA.

For home assistants, clearly distinguish housekeeping from childcare.
For nannies, focus on childcare. For cleaning, explain the actual
cleaning options offered.

## 7.3 Our Process

Present the verified enquiry, needs assessment, service recommendation,
pricing, agreement, matching, and commencement steps. Use an accessible
vertical timeline. Do not state a guaranteed turnaround time without
owner confirmation.

## 7.4 Become a Staff Member

Use a more functional layout while retaining the brand identity.

Suggested sections: - Recruitment introduction. - Available roles. -
Role responsibilities. - Working arrangements. - Actual recruitment
stages. - Application form. - Privacy notice.

Suggested application fields: - Full name. - Phone number. - Email. -
Location. - Position applying for. - Experience. - Availability. - CV
upload (optional if accepted). - Supporting documents (only if genuinely
required). - Consent checkbox.

Validate file type and size on both client and server. Store uploaded
documents privately; never expose application files through public URLs.
Do not collect unnecessary sensitive information.

## 7.5 Pricing

Use only owner-approved current prices.

For every package, clearly show: - Package name. - Service category. -
Price. - Billing frequency. - Included responsibilities. - Schedule. -
Additional charges, if any. - CTA.

Do not reproduce confusing old price formatting without clarification.
If the owner has not confirmed prices, display a clear "Contact us for
current pricing" message rather than inventing amounts.

## 7.6 Contact

Use a two-column desktop layout and stacked mobile layout.

Suggested form fields: - First name. - Last name. - Email or phone. -
Location. - Service required. - Preferred schedule. - Expected start
date. - Additional information.

Show a clear success state only after the backend confirms receipt. Do
not simulate successful submission.

## 7.7 FAQ

Use accessible accordion components with categories such as Services,
Pricing, Customers, and Recruitment. Use approved answers only.

------------------------------------------------------------------------

# 8. WhatsApp and conversion requirements

The existing website displays a WhatsApp/phone contact that must be
confirmed by the owner before migration. Do not hard-code an unverified
number.

Implement a floating WhatsApp button only after the correct business
number is confirmed.

Suggested prefilled message:

"Hello Home & Ease, I'm interested in learning more about your home-care
services."

Requirements: - Official WhatsApp icon. - Subtle entrance/hover
animation. - Accessible label. - Opens WhatsApp in a new tab/window
safely. - Does not obscure important content. - Mobile positioning must
account for sticky buttons and safe-area insets.

Primary conversion is a service enquiry. Secondary conversion is a staff
application. Keep calls to action consistent and specific.

------------------------------------------------------------------------

# 9. Photography and video asset requirements

## 9.1 Required owner-supplied assets

Request: - Official logo in SVG or transparent PNG. - Actual staff
photographs with permission. - Team/management photographs if
available. - Genuine service photographs (housekeeping, childcare,
cleaning). - Approved customer testimonials and permissions. - Business
phone and WhatsApp details. - Business email and location. - Current
service descriptions and pricing. - Current service areas. - Actual
staff recruitment, screening, and verification process. - Current
policies and FAQs.

## 9.2 Hero video specification

Desired footage: - Beautiful modern residential interior. - Morning
sunlight through windows. - Gentle movement of curtains. - Inviting
living room and tasteful home details. - Slow, stable camera movement. -
No audio.

Suggested delivery: - 1920×1080 desktop master. - 8--12 seconds. - 24 or
30fps. - WebM preferred, MP4 fallback. - Seamless loop if practical. -
Compressed for web. - AVIF/WebP poster image. - Separate portrait crop
or image for mobile.

## 9.3 Service image direction

  -----------------------------------------------------------------------
  Service                             Image subject
  ----------------------------------- -----------------------------------
  Home assistants                     Household organisation, laundry,
                                      living-room arrangement, kitchen
                                      support

  Nannies                             Natural childcare interaction in a
                                      bright home

  Cleaners                            Professional cleaning in an elegant
                                      kitchen or bathroom

  Trust                               Real staff portrait or approved
                                      working photograph

  Testimonials                        Actual customer portrait/video only
                                      with consent

  Final CTA                           Peaceful home interior in warm
                                      evening light
  -----------------------------------------------------------------------

Use properly licensed stock imagery as temporary visual placeholders if
genuine assets are not yet available. Store placeholders with clear
names and do not present them as actual employees or customers.

## 9.4 Image handling

-   Prefer AVIF/WebP for raster imagery.
-   Use responsive `sizes` and appropriate image dimensions.
-   Use Next.js Image where suitable.
-   Lazy-load below-the-fold images.
-   Set explicit width/height or aspect ratios to prevent layout shift.
-   Use descriptive alt text for meaningful images.
-   Use empty alt text for decorative imagery.

------------------------------------------------------------------------

# 10. Suggested Next.js project architecture

Use the existing repository structure if one already exists. Do not
overwrite or delete an existing project without inspecting it and
preserving useful work.

Suggested structure:

``` text
home-and-ease/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── staff/
│   │   ├── lifestyle/
│   │   └── testimonials/
│   ├── videos/
│   ├── icons/
│   └── logo/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   ├── home-assistants/page.tsx
│   │   │   ├── nannies/page.tsx
│   │   │   └── cleaning/page.tsx
│   │   ├── our-process/page.tsx
│   │   ├── become-a-staff/page.tsx
│   │   ├── pricing/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── api/
│   │       ├── contact/
│   │       └── applications/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── BusyLifeSection.tsx
│   │   │   ├── TransformationSection.tsx
│   │   │   ├── ServicesShowcase.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   ├── ProcessTimeline.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── FinalCTA.tsx
│   │   ├── services/
│   │   ├── forms/
│   │   ├── ui/
│   │   └── animations/
│   ├── hooks/
│   │   ├── useReducedMotion.ts
│   │   └── useScrollAnimation.ts
│   ├── lib/
│   │   ├── animations.ts
│   │   ├── validation.ts
│   │   └── contact.ts
│   ├── data/
│   │   ├── services.ts
│   │   ├── testimonials.ts
│   │   └── navigation.ts
│   └── types/
├── OWNER-CONTENT-REQUIRED.md
├── README.md
└── package.json
```

Keep content data separate from presentation. Keep animation utilities
and hooks maintainable. Avoid a single giant page component.

------------------------------------------------------------------------

# 11. Forms, privacy, and backend behaviour

The site must not pretend that a form has been submitted if no backend
exists.

For contact and staff applications: - Implement client-side validation
and server-side validation. - Validate and sanitize input. - Add spam
protection/rate limiting appropriate to the chosen hosting setup. -
Provide clear loading, success, and error states. - Do not expose
secrets in client-side code. - Do not log sensitive application data
unnecessarily. - Restrict uploaded file types and sizes. - Store CVs and
supporting documents privately. - Use access controls for any staff
application records. - Add a privacy notice explaining how
enquiries/applications are handled. - Do not collect sensitive personal
data unless genuinely necessary and approved.

If email/database credentials are not available, build the UI and a
clearly documented integration boundary. Do not claim production
submission works until tested end-to-end.

------------------------------------------------------------------------

# 12. Performance, accessibility, SEO, and quality targets

## Performance

Target Lighthouse scores of 90+ for Performance and 95+ for
Accessibility, Best Practices, and SEO where practical. These are
targets, not guarantees.

Requirements: - Optimize and appropriately size all imagery. - Compress
video and use posters. - Lazy-load below-the-fold media. - Dynamically
import heavy animation code when appropriate. - Avoid unnecessary
dependencies and third-party scripts. - Prevent layout shifts. - Use
transform/opacity for most motion. - Test on mid-range mobile hardware
and slower connections.

## Accessibility

-   Semantic HTML and correct heading hierarchy.
-   Keyboard-operable navigation, accordions, carousels, and forms.
-   Visible focus indicators.
-   Sufficient colour contrast (aim for WCAG AA).
-   Labels and helpful validation for every form field.
-   Meaningful alt text.
-   No hover-only content.
-   Reduced-motion support.
-   Pause control for continuous motion.
-   Content remains available if animation/video fails.

## SEO

-   Unique page title and meta description per route.
-   Open Graph metadata.
-   Canonical URLs.
-   Sitemap and robots file.
-   Descriptive URLs and internal links.
-   LocalBusiness structured data only with verified business details.
-   Relevant local search content for Enugu and actual service areas.
-   Do not add fake reviews or aggregate ratings to structured data.

Suggested homepage title:

`Home & Ease | Home Assistants, Nannies & Cleaning Services`

Suggested description:

`Discover home assistants, nanny services and professional cleaning support with Home & Ease. Make more time for family, comfort and the things that matter.`

------------------------------------------------------------------------

# 13. Build sequence for Codex

Work in controlled phases. Do not attempt to build the entire
application in one unreviewed generation.

## Phase 0 --- Inspect and plan

-   Inspect the current repository and package manager.
-   Identify existing code, assets, routes, and configuration.
-   Preserve useful existing work.
-   Check the existing Wix site for source content, but mark uncertain
    details for owner confirmation.
-   Create a short implementation plan and `OWNER-CONTENT-REQUIRED.md`.

## Phase 1 --- Foundation

-   Set up or repair Next.js, React, TypeScript, and Tailwind.
-   Configure fonts and design tokens.
-   Establish global layout and responsive containers.
-   Confirm lint/typecheck/build commands.

## Phase 2 --- Global shell

-   Build navigation, mobile menu, footer, buttons, typography, and
    shared UI primitives.
-   Test keyboard access and responsive behaviour.

## Phase 3 --- Homepage visual foundation

-   Build the cinematic hero.
-   Build all homepage sections in static/normal flow first.
-   Use clearly named placeholders for missing media.
-   Confirm visual hierarchy and content before adding complex motion.

## Phase 4 --- Scrollytelling

-   Add GSAP/ScrollTrigger progressively.
-   Implement pinned busy-life scene.
-   Implement transformation reveal.
-   Implement desktop horizontal service showcase.
-   Implement process timeline and subtle reveals.
-   Add reduced-motion and mobile alternatives.
-   Verify cleanup and no duplicate ScrollTriggers.

## Phase 5 --- Supporting pages

-   Build services overview and individual service pages.
-   Build Our Process, Pricing, FAQ, and Contact.
-   Build Become a Staff and application UI.
-   Reuse the design system.

## Phase 6 --- Functional integrations

-   Implement and test form endpoints/integrations once credentials and
    backend choices are supplied.
-   Add WhatsApp using owner-confirmed number.
-   Verify actual form delivery and error handling.

## Phase 7 --- Quality assurance

-   Test desktop, tablet, and mobile.
-   Test keyboard navigation and reduced motion.
-   Test all links, buttons, forms, and validation.
-   Test video/image fallbacks.
-   Run lint, typecheck, and production build.
-   Fix console errors, hydration warnings, layout shifts, and broken
    assets.
-   Review Lighthouse and real-device performance.

## Phase 8 --- Deployment readiness

-   Document environment variables without committing secrets.
-   Document deployment steps.
-   Confirm domain, analytics, and email provider with owner.
-   Provide a final list of content still requiring owner approval.

------------------------------------------------------------------------

# 14. Definition of done

The project is not complete until:

-   Homepage follows the approved creative direction.
-   All homepage sections render correctly.
-   Scrollytelling works on desktop without breaking normal navigation.
-   Mobile uses natural vertical layouts and remains usable.
-   Reduced-motion mode works.
-   All supporting routes exist and have consistent styling.
-   Service distinctions are accurate.
-   No invented prices, testimonials, credentials, guarantees, or
    business claims appear.
-   Contact and application forms either work end-to-end or are
    explicitly documented as awaiting integration.
-   WhatsApp uses the owner-confirmed number.
-   All navigation and CTA links work.
-   Accessibility and responsive checks are complete.
-   Production build succeeds.
-   Missing owner assets and approvals are documented.
-   Footer development attribution is included only with owner approval.

------------------------------------------------------------------------

# 15. Codex master execution prompt

Use the following prompt after placing this document in the project
repository as `HOME-AND-EASE-BLUEPRINT.md`.

> You are the senior frontend engineer and creative developer
> responsible for implementing the Home & Ease website.
>
> Read `HOME-AND-EASE-BLUEPRINT.md` completely before making changes.
> Also inspect the existing repository, package configuration, assets,
> and current implementation before editing anything.
>
> Treat the blueprint as the source of truth for creative direction,
> design tokens, page structure, animation behaviour, responsive
> behaviour, accessibility, content boundaries, and acceptance criteria.
>
> Build the website in the phases described in the blueprint. Begin with
> repository inspection and a concise implementation plan, then proceed
> with the foundation and homepage. Do not stop after producing a plan:
> start implementation in the same work session.
>
> Preserve existing useful code and assets. Do not overwrite or delete
> project files without understanding their purpose. Use the existing
> package manager and conventions where practical.
>
> Prioritize a visually excellent homepage, but build maintainable
> reusable React components. Implement the static layout and responsive
> behaviour before adding complex GSAP animations. Add ScrollTrigger
> interactions progressively and ensure all triggers are cleaned up
> correctly.
>
> Never invent business facts, employee identities, credentials,
> screening procedures, prices, testimonials, guarantees, contact
> details, or policies. Use explicit placeholders and document every
> missing owner input in `OWNER-CONTENT-REQUIRED.md`.
>
> Do not simulate form submissions. If backend credentials or decisions
> are missing, implement a clear integration boundary and document
> exactly what is required to make it live.
>
> Test desktop, tablet, mobile, keyboard navigation, reduced motion,
> media fallbacks, all routes, forms, and production build. Fix errors
> rather than merely listing them.
>
> At the end of each phase, report files changed, features completed,
> tests run, outstanding issues, and the next implementation phase.
> Continue through the phases that can be completed with the available
> repository and information. Ask only when a genuinely blocking owner
> decision or credential is required.
>
> The goal is a production-quality, premium digital experience---not a
> generic template or a static mockup.

------------------------------------------------------------------------

# 16. Owner approval and outstanding inputs

Before launch, obtain owner confirmation for:

-   Current service areas.
-   Current phone, WhatsApp, and email.
-   Current prices and billing arrangements.
-   Current matching timeframe.
-   Current staff recruitment and screening process.
-   Current service inclusions and exclusions.
-   Current replacement/refund/cancellation policy.
-   Approved testimonials and publication permissions.
-   Approved staff/customer photography.
-   Privacy policy and terms.
-   Permission to publish the Cyberdragon Technologies attribution and
    portfolio case study.

**Development attribution:** "Designed & Developed by Cyberdragon
Technologies" is proposed and must be approved by the owner before
publication.

**Core principle:** Make the experience memorable, but never make it
difficult to use. The website must communicate the business and enable
enquiries even when all animation is disabled.
