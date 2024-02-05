export type Project = {
  slug: string
  title: string
  icon: 'bank' | 'diamond' | 'repair-tool'
  customer: 'City of Espoo' | 'KONE' | 'Veikkaus'
  role: 'Full Stack Developer'
  from: string
  to?: string
  tags: Tag[]
  paragraphs: string[]
}

export type Foss = {
  slug: string
  title: string
  description: string
  url: string
  tags: Tag[]
}

export type Cert = {
  title: string
  subtitle: string
}

export type Employment = {
  id: string
  employer: string
  locations?: string[]
  title: string
  from: string
  to?: string
  tags?: Tag[]
  paragraphs?: string[]
  projectSlugs?: string[]
}

export type Tag =
  | 'Ansible'
  | 'API Gateways'
  | 'Arrow'
  | 'AWS'
  | 'Azure'
  | 'CircleCI'
  | 'Docker'
  | 'Electron'
  | 'Express'
  | 'folktale'
  | 'fp-ts'
  | 'Functional Programming'
  | 'Gin'
  | 'Go'
  | 'gRPC'
  | 'IndexedDB'
  | 'Java'
  | 'JBoss'
  | 'Jenkins'
  | 'Kotlin'
  | 'Microservices'
  | 'monocle-ts'
  | 'MySQL'
  | 'NodeJS'
  | 'OpenAPI'
  | 'PostgreSQL'
  | 'Preact Signals'
  | 'PureScript'
  | 'ramda'
  | 'React'
  | 'Reactor'
  | 'REST'
  | 'Rust'
  | 'Spring'
  | 'Spring Boot'
  | 'Swagger'
  | 'Terraform'
  | 'Thymeleaf'
  | 'TypeScript'
  | 'Vite'
  | 'Vue'
  | 'WebSockets'
  | 'WebWorkers'

export const projects: Project[] = [
  {
    slug: 'veikkaus',
    title: 'Renewal of Sales Terminals',
    icon: 'diamond',
    customer: 'Veikkaus',
    role: 'Full Stack Developer',
    from: '10/2020',
    to: '12/2023',
    tags: [
      'Electron',
      'React',
      'TypeScript',
      'Spring Boot',
      'Kotlin',
      'OpenAPI',
      'Swagger',
      'AWS',
      'Docker',
      'Terraform',
    ],
    paragraphs: [
      'Apart from its online services on veikkaus.fi, Veikkaus maintains a significant presence in grocery stores, kiosks, and horse race tracks. At these locations, dedicated terminal devices handle the sale of Veikkaus products, including draw and sport games, Toto, and scratchers. This project aimed not only to upgrade the terminal devices themselves but also to modernise the entire interaction between the sales clerk and the customer. In addition, during 2023, all these Veikkaus games began to require mandatory customer identification.',
      'I joined the project after two years of active development. The implementation of Toto, the most complex game, had already been completed, and some features for Lotto had been initiated. The remaining draw games, all sport games, and scratchers were yet to be developed. Additionally, because the terminal software was designed to operate on custom Linux-based hardware, ongoing development and testing efforts were necessary to provide continuous feedback and facilitate improvements with the hardware manufacturer.',
      'I had the opportunity to troubleshoot low-level issues associated with the custom hardware, engage in frontend development for the terminal app, and contribute to the development of mission-critical backend services. These backend services required integration with various supporting services developed by other teams within Veikkaus or game systems from 3rd party suppliers.',
    ],
  },
  {
    slug: 'voltti',
    title: 'Voltti',
    icon: 'bank',
    customer: 'City of Espoo',
    role: 'Full Stack Developer',
    from: '2/2018',
    to: '8/2020',
    tags: [
      'React',
      'Vue',
      'TypeScript',
      'NodeJS',
      'Express',
      'Arrow',
      'Spring Boot',
      'Kotlin',
      'Microservices',
      'API Gateways',
      'Functional Programming',
      'AWS',
      'Docker',
      'Terraform',
      'CircleCI',
    ],
    paragraphs: [
      'The project was focused on producing services facilitating online grant applications and comprehensive management of the grant process. There were several different grant types (e.g. youth, culture, sports) with differing requirements in both the applying and managing phases.',
      'From a technical standpoint, this was a greenfield project, allowing our team to build from the ground up and select the entire technology stack. As the initial member to dedicate full-time effort to the project, I laid foundations to the way how backend services were developed. I actively engaged in every aspect of the stack, frequently ensuring that the outcome as a whole was kept consistent and maintainable.',
    ],
  },
  {
    slug: 'kone',
    title: 'NeMO Sales Tool',
    icon: 'repair-tool',
    customer: 'KONE',
    role: 'Full Stack Developer',
    from: '2/2017',
    to: '1/2018',
    tags: [
      'React',
      'TypeScript',
      'WebWorkers',
      'WebSockets',
      'IndexedDB',
      'NodeJS',
      'Express',
      'PostgreSQL',
      'Azure',
      'CircleCI',
      'fp-ts',
      'monocle-ts',
      'folktale',
      'ramda',
      'PureScript',
    ],
    paragraphs: [
      'Offline Web Application for selling elevator maintenance contracts. The application ran on a standard tablet browser. A key requirement for sales personnel was to visit customer locations, documenting numerous elevator and environmental details necessary to formulate suitable maintenance offers. Offline support was essential due to fluctuating network conditions at many installation sites.',
      'I joined the project when it was already in the production pilot phase. We started migrating the codebase to TypeScript in order to enhance maintainability and adapt to the evolving needs of our expanding customer base. I was involved in every part of the tech stack but with an emphasis on making the crucial parts more solid (a.o. Offline Web Application).',
    ],
  },
]
export const pinnedProjects = projects.slice(0, 3)

