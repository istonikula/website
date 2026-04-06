import { type Page } from '@playwright/test'

export class CvPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  get projectExperienceHeading() {
    return this.page.getByText('Project Experience', { exact: true })
  }

  get employmentHeading() {
    return this.page.getByText('Employment', { exact: true })
  }

  get certificationsHeading() {
    return this.page.getByText('Certifications', { exact: true })
  }

  get educationHeading() {
    return this.page.getByText('Education', { exact: true })
  }

  get skillsHeading() {
    return this.page.getByText('Skills', { exact: true })
  }

  get skillsList() {
    return this.page.locator('ul.list-disc li')
  }

  get nitorDetailsLink() {
    return this.page.locator('a[href="/employment/nitor"]')
  }

  get educationSection() {
    // The Education section contains "Master of Science"
    return this.page.getByText('Master of Science, Computer Science')
  }

  async goto() {
    await this.page.goto('/cv')
  }

  async getSectionHeadings() {
    return Promise.all([
      this.projectExperienceHeading.textContent(),
      this.employmentHeading.textContent(),
      this.certificationsHeading.textContent(),
      this.educationHeading.textContent(),
      this.skillsHeading.textContent(),
    ])
  }

  async getProjectExperienceCount() {
    // Project experience section: 2nd div in main (after the heading)
    // Count timeline dots (span.rounded-full) inside it
    return this.page.locator('main > div').nth(1).locator('span.rounded-full').count()
  }

  async getEmploymentCount() {
    return this.page.locator('main > div').nth(3).locator('span.rounded-full').count()
  }

  async getCertificationCount() {
    return this.page.locator('main > div').nth(5).locator('span.rounded-full').count()
  }

  async getSkills() {
    const items = await this.skillsList.all()
    return Promise.all(items.map((item) => item.textContent()))
  }
}
