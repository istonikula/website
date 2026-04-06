import { expect, test } from '@playwright/test'

import { EmploymentDetailPage } from '../pages/employment-detail.page'

test.describe('Employment detail page', () => {
  test.beforeEach(async ({ page }) => {
    const detail = new EmploymentDetailPage(page)
    await detail.goto('nitor')
  })

  test('displays "Nitor" as title', async ({ page }) => {
    const detail = new EmploymentDetailPage(page)
    await expect(detail.title).toHaveText('Nitor')
  })

  test('has rendered markdown content', async ({ page }) => {
    const detail = new EmploymentDetailPage(page)
    expect(await detail.hasContent()).toBe(true)
  })
})
