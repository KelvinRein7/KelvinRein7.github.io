import './style.css'
import {
  site,
  hero,
  about,
  education,
  experience,
  projects,
  extracurricular,
  beyond,
  contact,
} from './content.js'

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function techList(tags) {
  if (!tags?.length) return ''
  return `<ul class="tech-list">${tags.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}</ul>`
}

function photoSlots(photos, label, minSlots = 2) {
  const items = [...(photos || [])]
  while (items.length < minSlots) items.push(null)

  return `
    <div class="photo-grid" aria-label="Photos for ${escapeHtml(label)}">
      ${items
        .map((src, i) => {
          if (src) {
            return `
              <figure class="photo-slot has-image">
                <img src="${escapeHtml(src)}" alt="${escapeHtml(label)} photo ${i + 1}" loading="lazy" />
              </figure>
            `
          }
          return `
            <figure class="photo-slot placeholder" aria-hidden="true">
              <span class="photo-slot__label">Image</span>
            </figure>
          `
        })
        .join('')}
    </div>
  `
}

function letterSpans(text) {
  return [...text]
    .map(
      (ch, i) =>
        `<span class="nav__letter" style="--i:${i}">${ch === ' ' ? '&nbsp;' : escapeHtml(ch)}</span>`,
    )
    .join('')
}

function renderNav() {
  return `
    <header class="site-header">
      <a class="logo" href="#top">${escapeHtml(site.name)}</a>
      <!-- Nav hovers adapted from Uiverse.io by geekgao -->
      <nav class="nav nav--dock" aria-label="Primary">
        <a class="nav__item nav__item--scale" href="#about">About</a>
        <a class="nav__item nav__item--tilt" href="#experience">Experience</a>
        <a class="nav__item nav__item--soft" href="#projects">Projects</a>
        <a class="nav__item nav__item--lift" href="#extracurricular" aria-label="Extracurricular">${letterSpans('Extracurricular')}</a>
        <a class="nav__item nav__item--spin" href="#beyond">Beyond</a>
        <a class="nav__item nav__item--glitch" href="#contact" data-text="Contact">Contact</a>
      </nav>
    </header>
  `
}

function portraitMarkup() {
  if (hero.portrait) {
    return `<img class="hero__portrait-img" src="${escapeHtml(hero.portrait)}" alt="${escapeHtml(hero.portraitAlt)}" />`
  }
  return `
    <div class="hero__portrait-placeholder" aria-hidden="true">
      <span class="hero__portrait-mark">${escapeHtml(site.name.charAt(0))}</span>
    </div>
  `
}

