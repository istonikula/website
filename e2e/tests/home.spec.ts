import { expect, test } from '@playwright/test'

import { HomePage } from '../pages/home.page'

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    const home = new HomePage(page)
    await home.goto()
  })

  test('displays "Isto Nikula" heading', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.heading).toBeVisible()
  })

  test('displays "Freelance Full Stack Developer" subtitle', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.subtitle).toBeVisible()
  })

  test('displays bio paragraphs with expected content', async ({ page }) => {
    const home = new HomePage(page)
    const paras = home.bioParagraphs
    await expect(paras).toHaveCount(2)
    await expect(paras.first()).toContainText('results-driven Software Architect')
    await expect(paras.last()).toContainText('exploring Go and Rust')
  })

  test('shows "Latest Projects" with exactly 3 cards', async ({ page }) => {
    const home = new HomePage(page)
    await expect(home.latestProjectsHeading).toBeVisible()
    await expect(home.projectCards).toHaveCount(3)
  })

  test('pinned project cards show Elisa, Evli, Veikkaus', async ({ page }) => {
    const home = new HomePage(page)
    const titles = await home.getProjectCardTitles()
    const text = titles.join(' ')
    expect(text).toContain('Elisa')
    expect(text).toContain('Evli')
    expect(text).toContain('Veikkaus')
  })
})
