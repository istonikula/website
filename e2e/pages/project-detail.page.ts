import { type Page } from '@playwright/test'

export class ProjectDetailPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  get title() {
    return this.page.locator('h1.title')
  }

  get customer() {
    return this.page.locator('article > div').nth(0)
  }

  get dateAndRole() {
    return this.page.locator('article > div').nth(1)
  }

  get tags() {
    return this.page.locator('article .badge')
  }

  get descriptionParagraphs() {
    return this.page.locator('article > p')
  }

  async goto(slug: string) {
    await this.page.goto(`/projects/${slug}`)
  }

  async getTitle() {
    return this.title.textContent()
  }

  async getCustomer() {
    return this.customer.textContent()
  }

  async getDateAndRole() {
    return this.dateAndRole.textContent()
  }

  async getTags() {
    const badges = await this.tags.all()
    return Promise.all(badges.map((b) => b.textContent()))
  }

  async getTagHrefs() {
    const badges = await this.tags.all()
    return Promise.all(badges.map((b) => b.getAttribute('href')))
  }

  async clickTag(name: string) {
    await this.tags.filter({ hasText: name }).click()
    await this.page.waitForLoadState('networkidle')
  }

  async getParagraphCount() {
    return this.descriptionParagraphs.count()
  }
}