export const foss: Foss[] = [
  {
    slug: 'realworld-api',
    title: 'realworld-api',
    description: 'A realworld api example app featuring Arrow, Kotlin and Spring Boot',
    url: 'https://github.com/istonikula/realworld-api',
    tags: ['Arrow', 'Kotlin', 'Spring Boot', 'Functional Programming'],
  },
  {
    slug: 'realworld-go',
    title: 'realworld-go',
    description: 'A realworld api example app featuring Go, Gin and gRPC',
    url: 'https://github.com/istonikula/realworld-go',
    tags: ['Go', 'Gin', 'REST', 'gRPC'],
  },
  {
    slug: 'realworld-react',
    title: 'realworld-react',
    description: 'A realworld frontend example app featuring React, TypeScript and Vite',
    url: 'https://github.com/istonikula/realworld-react',
    tags: ['React', 'Preact Signals', 'TypeScript', 'Vite'],
  },
  {
    slug: 'hrs',
    title: 'hrs',
    description: 'Text file based time tracking',
    url: 'https://github.com/istonikula/hrs',
    tags: ['Rust'],
  },
  {
    slug: 'hetu-ts',
    title: 'hetu-ts',
    description: 'Finnish social security number (hetu) TypeScript library',
    url: 'https://github.com/istonikula/hetu-ts',
    tags: ['TypeScript'],
  },
]

