(() => {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const menuPanel = document.querySelector('#mobile-navigation');
  const closeButton = document.querySelector('.menu-close');

  const scrollProgress = document.querySelector('.scroll-progress');
  const updateHeader = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 24);
    if (scrollProgress) {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? Math.min(window.scrollY / scrollHeight, 1) : 0;
      scrollProgress.style.transform = `scaleX(${progress})`;
    }
  };
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const normalizePath = (path) => {
    const cleaned = path.replace(/index\.html$/i, '').replace(/\/{2,}/g, '/');
    return cleaned.endsWith('/') ? cleaned : `${cleaned}/`;
  };
  const currentPath = normalizePath(window.location.pathname);
  document.querySelectorAll('.desktop-nav a[href], .menu-panel__links a[href]').forEach((link) => {
    try {
      if (normalizePath(new URL(link.href).pathname) === currentPath) link.setAttribute('aria-current', 'page');
    } catch { /* Leave malformed links untouched; the browser will expose them in QA. */ }
  });

  const menuLinks = () => [...(menuPanel?.querySelectorAll('a[href], button:not([disabled])') || [])];
  const closeMenu = () => {
    if (!menuPanel || !menuPanel.classList.contains('is-open')) return;
    menuPanel.hidden = true;
    menuPanel.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.focus();
  };
  const openMenu = () => {
    if (!menuPanel) return;
    menuPanel.hidden = false;
    menuPanel.classList.add('is-open');
    document.body.classList.add('menu-open');
    menuButton?.setAttribute('aria-expanded', 'true');
    closeButton?.focus();
  };

  menuButton?.addEventListener('click', () => {
    if (!menuPanel.classList.contains('is-open')) openMenu();
    else closeMenu();
  });
  closeButton?.addEventListener('click', closeMenu);
  menuPanel?.addEventListener('click', (event) => {
    if (event.target === menuPanel) closeMenu();
    if (event.target.closest('a[href]')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (menuPanel?.hidden) return;
    if (event.key === 'Escape') return closeMenu();
    if (event.key !== 'Tab') return;
    const links = menuLinks();
    const first = links[0];
    const last = links.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });

  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  // Animated stats counter
  const statNumbers = document.querySelectorAll('.stat-number[data-count]');
  if (statNumbers.length && 'IntersectionObserver' in window) {
    const animateCount = (el) => {
      const target = parseInt(el.dataset.count, 10);
      const duration = 1800;
      const start = performance.now();
      const update = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * eased);
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    };
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    statNumbers.forEach((el) => statsObserver.observe(el));
  }

  document.querySelectorAll('img[data-fallback]').forEach((image) => {
    image.addEventListener('error', () => {
      image.dataset.failed = 'true';
      image.closest('[data-image-frame]')?.classList.add('image-failed');
    }, { once: true });
  });

  const serviceParam = new URLSearchParams(window.location.search).get('service');
  document.querySelectorAll('select[name="service"]').forEach((select) => {
    if (serviceParam && [...select.options].some((option) => option.value === serviceParam)) select.value = serviceParam;
  });

  const heroServiceSelect = document.querySelector('#hero-service');
  const heroWhatsAppLink = document.querySelector('#hero-whatsapp-link');
  if (heroServiceSelect && heroWhatsAppLink) {
    const servicePrompts = {
      cleaning: 'professional home cleaning',
      'home-assistants': 'home assistant services',
      nannies: 'nanny services',
      unsure: 'home support services',
    };
    const updateHeroWhatsAppLink = () => {
      const service = servicePrompts[heroServiceSelect.value] || 'home support services';
      const message = `Hello Home & Ease, I'm interested in ${service}. Please share your current services and pricing.`;
      heroWhatsAppLink.href = `https://wa.me/2347086007268?text=${encodeURIComponent(message)}`;
    };
    heroServiceSelect.addEventListener('change', updateHeroWhatsAppLink);
    updateHeroWhatsAppLink();
  }
  document.querySelectorAll('form[data-api-form]').forEach((form) => {
    const status = form.querySelector('[data-form-status]');
    const submitButton = form.querySelector('button[type="submit"]');
    form.addEventListener('input', (event) => {
      if (event.target instanceof HTMLElement) event.target.removeAttribute('aria-invalid');
      if (status) {
        status.textContent = '';
        status.removeAttribute('data-state');
      }
    });
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) {
        const invalid = form.querySelector(':invalid');
        invalid?.setAttribute('aria-invalid', 'true');
        invalid?.focus();
        return;
      }
      if (status) {
        status.textContent = 'Checking whether form delivery is connected…';
        status.removeAttribute('data-state');
      }
      if (submitButton) submitButton.disabled = true;
      try {
        const formData = Object.fromEntries(new FormData(form).entries());
        const response = await fetch(form.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(formData),
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok || !payload.ok) {
          throw new Error(payload.message || 'Form delivery is not configured. Your details have not been sent or saved.');
        }
        form.reset();
        if (status) status.textContent = 'Your enquiry was received.';
      } catch (error) {
        if (status) {
          status.dataset.state = 'error';
          status.textContent = error instanceof Error && error.message
            ? error.message
            : 'We could not reach the form service. Your details have not been sent.';
        }
      } finally {
        if (submitButton) submitButton.disabled = false;
      }
    });
  });

  const processTrack = document.querySelector('.process-track');
  const processSteps = [...document.querySelectorAll('.process-step')];
  if (processTrack && processSteps.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const index = processSteps.indexOf(entry.target);
        processSteps.forEach((step, stepIndex) => step.classList.toggle('is-active', stepIndex <= index));
        processTrack.dataset.progress = String(index + 1);
      }
    }, { rootMargin: '-25% 0px -55% 0px', threshold: 0 });
    processSteps.forEach((step) => observer.observe(step));
  }

  // Hero entrance fallback (CSS transitions) when GSAP is not available
  if (!window.gsap) {
    const heroAnimFallback = document.querySelectorAll('.hero [data-animate]');
    heroAnimFallback.forEach((el, i) => {
      el.style.transition = `opacity .6s ease ${i * 0.12}s, transform .6s ease ${i * 0.12}s`;
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    });
  }

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  const media = gsap.matchMedia();
  media.add({ desktop: '(min-width: 1200px)', reduced: '(prefers-reduced-motion: reduce)' }, (match) => {
    const { desktop, reduced } = match.conditions;
    if (!desktop || reduced) {
      document.documentElement.classList.remove('motion-ready');
      return undefined;
    }

    document.documentElement.classList.add('motion-ready');
    const context = gsap.context(() => {
    const heroImage = document.querySelector('.hero__media');
    if (heroImage) gsap.fromTo(heroImage, { scale: 1.06 }, { scale: 1, duration: 1.45, ease: 'power3.out' });

    const heroAnimElements = gsap.utils.toArray('.hero [data-animate]');
    if (heroAnimElements.length) {
      gsap.fromTo(heroAnimElements,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.12, clearProps: 'transform,visibility' }
      );
    }

    const busyStage = document.querySelector('.busy-stage');
    const storySteps = [...document.querySelectorAll('.busy__step')];
    const storyImages = [...document.querySelectorAll('.busy__visual img')];
    if (busyStage && storySteps.length === storyImages.length && storySteps.length > 1) {
      gsap.set(storySteps.slice(1), { autoAlpha: 0, y: 18 });
      gsap.set(storyImages.slice(1), { autoAlpha: 0 });
      const story = gsap.timeline({
        scrollTrigger: {
          trigger: busyStage,
          start: 'top top+=72',
          end: () => `+=${Math.round(window.innerHeight * 1.8)}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      for (let index = 0; index < storySteps.length - 1; index += 1) {
        const mark = index + 1;
        story.to(storySteps[index], { autoAlpha: 0, y: -14, duration: .18 }, mark - .12)
          .to(storyImages[index], { autoAlpha: 0, duration: .18 }, mark - .12)
          .to(storySteps[index + 1], { autoAlpha: 1, y: 0, duration: .22 }, mark)
          .to(storyImages[index + 1], { autoAlpha: 1, duration: .25 }, mark - .02);
      }
    }

    const stage = document.querySelector('.services-stage');
    const track = document.querySelector('.service-track');
    if (stage && track) {
      const distance = () => Math.max(0, track.scrollWidth - stage.clientWidth);
      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }

    const revealNodes = gsap.utils.toArray('[data-reveal]');
    revealNodes.forEach((node) => gsap.fromTo(node,
      { autoAlpha: 0, y: 22 },
      { autoAlpha: 1, y: 0, duration: .8, ease: 'power3.out', clearProps: 'transform,visibility', scrollTrigger: { trigger: node, start: 'top 88%', once: true } },
    ));
    });
    return () => {
      context.revert();
      document.documentElement.classList.remove('motion-ready');
    };
  });

  const refreshAfterMedia = () => ScrollTrigger.refresh();
  window.addEventListener('load', refreshAfterMedia, { once: true });
  document.fonts?.ready?.then(refreshAfterMedia).catch(() => {});
  window.addEventListener('pagehide', () => media.revert(), { once: true });
})();
