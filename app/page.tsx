'use client'

import { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import {
  about,
  beyond,
  contact,
  education,
  extracurricular,
  experience,
  hero,
  projects,
  site,
} from '../src/content.js'

type ExperienceItem = {
  id: string
  role: string
  org: string
  dates: string
  location?: string | null
  story: string
  tags: string[]
  photos: string[]
  link?: string | null
  linkLabel?: string
  hidden?: boolean
}

type ProjectItem = {
  id: string
  title: string
  status: 'live' | 'experiment'
  story: string
  tech: string[]
  link?: string | null
  linkLabel?: string | null
  photos: string[]
  featured?: boolean
  logo?: string
}

type ExtraItem = {
  id: string
  role: string
  org: string
  dates: string
  story: string
  tags: string[]
}

type BeyondItem = {
  id: string
  title: string
  blurb: string
}

function SectionHeading({ title, lede }: { title: string; lede?: string }) {
  return (
    <div className="section__head reveal is-visible">
      <h2>{title}</h2>
      <div className="data-rule" aria-hidden="true" />
      {lede && <p className="section__lede">{lede}</p>}
    </div>
  )
}

function TechList({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null
  return (
    <ul className="tech-list">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  )
}

function PhotoSlots({
  photos,
  label,
  minSlots = 2,
}: {
  photos?: string[]
  label: string
  minSlots?: number
}) {
  const items = [...(photos ?? [])]
  if (!items.length && minSlots <= 0) return null
  while (items.length < minSlots) items.push('')

  return (
    <div className="photo-grid" aria-label={`Photos for ${label}`}>
      {items.map((src, index) =>
        src ? (
          <figure className="photo-slot has-image" key={src}>
            <Image src={src} alt={`${label} photo ${index + 1}`} width={1600} height={1000} loading="lazy" />
          </figure>
        ) : (
          <figure className="photo-slot placeholder" aria-hidden="true" key={`placeholder-${index}`}>
            <span className="photo-slot__label">Image</span>
          </figure>
        ),
      )}
    </div>
  )
}

function RetroClock() {
  const [time, setTime] = useState('00:00:00')

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString([], { hour12: false }))
    update()
    const interval = window.setInterval(update, 1000)
    return () => window.clearInterval(interval)
  }, [])

  return <span className="retro-clock__lcd">{time}</span>
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
    ['About', 'scale', 'about'],
    ['Experience', 'tilt', 'experience'],
    ['Projects', 'soft', 'projects'],
    ['Extracurricular', 'lift', 'extracurricular'],
    ['Contact', 'glitch', 'contact'],
  ]

  return (
    <header className="site-header">
      <a className="logo logo--clock" href="#top" aria-label="Back to top">
        <span className="retro-clock" aria-hidden="true">
          <span className="retro-clock__bezel"><RetroClock /></span>
        </span>
      </a>
      <nav className="nav nav--dock" aria-label="Primary">
        {links.map(([label, effect, id]) => (
          <a className={`nav__item nav__item--${effect}`} href={`#${id}`} key={id} data-text={label}>
            {effect === 'lift'
              ? [...label].map((letter, index) => (
                  <span className="nav__letter" style={{ '--i': index } as React.CSSProperties} key={`${letter}-${index}`}>
                    {letter === ' ' ? '\u00a0' : letter}
                  </span>
                ))
              : label}
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
      <a className="hero__scroll" href="#about" aria-label="Scroll to about">
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

function About() {
  return (
    <section className="section about" id="about">
      <div className="section__inner">
        <SectionHeading title={about.heading} />
        <div className="about__grid">
          <div className="about__narrative reveal is-visible">{about.paragraphs.map((paragraph: string) => <p className="about__body-p" key={paragraph}>{paragraph}</p>)}</div>
          <aside className="about__aside reveal is-visible">
            <p className="edu-degree">{education.degree}</p>
            <p className="edu-school">{education.school}</p>
            <p className="edu-dates">{education.dates} · {education.location}</p>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section__inner">
        <SectionHeading title="Experience" />
        <div className="exp-list">
          {(experience as ExperienceItem[]).filter((job) => !job.hidden).map((job, index) => {
            const media = job.photos?.length > 0
            return (
              <article className={`exp-item ${media ? 'exp-item--media' : ''} reveal is-visible`} key={job.id}>
                <div className="exp-item__body">
                  <div className="exp-item__meta">
                    <span className="exp-item__index">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="exp-item__role">{job.role}</h3>
                      <p className="exp-item__org">{job.org}{job.link && <> (<a className="exp-item__site" href={job.link} target="_blank" rel="noopener">{job.linkLabel ?? 'Website'}</a>)</>}</p>
                      <p className="exp-item__dates">{job.dates}{job.location && ` · ${job.location}`}</p>
                    </div>
                  </div>
                  <p className="exp-item__story">{job.story}</p>
                  <TechList tags={job.tags} />
                </div>
                {media && <PhotoSlots photos={job.photos} label={job.org} minSlots={0} />}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const live = (projects as ProjectItem[]).filter((project) => project.status === 'live')
  const experiments = (projects as ProjectItem[]).filter((project) => project.status === 'experiment')
  const renderProject = (project: ProjectItem, experiment = false) => {
    const media = project.photos?.length > 0
    return (
      <article className={`project ${experiment ? 'project--experiment' : ''} ${media ? 'project--media' : ''} ${project.logo ? 'project--logo' : ''} reveal is-visible`} key={project.id}>
        <div className="project__text">
          <div className="project__top">
            <h3>{project.title}{project.link && project.linkLabel && <> <a className="project__title-link" href={project.link} target="_blank" rel="noopener">({project.linkLabel})</a></>}</h3>
            {experiment && <span className="badge">Experiment</span>}
          </div>
          <p className="project__story">{project.story}</p>
          <TechList tags={project.tech} />
        </div>
        {media && <PhotoSlots photos={project.photos} label={project.title} minSlots={1} />}
        {project.logo && <div className="project__corner"><Image className="project__corner-logo" src={project.logo} width={150} height={150} alt="" aria-hidden="true" /></div>}
      </article>
    )
  }

  return (
    <section className="section work" id="projects">
      <div className="section__inner">
        <SectionHeading title="Projects" lede="Things I've built to see what happens." />
        <div className="project-list">{live.map((project) => renderProject(project))}</div>
        <div className="experiments">
          <h3 className="experiments__heading">Experiments</h3>
          <p className="experiments__lede">Things I&apos;m trying — some will go nowhere. That&apos;s the point.</p>
          <div className="project-list project-list--experiments">{experiments.map((project) => renderProject(project, true))}</div>
        </div>
      </div>
    </section>
  )
}

function Extracurricular() {
  return (
    <section className="section extracurricular" id="extracurricular">
      <div className="section__inner">
        <SectionHeading title="Extracurricular" lede="Community work — not a job, and not a project brief." />
        <div className="extra-list">{(extracurricular as ExtraItem[]).map((item) => <article className="extra-item reveal is-visible" key={item.id}><h3 className="extra-item__role">{item.role}</h3><p className="extra-item__org">{item.org}</p><p className="extra-item__dates">{item.dates}</p><p className="extra-item__story">{item.story}</p><TechList tags={item.tags} /></article>)}</div>
        <div className="beyond-block">
          <h3 className="beyond-block__heading">{beyond.heading}</h3>
          <p className="beyond-block__lede">{beyond.framing}</p>
          <div className="beyond-grid">{(beyond.items as BeyondItem[]).map((item) => <article className="beyond-card reveal is-visible" key={item.id}><h3>{item.title}</h3><p>{item.blurb}</p></article>)}</div>
        </div>
      </div>
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
        <About />
        <Experience />
        <Projects />
        <Extracurricular />
        <Contact />
      </main>
    </>
  )
}
