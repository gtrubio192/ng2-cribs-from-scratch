import { browser, by, element } from 'protractor';

export class Ng2CribsFromScratchPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
