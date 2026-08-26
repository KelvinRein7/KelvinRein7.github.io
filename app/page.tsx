'use client'

import { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import { contact, education, hero, site } from '../src/content.js'

function SectionHeading({ title, lede }: { title: string; lede?: string }) {
  return (
    <div className="section__head reveal is-visible">
      <h2>{title}</h2>
      <div className="data-rule" aria-hidden="true" />
      {lede && <p className="section__lede">{lede}</p>}
    </div>
  )
}

function MailComposer() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const email = String(form.get('email') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()
    const honeypot = String(form.get('_gotcha') ?? '').trim()

    if (honeypot) {
      setStatus('Sent.')
      event.currentTarget.reset()
      return
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('Enter a valid email.')
      return
    }
    if (!message) {
      setStatus('Write a short message.')
      return
    }

    setSending(true)
    setStatus('Sending…')
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.email)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email,
          message,
          _subject: `Portfolio message from ${email}`,
          _template: 'table',
          _replyto: email,
        }),
      })
      if (!response.ok) throw new Error('Send failed')
      setStatus('Sent. Thanks!')
      event.currentTarget.reset()
      window.setTimeout(() => setOpen(false), 1100)
    } catch {
      setStatus('Couldn’t send. Try again or use Contact below.')
    } finally {
      setSending(false)
    }
  }

  return (
    <li className="hero__mail">
      <button
        type="button"
        className="hero__mail-trigger"
        aria-expanded={open}
        aria-controls="mail-win"
        onClick={() => setOpen((current) => !current)}
      >
        Email
      </button>
      {open && (
        <div className="mail-win" id="mail-win" role="dialog" aria-modal="true" aria-labelledby="mail-win-title">
          <div className="mail-win__titlebar">
            <span className="mail-win__title" id="mail-win-title">
              <span className="mail-win__icon" aria-hidden="true" />
              New Message.exe
            </span>
            <button type="button" className="mail-win__close" aria-label="Close" onClick={() => setOpen(false)}>
              ✕
            </button>
          </div>
          <form className="mail-win__body" onSubmit={handleSubmit}>
            <p className="mail-win__to">To: {site.email}</p>
            <div className="mail-win__field">
              <label htmlFor="mail-from">Your email</label>
              <input className="mail-win__input" id="mail-from" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="mail-win__field">
              <label htmlFor="mail-message">Message</label>
              <textarea className="mail-win__input mail-win__input--area" id="mail-message" name="message" rows={4} required placeholder="Say hi…" />
            </div>
            <input className="mail-win__honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <p className="mail-win__status" role="status" aria-live="polite">{status}</p>
            <div className="mail-win__actions">
              <button type="button" className="mail-win__btn" onClick={() => setOpen(false)}>Cancel</button>
              <button type="submit" className="mail-win__btn mail-win__btn--primary" disabled={sending}>Send</button>
            </div>
          </form>
        </div>
      )}
    </li>
  )
}

function Header() {
  const links = [
    ['About', 'top'],
    ['Contact', 'contact'],
  ]

  return (
    <header className="site-header">
      <nav className="nav nav--dock" aria-label="Primary">
        {links.map(([label, id]) => (
          <a className="nav__item" href={`#${id}`} key={id}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero hero--no-portrait" id="top">
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 className="hero__greeting reveal is-visible">
            <span className="luffy-peek" tabIndex={0}>
              <Image className="peek-body" src="/assets/peek.png" width={160} height={160} alt="" draggable={false} />
              <Image className="peek-hands" src="/assets/peek-hands.png" width={160} height={160} alt="" draggable={false} />
              <span className="peek-label">{hero.displayName}</span>
            </span>
          </h1>
          <p className="hero__one-liner reveal is-visible">{site.oneLiner}</p>
          <p className="hero__location hero__location--inline reveal is-visible">{site.location}</p>
          <div className="hero__socials-row reveal is-visible">
            <ul className="hero__socials">
              <li><a href={site.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
              <li>
                <a className="social-icon social-icon--github" href={site.github} target="_blank" rel="noopener" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span className="social-icon__tip" aria-hidden="true">GitHub</span>
                </a>
              </li>
              <MailComposer />
            </ul>
            <div className="hero__resume-wrap">
              <span className="hero__resume-cue" aria-hidden="true"><span className="hero__resume-cue-label">Resume</span><span>↙</span></span>
              <a className="hero__resume-sticker" href={site.resume} target="_blank" rel="noopener" aria-label="Download resume (PDF)">
                <Image src="/resume-sticker.png" width={150} height={150} alt="" draggable={false} />
              </a>
            </div>
          </div>
          <p className="hero__sub-line reveal is-visible">{site.subLine}</p>
        </div>
      </div>
      <a className="hero__scroll" href="#contact" aria-label="Scroll to contact">
        <svg className="hero__scroll-mouse" viewBox="0 0 24 36" aria-hidden="true">
          <rect
            x="1"
            y="1"
            width="22"
            height="34"
            rx="11"
            ry="11"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <circle className="hero__scroll-wheel" cx="12" cy="10" r="1.6" fill="currentColor" />
        </svg>
      </a>
    </section>
  )
}

function Contact() {
  return (
    <>
      <section className="section contact" id="contact">
        <div className="section__inner">
          <SectionHeading title={contact.heading} />
          <p className="contact__lede">{contact.cta}</p>
          <ul className="contact-links">
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a href={site.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a href={site.github} target="_blank" rel="noopener">GitHub</a></li>
            <li><a href={site.resume} target="_blank" rel="noopener">Resume (PDF)</a></li>
          </ul>
        </div>
      </section>
      <footer className="site-footer">
        <div className="data-rule" aria-hidden="true" />
        <p>{education.degree} · {education.school} · {education.dates}</p>
        <p>© {site.year} {site.name}</p>
        <p className="site-footer__credit">Icons by <a href="https://icons8.com" target="_blank" rel="noopener">Icons8</a></p>
      </footer>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Contact />
      </main>
    </>
  )
}
