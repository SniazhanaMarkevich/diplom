import { type Page } from '@playwright/test';
import { BasePage } from './basePage';
import { baseLegalInformationUrl } from '../support/constants';

export class LegalInformationPage extends BasePage {
  constructor (page: Page) {
    super(page);

    this.url = baseLegalInformationUrl;
  }

  public getChevronLocator () {
    return this.page.locator(' section.section-services-faq.inpolicy > div > div > div > div:nth-child(2)');
  }

  public getTextChevronSection () {
    return this.page.locator('div.services-faq__item.active > div.answer').getByText('Информация');
  }
}
