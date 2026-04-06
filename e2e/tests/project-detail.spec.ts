import { expect, test } from '@playwright/test'

import { ProjectDetailPage } from '../pages/project-detail.page'

test.describe('Project detail page', () => {
  test.describe('Elisa project', () => {
    test.beforeEach(async ({ page }) => {
      const detail = new ProjectDetailPage(page)
      await detail.goto('elisa')
    })

    test('displays correct title', async ({ page }) => {
      const detail = new ProjectDetailPage(page)
      await expect(detail.title).toHaveText('Centralized Customer Identity and Data Platform')
    })

    test('displays customer "Elisa"', async ({ page }) => {
      const detail = new ProjectDetailPage(page)
      await expect(detail.customer).toHaveText('Elisa')
    })

    test('displays tags as clickable badge links', async ({ page }) => {
      const detail = new ProjectDetailPage(page)
      const tags = await detail.getTags()
      expect(tags.length).toBeGreaterThan(0)
      const hrefs = await detail.getTagHrefs()
      for (const href of hrefs) {
        expect(href).toMatch(/^\/projects\//)
      }
    })
  })

  test.describe('Veikkaus project', () => {
    test.beforeEach(async ({ page }) => {
      const detail = new ProjectDetailPage(page)
      await detail.goto('veikkaus')
    })

    test('displays date range with end date', async ({ page }) => {
      const detail = new ProjectDetailPage(page)
      const text = await detail.getDateAndRole()
      expect(text).toContain('10/2020')
      expect(text).toContain('12/2023')
    })

    test('has 3 description paragraphs', async ({ page }) => {
      const detail = new ProjectDetailPage(page)
      await expect(detail.descriptionParagraphs).toHaveCount(3)
    })
  })

  test('clicking a tag navigates to tag filter page', async ({ page }) => {
    const detail = new ProjectDetailPage(page)
    await detail.goto('elisa')
    await detail.clickTag('Go')
    await expect(page).toHaveURL('/projects/Go')
  })
})
