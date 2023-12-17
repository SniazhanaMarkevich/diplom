import { type Page, expect, test } from '@playwright/test';
import { HomePage } from '../src/pages/homePage';
import { LegalInformationPage } from '../src/pages/legalInformationPage';
import { baseLegalInformationUrl, elementText } from '../src/support/constants';

test.describe.configure({ mode: 'serial' });

let page: Page;
let homePage: HomePage;
let legalInformationPage: LegalInformationPage;

test.describe('Gezen - legal information page tests', async () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    homePage = new HomePage(page);
    legalInformationPage = new LegalInformationPage(page);

    await homePage.visit();
  });

  test.afterAll(async () => {
    await page.close();
  })

  test('Should correctly open dropdown in the menu of the header', async () => {
    await homePage.header.getMenuButton().click();
    await expect(homePage.header.getListOfDropDown()).toBeVisible();
  });

  test('Should correctly go to the page "legal information" by clicking the links from the dropdown', async () => {
    await homePage.header.getLegalInformationOfDropDownList().click();
    expect(homePage.getUrlCurrentPage()).toMatch(baseLegalInformationUrl);
  });

  test('Should correctly unfold the chevron', async () => {
    await legalInformationPage.getChevronLocator().click();
    await expect(legalInformationPage.getTextChevronSection()).toHaveText(elementText);
  });
})
