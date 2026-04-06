import { type Page } from '@playwright/test'

export class ProjectsPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  get workProjectsHeading() {
    return this.page.getByText('Work Projects', { exact: true })
  }

  get personalProjectsHeading() {
    return this.page.getByText('Personal Projects', { exact: true })
  }

  get workProjectCards() {
    return this.page.locator('main > div').nth(1).locator('.hero-content')
  }

  get fossProjectCards() {
    return this.page.locator('main > div').nth(3).locator('.hero-content')
  }

  get allProjectCards() {
    return this.page.locator('.hero-content')
  }

  async goto() {
    await this.page.goto('/projects')
  }

  async getWorkProjectTitles() {
    const cards = await this.workProjectCards.all()
    return Promise.all(cards.map((card) => card.locator('h1').textContent()))
  }

  async getFossProjectTitles() {
    const cards = await this.fossProjectCards.all()
    return Promise.all(cards.map((card) => card.locator('h1').textContent()))
  }

  async getFossProjectLinks() {
    // div.rounded-lg > a is the card link wrapper in HorizontalCard
    const section = this.page.locator('main > div').nth(3)
    const cardLinks = section.locator('div.rounded-lg > a')
    const all = await cardLinks.all()
    return Promise.all(
      all.map(async (link) => ({
        href: await link.getAttribute('href'),
        target: await link.getAttribute('target'),
      })),
    )
  }
}
