import { expect, test } from '@playwright/test'

import { LayoutPage } from '../pages/layout.page'

test.describe('Layout - Navigation', () => {
  test('sidebar is visible on desktop', async ({ page }) => {
    test.skip(page.viewportSize()!.width < 1024, 'desktop only')
    const layout = new LayoutPage(page)
    await page.goto('/')
    await expect(layout.sidebar).toBeInViewport()
  })

  test('sidebar is hidden on mobile until hamburger is clicked', async ({ page }) => {
    test.skip(page.viewportSize()!.width >= 1024, 'mobile only')
    const layout = new LayoutPage(page)
    await page.goto('/')
    // daisyUI hides the sidebar off-screen via CSS transform (not display:none)
    await expect(layout.sidebar).not.toBeInViewport()
    await layout.hamburgerButton.click()
    await expect(layout.sidebar).toBeInViewport()
  })

  test('sidebar menu has Home, Projects, CV links with correct hrefs', async ({ page }) => {
    const layout = new LayoutPage(page)
    await page.goto('/')
    const links = layout.menuLinks
    await expect(links.filter({ hasText: 'Home' })).toHaveAttribute('href', '/')
    await expect(links.filter({ hasText: 'Projects' })).toHaveAttribute('href', '/projects')
    await expect(links.filter({ hasText: 'CV' })).toHaveAttribute('href', '/cv')
  })

  test('sidebar has profile image', async ({ page }) => {
    const layout = new LayoutPage(page)
    await page.goto('/')
    await expect(layout.profileImage).toBeVisible()
  })

  test('sidebar has GitHub and LinkedIn social links', async ({ page }) => {
    const layout = new LayoutPage(page)
    await page.goto('/')
    await expect(layout.githubLink).toHaveAttribute('href', 'https://github.com/istonikula')
    await expect(layout.linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/istonikula')
  })

  test('navigation via sidebar menu works', async ({ page }) => {
    const layout = new LayoutPage(page)
    await page.goto('/')
    await layout.navigateViaMenu('Projects')
    await expect(page).toHaveURL('/projects')
    await layout.navigateViaMenu('CV')
    await expect(page).toHaveURL('/cv')
    await layout.navigateViaMenu('Home')
    await expect(page).toHaveURL('/')
  })

  test('theme selector changes data-theme attribute', async ({ page }) => {
    const layout = new LayoutPage(page)
    await page.goto('/')
    await layout.selectTheme('night')
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'night')
  })
})
