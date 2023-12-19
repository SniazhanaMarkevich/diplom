import { type Page, expect, test } from '@playwright/test';
import { HomePage } from '../src/pages/homePage';
import { ListOfSpecialistPage } from '../src/pages/listOfSpecialistPage';
import { baseDoctorInformationUrl, baseDoctorsUrl } from '../src/support/baseUrl';

test.describe.configure({ mode: 'serial' });

let page: Page;
let homePage: HomePage;
let listOfSpecialistPage: ListOfSpecialistPage;

test.describe('5 element site tests', async () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    homePage = new HomePage(page);
    listOfSpecialistPage = new ListOfSpecialistPage(page);

    await homePage.visit();
    await homePage.header.getMenuDoctorButton().click();
  });

  test.afterAll(async () => {
    await page.close();
  })

  test('Should correctly display choice of specialization', async () => {
    await listOfSpecialistPage.clickOnSpecializationLocator();
    await listOfSpecialistPage.selectValueSection();
    await expect(listOfSpecialistPage.getSpecializationContain()).toHaveText('Врач-кардиолог (взрослый прием). Стаж работы 29 лет, первая категория');
  });

  test('Should correctly open More details about the doctor after clicking on the link', async () => {
    await listOfSpecialistPage.getMoreDetailsLink().click();
    expect(homePage.getUrlCurrentPage()).toMatch(baseDoctorInformationUrl);
  });

  test('Should correctly open pop up Make an appointment', async () => {
    await listOfSpecialistPage.clickOnMakeAnAppointmentButton();
    await expect(listOfSpecialistPage.getMakeAnAppointmentForm()).toBeVisible();
  });

  test('Should correctly go back to the doctor page', async () => {
    await listOfSpecialistPage.goBackDoctorPage();
    expect(homePage.getUrlCurrentPage()).toMatch(baseDoctorsUrl);
  });
})
