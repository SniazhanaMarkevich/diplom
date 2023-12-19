import { type Page } from '@playwright/test';
import { BasePage } from './basePage';
import { baseDoctorsUrl } from '../support/baseUrl';

export class ListOfSpecialistPage extends BasePage {
  constructor (page: Page) {
    super(page);

    this.url = baseDoctorsUrl;
  }

  public async clickOnSpecializationLocator () {
    await this.page.locator('[name="specialisation"]').click();
  }

  public async selectValueSection () {
    await this.page.locator('#specialisations  li.itc-select__option.itc-select__option_selected').click();
  }

  public getSpecializationContain () {
   return this.page.locator('div:nth-child(19) div.doctors__item-desc').getByText('Врач');
  }

  public getMoreDetailsLink () {
    return this.page.locator(' div:nth-child(20) a');
  }

  public async clickOnMakeAnAppointmentButton () {
    await this.page.locator('div.info-doctor__btn > a.b1').click();
  }

  public getMakeAnAppointmentForm () {
    return this.page.locator('[id="zapis-form2"]');
  }

  public async goBackDoctorPage () {
    await this.page.goBack();
  }
}