function renderHero() {
  return `
    <section class="hero" id="top">
      <div class="hero__inner">
        <div class="hero__visual reveal" data-reveal>
          <p class="hero__name-vert" aria-hidden="true">${escapeHtml(hero.verticalName)}</p>
          <div class="hero__frame-wrap">
            <div class="hero__frame">
              ${portraitMarkup()}
              <span class="hero__frame-break" aria-hidden="true"></span>
            </div>
            <p class="hero__location">${escapeHtml(site.location)}</p>
          </div>
        </div>
        <div class="hero__copy">
          <h1 class="hero__greeting reveal" data-reveal>
            <span class="luffy-peek" tabindex="0">
              <img class="peek-body" src="/assets/peek.png" alt="" />
              <img class="peek-hands" src="/assets/peek-hands.png" alt="" />
              <span class="peek-label">Kelvin Rein</span>
            </span>
          </h1>
          <p class="hero__one-liner reveal" data-reveal>${escapeHtml(site.oneLiner)}</p>
          <ul class="hero__socials reveal" data-reveal>
            <li><a href="${escapeHtml(site.linkedin)}" target="_blank" rel="noopener">LinkedIn</a></li>
            <li>
              <!-- Icon tip from Uiverse.io by EcheverriaJesus (vanilla CSS) -->
              <a
                class="social-icon social-icon--github"
                href="${escapeHtml(site.github)}"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span class="social-icon__tip" aria-hidden="true">GitHub</span>
              </a>
            </li>
            <li class="hero__mail">
              <button
                type="button"
                class="hero__mail-trigger"
                id="mail-open"
                aria-expanded="false"
                aria-controls="mail-win"
              >
                Email
              </button>
              <div
                class="mail-win"
                id="mail-win"
                hidden
                role="dialog"
                aria-modal="true"
                aria-labelledby="mail-win-title"
              >
                <div class="mail-win__titlebar">
                  <span class="mail-win__title" id="mail-win-title">
                    <span class="mail-win__icon" aria-hidden="true"></span>
                    New Message.exe
                  </span>
                  <button type="button" class="mail-win__close" id="mail-close" aria-label="Close">
                    ✕
                  </button>
                </div>
                <form class="mail-win__body" id="mail-form" novalidate>
                  <p class="mail-win__to">To: ${escapeHtml(site.email)}</p>
                  <div class="mail-win__field">
                    <label for="mail-from">Your email</label>
                    <input
                      class="mail-win__input"
                      id="mail-from"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                  <div class="mail-win__field">
                    <label for="mail-message">Message</label>
                    <textarea
                      class="mail-win__input mail-win__input--area"
                      id="mail-message"
                      name="message"
                      rows="4"
                      required
                      placeholder="Say hi…"
                    ></textarea>
                  </div>
                  <input
                    class="mail-win__honeypot"
                    type="text"
                    name="_gotcha"
                    tabindex="-1"
                    autocomplete="off"
                    aria-hidden="true"
                  />
                  <p class="mail-win__status" id="mail-status" role="status" aria-live="polite"></p>
                  <div class="mail-win__actions">
                    <button type="button" class="mail-win__btn" id="mail-cancel">Cancel</button>
                    <button type="submit" class="mail-win__btn mail-win__btn--primary" id="mail-send">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </li>
          </ul>
          <p class="hero__sub-line reveal" data-reveal>${escapeHtml(site.subLine)}</p>
        </div>
      </div>
    </section>
  `
}

function renderAbout() {
  const paragraphs = about.paragraphs
    .map((p) => `<p class="about__body-p">${escapeHtml(p)}</p>`)
    .join('')

  return `
    <section class="section about" id="about">
      <div class="section__inner">
        <div class="section__head reveal" data-reveal>
          <h2>${escapeHtml(about.heading)}</h2>
          <div class="data-rule" aria-hidden="true"></div>
        </div>
        <div class="about__grid">
          <div class="about__narrative reveal" data-reveal>${paragraphs}</div>
          <aside class="about__aside reveal" data-reveal>
            <p class="edu-degree">${escapeHtml(education.degree)}</p>
            <p class="edu-school">${escapeHtml(education.school)}</p>
            <p class="edu-dates">${escapeHtml(education.dates)} · ${escapeHtml(education.location)}</p>
          </aside>
        </div>
      </div>
    </section>
  `
}

function renderExperience() {
  const visible = experience.filter((job) => !job.hidden)

  const summary = visible
    .map((job) => `<li>${escapeHtml(job.org)}</li>`)
    .join('')

  const items = visible
    .map(
      (job, index) => `
      <article class="exp-item">
        <div class="exp-item__meta">
          <span class="exp-item__index">${String(index + 1).padStart(2, '0')}</span>
          <div>
            <h3 class="exp-item__role">${escapeHtml(job.role)}</h3>
            <p class="exp-item__org">${escapeHtml(job.org)}${
              job.link
                ? ` (<a class="exp-item__site" href="${escapeHtml(job.link)}" target="_blank" rel="noopener">${escapeHtml(job.linkLabel || 'Website')}</a>)`
                : ''
            }</p>
            <p class="exp-item__dates">${escapeHtml(job.dates)}${job.location ? ` · ${escapeHtml(job.location)}` : ''}</p>
          </div>
        </div>
        <p class="exp-item__story">${escapeHtml(job.story)}</p>
        ${techList(job.tags)}
        ${photoSlots(job.photos, job.org)}
      </article>
    `,
    )
    .join('')

  return `
    <section class="section experience" id="experience">
      <div class="section__inner">
        <div class="section__head reveal" data-reveal>
          <h2>Experience</h2>
          <div class="data-rule" aria-hidden="true"></div>
        </div>
        <div class="exp-panel reveal" data-reveal>
          <ul class="exp-summary" aria-hidden="true">${summary}</ul>
          <button
            type="button"
            class="exp-toggle"
            id="exp-toggle"
            aria-expanded="false"
            aria-controls="exp-panel"
          >
            <span class="exp-toggle__label">Show experience</span>
            <span class="exp-toggle__icon" aria-hidden="true"></span>
          </button>
          <div class="exp-panel__body" id="exp-panel" hidden>
            <div class="exp-list">${items}</div>
          </div>
        </div>
      </div>
    </section>
  `
}

