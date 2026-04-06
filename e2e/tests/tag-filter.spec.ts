import { expect, test } from '@playwright/test'

import { TagFilterPage } from '../pages/tag-filter.page'

test.describe('Tag filter page', () => {
  test('React tag page heading contains "React"', async ({ page }) => {
    const tagPage = new TagFilterPage(page)
    await tagPage.goto('React')
    const heading = await tagPage.getHeadingText()
    expect(heading).toContain('React')
  })

  test('React tag page shows 5 projects (4 work + 1 FOSS)', async ({ page }) => {
    // Evli, Veikkaus, Voltti, KONE = 4 work projects with React
    // realworld-react = 1 FOSS project with React
    const tagPage = new TagFilterPage(page)
    await tagPage.goto('React')
    await expect(tagPage.projectCards).toHaveCount(5)
  })

  test('Rust tag page shows only 1 project (hrs)', async ({ page }) => {
    const tagPage = new TagFilterPage(page)
    await tagPage.goto('Rust')
    await expect(tagPage.projectCards).toHaveCount(1)
    const titles = await tagPage.getProjectCardTitles()
    expect(titles[0]).toContain('hrs')
  })
})
