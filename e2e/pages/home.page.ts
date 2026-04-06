import { type Page } from '@playwright/test'

export class HomePage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  get heading() {
    return this.page.getByText('Isto Nikula', { exact: true }).first()
  }

  get subtitle() {
    return this.page.getByText('Freelance Full Stack Developer', { exact: true })
  }

  get bioParagraphs() {
    return this.page.locator('.prose-sm p')
  }

  get latestProjectsHeading() {
    return this.page.getByText('Latest Projects', { exact: true })
  }

  get projectCards() {
    return this.page.locator('main .hero-content')
  }

  async goto() {
    await this.page.goto('/')
  }

  async getProjectCardTitles() {
    const cards = await this.projectCards.all()
    return Promise.all(cards.map((card) => card.locator('h1').textContent()))
  }

  async clickProjectCard(index: number) {
    const cards = await this.projectCards.all()
    const link = cards[index].locator('..').locator('a').first()
    await link.click()
    await this.page.waitForLoadState('networkidle')
  }
}