export const employments: Employment[] = [
  {
    id: 'isto-nikula-oy',
    employer: 'Isto Nikula Oy',
    title: 'Freelance Software Consultant',
    from: '9/2019',
    projectSlugs: [
      'veikkaus',
      'voltti'
    ]
  },
  {
    id: 'reaktor',
    employer: 'Reaktor',
    title: 'Senior Software Architect',
    from: '1/2017',
    to: '9/2019',
    projectSlugs: [
      'voltti',
      'kone'
    ]
  },
  {
    id: 'signom',
    employer: 'Signom',
    title: 'Senior Software Architect',
    from: '8/2015',
    to: '12/2016',
    tags: [
      'Java',
      'Kotlin',
      'Spring',
      'Reactor',
      'Thymeleaf',
      'Ansible',
      'Docker',
      'Jenkins'
    ],
    paragraphs: [
      'I modernised Signom\'s technology platform and supported operational activities. My tasks included integrating strong identification services offered by Estonian ee.id and Danish NemID, renewing and decoupling document certification services from Signom’s core service offering, modernising development and CI environments, automating deployment processes, and prototyping and implementing new tools and technologies.'
    ]
  },
  {
    id: 'nitor',
    employer: 'Nitor',
    title: 'Senior Software Architect',
    from: '4/2011',
    to: '7/2015',
  },
  {
    id: 'airwide-fi',
    employer: 'Airwide Solutions',
    locations: ['Finland'],
    title: 'Senior Software Engineer',
    from: '9/2008',
    to: '4/2011',
    tags: [
      'Java',
      'Spring',
      'JBoss',
      'MySQL'
    ],
    paragraphs: [
      'Carrier grade component design and development for Airwide\'s internal messaging platform. Providing support and driving development best practices for platform based product projects.'
    ]
  },
  {
    id: 'airwide-es',
    employer: 'Airwide Solutions',
    locations: ['Spain'],
    title: 'Delivery Architect',
    from: '9/2007',
    to: '8/2008',
    paragraphs: [
      'Airwide Solutions acquired First Hop; title changed, responsibilities remained the same.'
    ]
  },
  {
    id: 'firsthop',
    employer: 'First Hop',
    locations: ['Spain'],
    title: 'Solution Architect',
    from: '9/2006',
    to: '11/2007',
    paragraphs: [
      'Requirement capture and solution design for deployment projects. Technical leader of First Hop\'s Telefónica deployment, including pre-sales support and expert support for deployment personnel. Responsible for coordinating development of Telefónica specific custom solutions.'
    ]
  },
  {
    id: 'quality',
    employer: 'Quality Objects',
    locations: ['Spain'],
    title: 'Consultant',
    from: '9/2005',
    to: '9/2006',
    paragraphs: [
      'Frontend developer in a project for Spain\'s biggest mobile operator. Responsible for server-side presentation layer integration and adapting user experience for a variety of mobile terminals and standard web browsers.'
    ]
  },
  {
    id: 'accenture',
    employer: 'Accenture',
    locations: ['Finland', 'Spain'],
    title: 'Consultant',
    from: '3/2004',
    to: '9/2005',
    paragraphs: [
      'Helsinki: Accenture\'s lead developer for the online marketplace of Finland\'s biggest media group.',
      'Madrid: short term interventions as Java technology expert to ongoing customer projects.'
    ]
  },
  {
    id: 'appelsiini',
    employer: 'Appelsiini',
    title: 'Software Engineer',
    from: '9/2003',
    to: '3/2004',
    paragraphs: [
      'Enterprise application design and development.'
    ]
  },
  {
    id: 'nokia',
    employer: 'Nokia',
    title: 'Software Engineer',
    from: '8/2000',
    to: '12/2002',
    paragraphs: [
      'Nokia WAP Server component development.'
    ]
  },
]

export const certs: Cert[] = [
  {
    title: 'AWS Certified Solutions Architect',
    subtitle: '4/2015, Amazon Web Services',
  },
  {
    title: 'Certified SAFe Practitioner',
    subtitle: '10/2013, Scaled Agile Academy',
  },
  {
    title: 'Certified SAFe Agilist',
    subtitle: '5/2013, Scaled Agile Academy',
  },
  {
    title: 'Spring Professional',
    subtitle: '10/2012, SpringSource',
  },
  {
    title: 'Certified ScrumMaster',
    subtitle: '5/2012, ScrumAlliance',
  },
]

export function fromTo({ from, to }: { from: string; to?: string }) {
  return to ? `From ${from} to ${to}` : `From ${from}`
}
