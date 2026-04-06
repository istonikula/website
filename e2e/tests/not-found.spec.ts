import { expect, test } from '@playwright/test'

import { NotFoundPage } from '../pages/not-found.page'

test.describe('404 page', () => {
  test('displays 404 heading and error message', async ({ page }) => {
    const notFound = new NotFoundPage(page)
    await notFound.goto()
    await expect(notFound.heading404).toBeVisible()
    await expect(notFound.message).toBeVisible()
  })

  test('Home button navigates to /', async ({ page }) => {
    const notFound = new NotFoundPage(page)
    await notFound.goto()
    await notFound.clickHomeButton()
    await expect(page).toHaveURL('/')
  })
})
