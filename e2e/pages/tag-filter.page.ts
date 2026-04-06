import { type Page } from '@playwright/test'

export class TagFilterPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  get heading() {
    return this.page.locator('main .text-3xl').first()
  }

  get projectCards() {
    return this.page.locator('.hero-content')
  }

  async goto(tag: string) {
    await this.page.goto(`/projects/${tag}`)
  }

  async getHeadingText() {
    return this.heading.textContent()
  }

  async getProjectCardTitles() {
    const cards = await this.projectCards.all()
    return Promise.all(cards.map((card) => card.locator('h1').textContent()))
  }

  async getProjectCount() {
    return this.projectCards.count()
  }
}
