import { test, expect } from '@playwright/test';

test('homepage visual regression - desktop', async ({ page }, testInfo) => {
  if (testInfo.project.name !== 'chromium-desktop') return;
  await page.goto('/');
  await expect(page).toHaveScreenshot('desktop.png', { fullPage: true });
});

test('homepage visual regression - mobile', async ({ page }, testInfo) => {
  if (testInfo.project.name !== 'chromium-mobile') return;
  await page.goto('/');
  await expect(page).toHaveScreenshot('mobile.png', { fullPage: true });
});
