import { type Page } from '@playwright/test'

export class NotFoundPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  get heading404() {
    return this.page.getByText('404', { exact: true })
  }

  get message() {
    return this.page.getByText("The page you're looking for couldn't be found.")
  }

  get homeButton() {
    return this.page.locator('a.btn', { hasText: 'Home' })
  }

  async goto() {
    await this.page.goto('/this-page-does-not-exist')
  }

  async clickHomeButton() {
    await this.homeButton.click()
    await this.page.waitForLoadState('networkidle')
  }
}
