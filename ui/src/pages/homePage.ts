import { type Page } from '@playwright/test';
import { BasePage } from './basePage';
import { baseUrl } from '../support/baseUrl';

export class HomePage extends BasePage {
  constructor (page: Page) {
    super(page);

    this.url = baseUrl;
  }
}
