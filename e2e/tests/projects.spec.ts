import { expect, test } from '@playwright/test'

import { ProjectsPage } from '../pages/projects.page'

test.describe('Projects index page', () => {
  test.beforeEach(async ({ page }) => {
    const projects = new ProjectsPage(page)
    await projects.goto()
  })

  test('displays "Work Projects" heading', async ({ page }) => {
    const projects = new ProjectsPage(page)
    await expect(projects.workProjectsHeading).toBeVisible()
  })

  test('displays "Personal Projects" heading', async ({ page }) => {
    const projects = new ProjectsPage(page)
    await expect(projects.personalProjectsHeading).toBeVisible()
  })

  test('lists 6 work project cards', async ({ page }) => {
    const projects = new ProjectsPage(page)
    await expect(projects.workProjectCards).toHaveCount(6)
  })

  test('lists 5 FOSS project cards', async ({ page }) => {
    const projects = new ProjectsPage(page)
    await expect(projects.fossProjectCards).toHaveCount(5)
  })

  test('FOSS project cards link externally with target="_blank"', async ({ page }) => {
    const projects = new ProjectsPage(page)
    const links = await projects.getFossProjectLinks()
    for (const link of links) {
      expect(link.href).toMatch(/^https:\/\/github\.com\/istonikula\//)
      expect(link.target).toBe('_blank')
    }
  })
})
