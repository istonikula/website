import { expect, type Page } from '@playwright/test'

export class LayoutPage {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  get sidebar() {
    return this.page.locator('.drawer-side aside')
  }

  get menuLinks() {
    return this.page.locator('.drawer-side .menu a')
  }

  get profileImage() {
    return this.page.locator('.drawer-side .avatar img')
  }

  get githubLink() {
    return this.page.locator('.drawer-side a[aria-label="Github"]')
  }

  get linkedinLink() {
    return this.page.locator('.drawer-side a[aria-label="Linkedin"]')
  }

  get hamburgerButton() {
    return this.page.locator('label[for="my-drawer"].btn-square')
  }

  get themeDropdownTrigger() {
    return this.page.locator('#theme-selector > div[tabindex="0"]')
  }

  get themeOptions() {
    return this.page.locator('#theme-selector div[data-theme]')
  }

  get footer() {
    return this.page.locator('footer')
  }

  async openDrawerIfMobile() {
    const viewport = this.page.viewportSize()
    if (viewport && viewport.width < 1024) {
      await this.hamburgerButton.click()
    }
  }

  async navigateViaMenu(name: 'Home' | 'Projects' | 'CV') {
    // On mobile the sidebar is off-screen until the hamburger is clicked
    await this.openDrawerIfMobile()
    await this.menuLinks.filter({ hasText: name }).click()
    await this.page.waitForLoadState('networkidle')
  }

  menuLink(name: 'Home' | 'Projects' | 'CV') {
    return this.menuLinks.filter({ hasText: name })
  }

  async resetHover() {
    await this.page.mouse.move(0, 0)
  }

  async assertMenuItemSelected(name: 'Home' | 'Projects' | 'CV', isSelected: boolean) {
    // An unselected/unhovered menu item has no background of its own — it's transparent (rgba(0,0,0,0))
    // and visually blends into the sidebar. A selected or hovered item has an explicit background color.
    const assertion = expect(this.menuLink(name))
    if (isSelected) {
      await assertion.not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
    } else {
      await assertion.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
    }
  }

  async getActiveMenuItemId() {
    const links = await this.menuLinks.all()
    for (const link of links) {
      const classes = await link.getAttribute('class')
      if (classes?.includes('bg-base-300')) {
        return link.getAttribute('id')
      }
    }
    return null
  }

  async selectTheme(theme: string) {
    await this.themeDropdownTrigger.click()
    await this.page.locator(`#theme-selector div[data-theme="${theme}"]`).click()
  }

  async getCurrentTheme() {
    return this.page.locator('html').getAttribute('data-theme')
  }
}
