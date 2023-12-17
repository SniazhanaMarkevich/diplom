import { type Page } from '@playwright/test';

export class Header {
  constructor (protected readonly page: Page) {}

  public getMenuButton () {
    return this.page.locator('li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-124.menu-item-has-children').nth(1);
  }

  public getListOfDropDown () {
    return this.page.locator('li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-124.menu-item-has-children.clicked > ul');
  }

  public getLegalInformationOfDropDownList () {
    return this.page.locator('//*[text() ="Правовая информация"]').nth(1);
  }

  public getMenuDoctorButton () {
    return this.page.locator('body > div.mainmenu > div > div > nav > ul > ul > li.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-125 > a');
  }
}
