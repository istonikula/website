import type { CollectionEntry } from 'astro:content'
import type { Tag } from './tags'

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
  contentSlug?: CollectionEntry<'employment'>['slug']
}

export const employments: Employment[] = [
  {
    id: 'isto-nikula-oy',
    employer: 'Isto Nikula Oy',
    title: 'Freelance Software Consultant',
    from: '9/2019',
    projectSlugs: ['elisa', 'evli', 'veikkaus', 'voltti'],
  },
  {
    id: 'reaktor',
    employer: 'Reaktor',
    title: 'Senior Software Architect',
    from: '1/2017',
    to: '9/2019',
    projectSlugs: ['voltti', 'kone'],
  },
  {
    id: 'signom',
    employer: 'Signom',
    title: 'Senior Software Architect',
    from: '8/2015',
    to: '12/2016',
    tags: ['Java', 'Kotlin', 'Spring', 'Reactor', 'Thymeleaf', 'Ansible', 'Docker', 'Jenkins'],
    paragraphs: [
      "I modernised Signom's technology platform and supported operational activities. My tasks included integrating strong identification services offered by Estonian ee.id and Danish NemID, renewing and decoupling document certification services from Signom’s core service offering, modernising development and CI environments, automating deployment processes, and prototyping and implementing new tools and technologies.",
    ],
  },
  {
    id: 'nitor',
    employer: 'Nitor',
    title: 'Senior Software Architect',
    from: '4/2011',
    to: '7/2015',
    contentSlug: 'nitor',
  },
  {
    id: 'airwide-fi',
    employer: 'Airwide Solutions',
    locations: ['Finland'],
    title: 'Senior Software Engineer',
    from: '9/2008',
    to: '4/2011',
    tags: ['Java', 'Spring', 'JBoss', 'MySQL'],
    paragraphs: [
      "Carrier grade component design and development for Airwide's internal messaging platform. Providing support and driving development best practices for platform based product projects.",
    ],
  },
  {
    id: 'airwide-es',
    employer: 'Airwide Solutions',
    locations: ['Spain'],
    title: 'Delivery Architect',
    from: '9/2007',
    to: '8/2008',
    paragraphs: ['Airwide Solutions acquired First Hop; title changed, responsibilities remained the same.'],
  },
  {
    id: 'firsthop',
    employer: 'First Hop',
    locations: ['Spain'],
    title: 'Solution Architect',
    from: '9/2006',
    to: '11/2007',
    paragraphs: [
      "Requirement capture and solution design for deployment projects. Technical leader of First Hop's Telefónica deployment, including pre-sales support and expert support for deployment personnel. Responsible for coordinating development of Telefónica specific custom solutions.",
    ],
  },
  {
    id: 'quality',
    employer: 'Quality Objects',
    locations: ['Spain'],
    title: 'Consultant',
    from: '9/2005',
    to: '9/2006',
    paragraphs: [
      "Frontend developer in a project for Spain's biggest mobile operator. Responsible for server-side presentation layer integration and adapting user experience for a variety of mobile terminals and standard web browsers.",
    ],
  },
  {
    id: 'accenture',
    employer: 'Accenture',
    locations: ['Finland', 'Spain'],
    title: 'Consultant',
    from: '3/2004',
    to: '9/2005',
    paragraphs: [
      "Helsinki: Accenture's lead developer for the online marketplace of Finland's biggest media group.",
      'Madrid: short term interventions as Java technology expert to ongoing customer projects.',
    ],
  },
  {
    id: 'appelsiini',
    employer: 'Appelsiini',
    title: 'Software Engineer',
    from: '9/2003',
    to: '3/2004',
    paragraphs: ['Enterprise application design and development.'],
  },
  {
    id: 'nokia',
    employer: 'Nokia',
    title: 'Software Engineer',
    from: '8/2000',
    to: '12/2002',
    paragraphs: ['Nokia WAP Server component development.'],
  },
]
