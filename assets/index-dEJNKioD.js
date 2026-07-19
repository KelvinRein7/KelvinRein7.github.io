(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={name:`Kelvin Rein`,oneLiner:`I just try stuff. Some of it works.`,subLine:`Computer Science grad · Ottawa, ON · Data Analytics × Web Dev × AI/ML`,location:`Ottawa, ON`,email:`kelvinrein.ca@outlook.com`,linkedin:`https://www.linkedin.com/in/khunthurein77ca/`,github:`https://github.com/KelvinRein7`,resume:`/KelvinRein-Resume.pdf`,year:new Date().getFullYear()},t={verticalName:`kelvin rein`,portrait:null,portraitAlt:`Portrait of Kelvin Rein`},n={heading:`About`,paragraphs:[`I studied Computer Science at Carleton. Since then I've mostly just been trying things: cleaning up messy datasets, making dashboards people actually open, shipping websites for education companies, teaching Python to a few hundred students. These days I keep the website and database running for an education company on my own — when something breaks, it's my problem.`,`The pattern with me is that I try stuff. I'll buy the domain, build the thing, and spend the weekend on an idea just to see if it works. Some experiments cost me money and go nowhere. That's fine — that's how I learn what's worth building.`]},r={degree:`Bachelor of Computer Science`,school:`Carleton University`,dates:`June 2026`,location:`Ottawa, ON`},i=[{id:`studysuccess`,role:`Data Analytics Specialist`,org:`StudySuccess.org`,dates:`Jan 2025 – Dec 2025`,location:`Remote`,story:`I took scattered student and applicant data from multiple sources and made it trustworthy — then made it useful. I built the Power BI dashboards and automated reporting the team relied on to track applications, outcomes, and program performance, plus cohort and funnel analysis that actually drove decisions.`,tags:[`Python`,`SQL`,`Power BI`,`ETL`],photos:[],link:null},{id:`fcac`,role:`Data Analyst / Data Scientist Intern`,org:`Financial Consumer Agency of Canada`,dates:`Sep 2023 – May 2024`,location:`Ottawa`,story:`I worked with 10,000+ real consumer complaint records for a federal agency. I built and evaluated NLP models to automatically classify complaints, and automated ETL pipelines that cut manual processing by ~30%. My first taste of ML with real-world stakes — government data, real consumers.`,tags:[`Python`,`SQL`,`NLP`,`ETL`],photos:[],link:null},{id:`bladex`,role:`Head of Technology & Analytics`,org:`BladeX Education`,dates:`Ongoing · side`,location:null,story:`I'm the entire tech department. I maintain and evolve the company's website and database single-handedly — infrastructure, content, data, all of it. When something breaks at BladeX, I'm the one who fixes it; when something new is needed, I'm the one who builds it.`,tags:[`Web`,`Database`,`Analytics`],photos:[],link:`https://bladex-edu.vercel.app/Home`,linkLabel:`Website`},{id:`win`,role:`Freelance Web Developer`,org:`WIN International Education`,dates:`Ongoing · freelance`,location:null,story:`Hired to build their website from the ground up as an independent freelancer. Client work: translating what a business needs into something real on the internet, on my own schedule, with my own judgment.`,tags:[`Web`,`Freelance`],photos:[],link:null},{id:`ta`,role:`Teaching Assistant (Python)`,org:`Carleton University`,dates:`Jan 2023 – Dec 2024`,location:null,story:`I graded 500+ assignments, but the real job was feedback — helping students actually get better at Python, not just get grades. I hosted tutorials too.`,tags:[`Python`,`Teaching`],photos:[],link:null}],a=[{id:`housing`,title:`Canadian Housing Prices: Booms, Corrections & Regional Divergence`,status:`live`,story:`34,026 Statistics Canada records, 27 metro areas, one question — what actually happened to Canadian housing? I used window functions and statistical aggregations to find the booms and corrections, then interactive Tableau visuals to explain COVID-era acceleration and why regions diverged.`,tech:[`Python`,`SQL (BigQuery)`,`Tableau`],link:null,linkLabel:`View project`,photos:[],featured:!0},{id:`exp-1`,title:`Untitled experiment`,status:`experiment`,story:`Something I'm trying — domain bought, weekend spent, outcome TBD.`,tech:[],link:null,linkLabel:null,photos:[],featured:!1},{id:`exp-2`,title:`Untitled experiment`,status:`experiment`,story:`Another slot for whatever I decide to build next.`,tech:[],link:null,linkLabel:null,photos:[],featured:!1}],o=[{id:`carleton-ai`,role:`Web Developer`,org:`Carleton AI Society`,dates:`~1 year`,story:`I kept the web presence running for Carleton's AI club — the place where the AI-curious on campus found talks, events, and each other. Community work, not a job: lighter stakes, genuine fun.`,tags:[`Web`,`Community`]}],s={heading:`Beyond the Code`,framing:`When I'm not in a Jupyter notebook: on a pitch, at a table, on a plane, or catching up on One Piece.`,items:[{id:`soccer`,title:`Soccer`,blurb:`I play it and I watch it. Lifestyle, not a hobby. (Also: I own drafthacker.com and think a lot about fantasy football data.)`},{id:`onepiece`,title:`One Piece`,blurb:`Long-time anime fan. If you spot a quiet easter egg somewhere on this site, that's on purpose.`},{id:`food`,title:`Food`,blurb:`Eating it, hunting for it, traveling for it.`},{id:`travel`,title:`Travel`,blurb:`New places, new food — ideally both at once.`}]},c={heading:`Contact`,cta:`Open to data, web, and AI/ML opportunities — let's talk.`};function l(e){return String(e).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function u(e){return e?.length?`<ul class="tech-list">${e.map(e=>`<li>${l(e)}</li>`).join(``)}</ul>`:``}function d(e,t,n=2){let r=[...e||[]];for(;r.length<n;)r.push(null);return`
    <div class="photo-grid" aria-label="Photos for ${l(t)}">
      ${r.map((e,n)=>e?`
              <figure class="photo-slot has-image">
                <img src="${l(e)}" alt="${l(t)} photo ${n+1}" loading="lazy" />
              </figure>
            `:`
            <figure class="photo-slot placeholder" aria-hidden="true">
              <span class="photo-slot__label">Image</span>
            </figure>
          `).join(``)}
    </div>
  `}function f(e){return[...e].map((e,t)=>`<span class="nav__letter" style="--i:${t}">${e===` `?`&nbsp;`:l(e)}</span>`).join(``)}function p(){return`
    <header class="site-header">
      <a class="logo" href="#top">${l(e.name)}</a>
      <!-- Nav hovers adapted from Uiverse.io by geekgao -->
      <nav class="nav nav--dock" aria-label="Primary">
        <a class="nav__item nav__item--scale" href="#about">About</a>
        <a class="nav__item nav__item--tilt" href="#experience">Experience</a>
        <a class="nav__item nav__item--soft" href="#projects">Projects</a>
        <a class="nav__item nav__item--lift" href="#extracurricular" aria-label="Extracurricular">${f(`Extracurricular`)}</a>
        <a class="nav__item nav__item--spin" href="#beyond">Beyond</a>
        <a class="nav__item nav__item--glitch" href="#contact" data-text="Contact">Contact</a>
      </nav>
    </header>
  `}function m(){return t.portrait?`<img class="hero__portrait-img" src="${l(t.portrait)}" alt="${l(t.portraitAlt)}" />`:`
    <div class="hero__portrait-placeholder" aria-hidden="true">
      <span class="hero__portrait-mark">${l(e.name.charAt(0))}</span>
    </div>
  `}function h(){return`
    <section class="hero" id="top">
      <div class="hero__inner">
        <div class="hero__visual reveal" data-reveal>
          <p class="hero__name-vert" aria-hidden="true">${l(t.verticalName)}</p>
          <div class="hero__frame-wrap">
            <div class="hero__frame">
              ${m()}
              <span class="hero__frame-break" aria-hidden="true"></span>
            </div>
            <p class="hero__location">${l(e.location)}</p>
          </div>
        </div>
        <div class="hero__copy">
          <h1 class="hero__greeting reveal" data-reveal>${l(e.name)}</h1>
          <p class="hero__one-liner reveal" data-reveal>${l(e.oneLiner)}</p>
          <p class="hero__sub-line reveal" data-reveal>${l(e.subLine)}</p>
          <ul class="hero__socials reveal" data-reveal>
            <li><a href="${l(e.linkedin)}" target="_blank" rel="noopener">LinkedIn</a></li>
            <li>
              <!-- Icon tip from Uiverse.io by EcheverriaJesus (vanilla CSS) -->
              <a
                class="social-icon social-icon--github"
                href="${l(e.github)}"
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
            <li><a href="mailto:${l(e.email)}">Email</a></li>
          </ul>
        </div>
      </div>
    </section>
  `}function g(){let e=n.paragraphs.map(e=>`<p class="about__body-p">${l(e)}</p>`).join(``);return`
    <section class="section about" id="about">
      <div class="section__inner">
        <div class="section__head reveal" data-reveal>
          <h2>${l(n.heading)}</h2>
          <div class="data-rule" aria-hidden="true"></div>
        </div>
        <div class="about__grid">
          <div class="about__narrative reveal" data-reveal>${e}</div>
          <aside class="about__aside reveal" data-reveal>
            <p class="edu-degree">${l(r.degree)}</p>
            <p class="edu-school">${l(r.school)}</p>
            <p class="edu-dates">${l(r.dates)} · ${l(r.location)}</p>
          </aside>
        </div>
      </div>
    </section>
  `}function _(){return`
    <section class="section experience" id="experience">
      <div class="section__inner">
        <div class="section__head reveal" data-reveal>
          <h2>Experience</h2>
          <div class="data-rule" aria-hidden="true"></div>
        </div>
        <div class="exp-list">${i.map((e,t)=>`
      <article class="exp-item reveal" data-reveal>
        <div class="exp-item__meta">
          <span class="exp-item__index">${String(t+1).padStart(2,`0`)}</span>
          <div>
            <h3 class="exp-item__role">${l(e.role)}</h3>
            <p class="exp-item__org">${l(e.org)}${e.link?` (<a class="exp-item__site" href="${l(e.link)}" target="_blank" rel="noopener">${l(e.linkLabel||`Website`)}</a>)`:``}</p>
            <p class="exp-item__dates">${l(e.dates)}${e.location?` · ${l(e.location)}`:``}</p>
          </div>
        </div>
        <p class="exp-item__story">${l(e.story)}</p>
        ${u(e.tags)}
        ${d(e.photos,e.org)}
      </article>
    `).join(``)}</div>
      </div>
    </section>
  `}function v(){let e=a.filter(e=>e.status===`live`),t=a.filter(e=>e.status===`experiment`);return`
    <section class="section work" id="projects">
      <div class="section__inner">
        <div class="section__head reveal" data-reveal>
          <h2>Projects</h2>
          <div class="data-rule" aria-hidden="true"></div>
          <p class="section__lede">Things I've built to see what happens.</p>
        </div>
        <div class="project-list">${e.map(e=>{let t=e.link&&e.linkLabel?`<div class="project__link"><a class="text-link" href="${l(e.link)}" target="_blank" rel="noopener">${l(e.linkLabel)}</a></div>`:``;return`
        <article class="project ${e.featured?`project--featured`:``} reveal" data-reveal>
          <div class="project__text">
            <div class="project__top">
              <h3>${l(e.title)}</h3>
            </div>
            <p class="project__story">${l(e.story)}</p>
            ${u(e.tech)}
            ${t}
          </div>
          ${d(e.photos,e.title,2)}
        </article>
      `}).join(``)}</div>
        <div class="experiments">
          <h3 class="experiments__heading reveal" data-reveal>Experiments</h3>
          <p class="experiments__lede reveal" data-reveal>Things I'm trying — some will go nowhere. That's the point.</p>
          <div class="project-list project-list--experiments">${t.map(e=>`
      <article class="project project--experiment reveal" data-reveal>
        <div class="project__text">
          <div class="project__top">
            <h3>${l(e.title)}</h3>
            <span class="badge">Experiment</span>
          </div>
          <p class="project__story">${l(e.story)}</p>
          ${u(e.tech)}
        </div>
      </article>
    `).join(``)}</div>
        </div>
      </div>
    </section>
  `}function y(){return`
    <section class="section extracurricular" id="extracurricular">
      <div class="section__inner">
        <div class="section__head reveal" data-reveal>
          <h2>Extracurricular</h2>
          <div class="data-rule" aria-hidden="true"></div>
          <p class="section__lede">Community work — not a job, and not a project brief.</p>
        </div>
        <div class="extra-list">${o.map(e=>`
      <article class="extra-item reveal" data-reveal>
        <h3 class="extra-item__role">${l(e.role)}</h3>
        <p class="extra-item__org">${l(e.org)}</p>
        <p class="extra-item__dates">${l(e.dates)}</p>
        <p class="extra-item__story">${l(e.story)}</p>
        ${u(e.tags)}
      </article>
    `).join(``)}</div>
      </div>
    </section>
  `}function b(){let e=s.items.map(e=>`
      <article class="beyond-card reveal" data-reveal data-beyond="${l(e.id)}">
        <h3>${l(e.title)}</h3>
        <p>${l(e.blurb)}</p>
      </article>
    `).join(``);return`
    <section class="section beyond" id="beyond">
      <div class="section__inner">
        <div class="section__head reveal" data-reveal>
          <h2>${l(s.heading)}</h2>
          <div class="data-rule" aria-hidden="true"></div>
          <p class="section__lede">${l(s.framing)}</p>
        </div>
        <div class="beyond-grid">${e}</div>
      </div>
    </section>
  `}function x(){return`
    <section class="section contact" id="contact">
      <div class="section__inner">
        <div class="section__head reveal" data-reveal>
          <h2>${l(c.heading)}</h2>
          <div class="data-rule" aria-hidden="true"></div>
        </div>
        <p class="contact__lede reveal" data-reveal>${l(c.cta)}</p>
        <ul class="contact-links reveal" data-reveal>
          <li><a href="mailto:${l(e.email)}">${l(e.email)}</a></li>
          <li><a href="${l(e.linkedin)}" target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href="${l(e.github)}" target="_blank" rel="noopener">GitHub</a></li>
          <li><a href="${l(e.resume)}" target="_blank" rel="noopener">Resume (PDF)</a></li>
        </ul>
      </div>
    </section>
    <footer class="site-footer">
      <div class="data-rule" aria-hidden="true"></div>
      <p>${l(r.degree)} · ${l(r.school)} · ${l(r.dates)}</p>
      <p>© ${e.year} ${l(e.name)}</p>
    </footer>
  `}function S(){document.querySelector(`#app`).innerHTML=`
    ${p()}
    <main>
      ${h()}
      ${g()}
      ${_()}
      ${v()}
      ${y()}
      ${b()}
      ${x()}
    </main>
  `}function C(){let e=document.querySelectorAll(`[data-reveal]`);if(window.matchMedia(`(prefers-reduced-motion: reduce)`).matches){e.forEach(e=>e.classList.add(`is-visible`));return}let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),t.unobserve(e.target))})},{threshold:.12,rootMargin:`0px 0px -8% 0px`});e.forEach(e=>t.observe(e))}function w(){document.addEventListener(`click`,e=>{let t=e.target.closest(`a[href^="#"]`);if(!t)return;let n=t.getAttribute(`href`);if(!n||n===`#`)return;let r=document.querySelector(n);r&&(e.preventDefault(),r.scrollIntoView({behavior:window.matchMedia(`(prefers-reduced-motion: reduce)`).matches?`auto`:`smooth`,block:`start`}))})}S(),C(),w();