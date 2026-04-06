import { type Page } from '@playwright/test'

export class EmploymentDetailPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  get title() {
    return this.page.locator('h1.title')
  }

  get content() {
    return this.page.locator('article')
  }

  async goto(slug: string) {
    await this.page.goto(`/employment/${slug}`)
  }

  async getTitle() {
    return this.title.textContent()
  }

  async hasContent() {
    return this.content.locator('p').count().then((count) => count > 0)
  }
}
