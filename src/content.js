/** All portfolio copy — edit here, then refresh. */

export const site = {
  name: 'Kelvin Rein',
  oneLiner: 'I just try stuff. Some of it works.',
  subLine: 'Computer Science Grad · Carleton University',
  location: 'Ottawa, ON, Canada',
  email: 'kelvinrein.ca@outlook.com',
  linkedin: 'https://www.linkedin.com/in/khunthurein77ca/',
  github: 'https://github.com/KelvinRein7',
  resume: '/KelvinRein-Resume.pdf',
  year: new Date().getFullYear(),
}

/** Portrait / frame extras for when we redesign the hero UI */
export const hero = {
  verticalName: 'Data x Web x AI/ML',
  /** Set to an image path under /public when available, e.g. '/portrait.jpg' */
  portrait: '/persona.png',
  portraitAlt: 'Kelvin Rein persona',
}

export const about = {
  heading: 'About',
  paragraphs: [
    "I studied Computer Science at Carleton. Since then I've mostly just been trying things: cleaning up messy datasets, making dashboards people actually open, shipping websites for education companies, teaching Python to a few hundred students. These days I keep the website and database running for an education company on my own — when something breaks, it's my problem.",
    "The pattern with me is that I try stuff. I'll buy the domain, build the thing, and spend the weekend on an idea just to see if it works. Some experiments cost me money and go nowhere. That's fine — that's how I learn what's worth building.",
  ],
}

export const education = {
  degree: 'Bachelor of Computer Science',
  school: 'Carleton University',
  dates: 'June 2026',
  location: 'Ottawa, ON',
}

/**
 * Experience only — paid / formal roles.
 * Each entry uses `story` (2–3 sentences). No resume bullets.
 */
export const experience = [
  {
    id: 'studysuccess',
    role: 'Data Analytics Specialist',
    org: 'StudySuccess.org',
    dates: 'Jan 2025 – Dec 2025',
    location: 'Remote',
    story:
      'I took scattered student and applicant data from multiple sources and made it trustworthy — then made it useful. I built the Power BI dashboards and automated reporting the team relied on to track applications, outcomes, and program performance, plus cohort and funnel analysis that actually drove decisions.',
    tags: ['Python', 'SQL', 'Power BI', 'ETL'],
    photos: [],
    link: null,
  },
  {
    id: 'fcac',
    role: 'Data Analyst / Data Scientist Intern',
    org: 'Financial Consumer Agency of Canada',
    dates: 'Sep 2023 – May 2024',
    location: 'Ottawa',
    story:
      'I worked with 10,000+ real consumer complaint records for a federal agency. I built and evaluated NLP models to automatically classify complaints, and automated ETL pipelines that cut manual processing by ~30%. My first taste of ML with real-world stakes — government data, real consumers.',
    tags: ['Python', 'SQL', 'NLP', 'ETL'],
    photos: [],
    link: null,
  },
  {
    id: 'bladex',
    role: 'Head of Technology & Analytics',
    org: 'BladeX Education',
    dates: 'Ongoing · side',
    location: null,
    story:
      "I'm the entire tech department. I maintain and evolve the company's website and database single-handedly — infrastructure, content, data, all of it. When something breaks at BladeX, I'm the one who fixes it; when something new is needed, I'm the one who builds it.",
    tags: ['Web', 'Database', 'Analytics'],
    photos: [],
    link: 'https://bladex-edu.vercel.app/Home',
    linkLabel: 'Website',
  },
  {
    id: 'win',
    role: 'Freelance Web Developer',
    org: 'WIN International Education',
    dates: 'Ongoing · freelance',
    location: null,
    story:
      'Hired to build their website from the ground up as an independent freelancer. Client work: translating what a business needs into something real on the internet, on my own schedule, with my own judgment.',
    tags: ['Web', 'Freelance'],
    photos: [],
    link: null,
    hidden: true,
  },
  {
    id: 'ta',
    role: 'Teaching Assistant (Python)',
    org: 'Carleton University',
    dates: 'Jan 2023 – Dec 2024',
    location: null,
    story:
      'I graded 500+ assignments, but the real job was feedback — helping students actually get better at Python, not just get grades. I hosted tutorials too.',
    tags: ['Python', 'Teaching'],
    photos: [],
    link: null,
  },
]

/**
 * Projects only — personal / portfolio work.
 * status: 'live' | 'experiment' — experiments are intentional WIP slots.
 * Add a project = add one object here.
 */
export const projects = [
  {
    id: 'housing',
    title: 'Canadian Housing Prices: Booms, Corrections & Regional Divergence',
    status: 'live',
    story:
      '34,026 Statistics Canada records, 27 metro areas, one question — what actually happened to Canadian housing? I used window functions and statistical aggregations to find the booms and corrections, then interactive Tableau visuals to explain COVID-era acceleration and why regions diverged.',
    tech: ['Python', 'SQL (BigQuery)', 'Tableau'],
    link: null,
    linkLabel: 'View project',
    photos: [],
    featured: true,
  },
  {
    id: 'exp-1',
    title: 'Untitled experiment',
    status: 'experiment',
    story: "Something I'm trying — domain bought, weekend spent, outcome TBD.",
    tech: [],
    link: null,
    linkLabel: null,
    photos: [],
    featured: false,
  },
  {
    id: 'exp-2',
    title: 'Untitled experiment',
    status: 'experiment',
    story: 'Another slot for whatever I decide to build next.',
    tech: [],
    link: null,
    linkLabel: null,
    photos: [],
    featured: false,
  },
]

/** Extracurricular — community / club work. Not experience, not projects. */
export const extracurricular = [
  {
    id: 'carleton-ai',
    role: 'Web Developer',
    org: 'Carleton AI Society',
    dates: '~1 year',
    story:
      "I kept the web presence running for Carleton's AI club — the place where the AI-curious on campus found talks, events, and each other. Community work, not a job: lighter stakes, genuine fun.",
    tags: ['Web', 'Community'],
  },
]

export const beyond = {
  heading: 'Beyond the Code',
  framing:
    "When I'm not in a Jupyter notebook: on a pitch, at a table, on a plane, or catching up on One Piece.",
  items: [
    {
      id: 'soccer',
      title: 'Soccer',
      blurb:
        'I play it and I watch it. Lifestyle, not a hobby. (Also: I own drafthacker.com and think a lot about fantasy football data.)',
    },
    {
      id: 'onepiece',
      title: 'One Piece',
      blurb:
        "Long-time anime fan. If you spot a quiet easter egg somewhere on this site, that's on purpose.",
    },
    {
      id: 'food',
      title: 'Food',
      blurb: 'Eating it, hunting for it, traveling for it.',
    },
    {
      id: 'travel',
      title: 'Travel',
      blurb: 'New places, new food — ideally both at once.',
    },
  ],
}

export const contact = {
  heading: 'Contact',
  cta: "Open to data, web, and AI/ML opportunities — let's talk.",
}

/** Compact skill tags — prefer showing these on cards; strip is optional. */
export const skillsCompact = [
  'Python',
  'SQL',
  'Power BI',
  'Tableau',
  'NLP',
  'ETL',
  'Next.js',
  'TypeScript',
  'Git',
  'BigQuery',
]
