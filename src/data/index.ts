export type Project = {
  slug: string
  title: string
  icon: 'bank' | 'diamond' | 'repair-tool'
  customer: 'City of Espoo' | 'KONE' | 'Veikkaus'
  role: 'Full Stack Developer'
  from: string
  to: string
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

export type Tag =
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
  | 'Kotlin'
  | 'Microservices'
  | 'monocle-ts'
  | 'NodeJS'
  | 'OpenAPI'
  | 'PostgreSQL'
  | 'Preact Signals'
  | 'PureScript'
  | 'ramda'
  | 'React'
  | 'REST'
  | 'Rust'
  | 'Spring Boot'
  | 'Swagger'
  | 'Terraform'
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
