import { expect, test } from '@playwright/test'

import { CvPage } from '../pages/cv.page'

test.describe('CV page', () => {
  test.beforeEach(async ({ page }) => {
    const cv = new CvPage(page)
    await cv.goto()
  })

  test('displays all 5 section headings', async ({ page }) => {
    const cv = new CvPage(page)
    await expect(cv.projectExperienceHeading).toBeVisible()
    await expect(cv.employmentHeading).toBeVisible()
    await expect(cv.certificationsHeading).toBeVisible()
    await expect(cv.educationHeading).toBeVisible()
    await expect(cv.skillsHeading).toBeVisible()
  })

  test('project experience lists 5 entries', async ({ page }) => {
    const cv = new CvPage(page)
    expect(await cv.getProjectExperienceCount()).toBe(5)
  })

  test('employment lists 11 entries', async ({ page }) => {
    const cv = new CvPage(page)
    expect(await cv.getEmploymentCount()).toBe(11)
  })

  test('Nitor employment has "Details" link to /employment/nitor', async ({ page }) => {
    const cv = new CvPage(page)
    await expect(cv.nitorDetailsLink).toBeVisible()
    await expect(cv.nitorDetailsLink).toHaveAttribute('href', '/employment/nitor')
  })

  test('education shows Master of Science at University of Helsinki', async ({ page }) => {
    const cv = new CvPage(page)
    await expect(cv.educationSection).toBeVisible()
    await expect(page.getByText('University of Helsinki')).toBeVisible()
  })

  test('skills section lists technologies including React and TypeScript', async ({ page }) => {
    const cv = new CvPage(page)
    const skills = await cv.getSkills()
    const skillText = skills.join(',')
    expect(skillText).toContain('React')
    expect(skillText).toContain('TypeScript')
    expect(skillText).toContain('Go')
  })
})
