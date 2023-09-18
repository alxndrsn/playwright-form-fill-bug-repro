import { test, expect } from '@playwright/test';

const LOC_UNAME = 'input[name=username]';
const LOC_PWORD = 'input[name=password]';

const TXT_UNAME = 'playwright-charlie';
const TXT_PWORD = 'topsecret123';

for(let i=0; i<1000; ++i) {
  test(`fills the correct field (iteration #${i})`, async ({ page }) => {
    await page.goto('http://localhost:3000');

    await page.locator(LOC_UNAME).fill(TXT_UNAME);
    await page.locator(LOC_PWORD).fill(TXT_PWORD);

    await expect(page.locator(LOC_UNAME)).toHaveValue(TXT_UNAME);
    await expect(page.locator(LOC_PWORD)).toHaveValue(TXT_PWORD);
  });
}