function renderProjects() {
  const live = projects.filter((p) => p.status === 'live')
  const experiments = projects.filter((p) => p.status === 'experiment')

  const liveItems = live
    .map((p) => {
      const link =
        p.link && p.linkLabel
          ? `<div class="project__link"><a class="text-link" href="${escapeHtml(p.link)}" target="_blank" rel="noopener">${escapeHtml(p.linkLabel)}</a></div>`
          : ''

      return `
        <article class="project ${p.featured ? 'project--featured' : ''} reveal" data-reveal>
          <div class="project__text">
            <div class="project__top">
              <h3>${escapeHtml(p.title)}</h3>
            </div>
            <p class="project__story">${escapeHtml(p.story)}</p>
            ${techList(p.tech)}
            ${link}
          </div>
          ${photoSlots(p.photos, p.title, 2)}
        </article>
      `
    })
    .join('')

  const experimentItems = experiments
    .map(
      (p) => `
      <article class="project project--experiment reveal" data-reveal>
        <div class="project__text">
          <div class="project__top">
            <h3>${escapeHtml(p.title)}</h3>
            <span class="badge">Experiment</span>
          </div>
          <p class="project__story">${escapeHtml(p.story)}</p>
          ${techList(p.tech)}
        </div>
      </article>
    `,
    )
    .join('')

  return `
    <section class="section work" id="projects">
      <div class="section__inner">
        <div class="section__head reveal" data-reveal>
          <h2>Projects</h2>
          <div class="data-rule" aria-hidden="true"></div>
          <p class="section__lede">Things I've built to see what happens.</p>
        </div>
        <div class="project-list">${liveItems}</div>
        <div class="experiments">
          <h3 class="experiments__heading reveal" data-reveal>Experiments</h3>
          <p class="experiments__lede reveal" data-reveal>Things I'm trying — some will go nowhere. That's the point.</p>
          <div class="project-list project-list--experiments">${experimentItems}</div>
        </div>
      </div>
    </section>
  `
}

function renderExtracurricular() {
  const items = extracurricular
    .map(
      (item) => `
      <article class="extra-item reveal" data-reveal>
        <h3 class="extra-item__role">${escapeHtml(item.role)}</h3>
        <p class="extra-item__org">${escapeHtml(item.org)}</p>
        <p class="extra-item__dates">${escapeHtml(item.dates)}</p>
        <p class="extra-item__story">${escapeHtml(item.story)}</p>
        ${techList(item.tags)}
      </article>
    `,
    )
    .join('')

  return `
    <section class="section extracurricular" id="extracurricular">
      <div class="section__inner">
        <div class="section__head reveal" data-reveal>
          <h2>Extracurricular</h2>
          <div class="data-rule" aria-hidden="true"></div>
          <p class="section__lede">Community work — not a job, and not a project brief.</p>
        </div>
        <div class="extra-list">${items}</div>
      </div>
    </section>
  `
}

function renderBeyond() {
  const items = beyond.items
    .map(
      (item) => `
      <article class="beyond-card reveal" data-reveal data-beyond="${escapeHtml(item.id)}">
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.blurb)}</p>
      </article>
    `,
    )
    .join('')

  return `
    <section class="section beyond" id="beyond">
      <div class="section__inner">
        <div class="section__head reveal" data-reveal>
          <h2>${escapeHtml(beyond.heading)}</h2>
          <div class="data-rule" aria-hidden="true"></div>
          <p class="section__lede">${escapeHtml(beyond.framing)}</p>
        </div>
        <div class="beyond-grid">${items}</div>
      </div>
    </section>
  `
}

function renderContact() {
  return `
    <section class="section contact" id="contact">
      <div class="section__inner">
        <div class="section__head reveal" data-reveal>
          <h2>${escapeHtml(contact.heading)}</h2>
          <div class="data-rule" aria-hidden="true"></div>
        </div>
        <p class="contact__lede reveal" data-reveal>${escapeHtml(contact.cta)}</p>
        <ul class="contact-links reveal" data-reveal>
          <li><a href="mailto:${escapeHtml(site.email)}">${escapeHtml(site.email)}</a></li>
          <li><a href="${escapeHtml(site.linkedin)}" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href="${escapeHtml(site.github)}" target="_blank" rel="noopener">GitHub</a></li>
          <li><a href="${escapeHtml(site.resume)}" target="_blank" rel="noopener">Resume (PDF)</a></li>
        </ul>
      </div>
    </section>
    <footer class="site-footer">
      <div class="data-rule" aria-hidden="true"></div>
      <p>${escapeHtml(education.degree)} · ${escapeHtml(education.school)} · ${escapeHtml(education.dates)}</p>
      <p>© ${site.year} ${escapeHtml(site.name)}</p>
    </footer>
  `
}

function render() {
  document.querySelector('#app').innerHTML = `
    ${renderNav()}
    <main>
      ${renderHero()}
      ${renderAbout()}
      ${renderExperience()}
      ${renderProjects()}
      ${renderExtracurricular()}
      ${renderBeyond()}
      ${renderContact()}
    </main>
  `
}

function initReveals() {
  const nodes = document.querySelectorAll('[data-reveal]')
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    nodes.forEach((el) => el.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )

  nodes.forEach((el) => observer.observe(el))
}

function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]')
    if (!link) return
    const id = link.getAttribute('href')
    if (!id || id === '#') return
    const target = document.querySelector(id)
    if (!target) return
    e.preventDefault()
    target.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    })
  })
}

function initExperienceToggle() {
  const btn = document.getElementById('exp-toggle')
  const panel = document.getElementById('exp-panel')
  if (!btn || !panel) return

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true'
    const next = !open
    btn.setAttribute('aria-expanded', String(next))
    panel.hidden = !next
    btn.querySelector('.exp-toggle__label').textContent = next
      ? 'Hide experience'
      : 'Show experience'
  })
}

function initMailComposer() {
  const openBtn = document.getElementById('mail-open')
  const win = document.getElementById('mail-win')
  const form = document.getElementById('mail-form')
  const status = document.getElementById('mail-status')
  const closeBtn = document.getElementById('mail-close')
  const cancelBtn = document.getElementById('mail-cancel')
  const sendBtn = document.getElementById('mail-send')
  const fromInput = document.getElementById('mail-from')
  if (!openBtn || !win || !form) return

  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`

  function setOpen(next) {
    win.hidden = !next
    openBtn.setAttribute('aria-expanded', String(next))
    if (next) {
      status.textContent = ''
      queueMicrotask(() => fromInput?.focus())
    }
  }

  function close() {
    setOpen(false)
  }

  openBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    setOpen(win.hidden)
  })

  closeBtn?.addEventListener('click', close)
  cancelBtn?.addEventListener('click', close)

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !win.hidden) close()
  })

  document.addEventListener('click', (e) => {
    if (win.hidden) return
    if (e.target.closest('.hero__mail')) return
    close()
  })

  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const email = String(form.email.value || '').trim()
    const message = String(form.message.value || '').trim()
    const honeypot = String(form._gotcha.value || '').trim()

    if (honeypot) {
      status.textContent = 'Sent.'
      form.reset()
      setTimeout(close, 900)
      return
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      status.textContent = 'Enter a valid email.'
      fromInput?.focus()
      return
    }
    if (!message) {
      status.textContent = 'Write a short message.'
      document.getElementById('mail-message')?.focus()
      return
    }

    status.textContent = 'Sending…'
    sendBtn.disabled = true

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email,
          message,
          _subject: `Portfolio message from ${email}`,
          _template: 'table',
          _replyto: email,
        }),
      })

      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data.message || 'Send failed')
      }

      status.textContent = 'Sent. Thanks!'
      form.reset()
      setTimeout(close, 1100)
    } catch {
      status.textContent = 'Couldn’t send. Try again or use Contact below.'
    } finally {
      sendBtn.disabled = false
    }
  })
}

render()
initExperienceToggle()
initMailComposer()
initReveals()
initSmoothScroll()
