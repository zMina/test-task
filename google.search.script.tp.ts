import {browser, by, element} from 'protractor';

const SEARCH_FIELD_LOCATOR = '//input[@name="q"]';
const LISTBOX_LOCATOR = '//li[@id="sbt"]/parent::div';
const SEARCH_STRING = 'some text';
const LISTBOX_SUBMIT_BUTTON_LOCATOR = '//li[@id="sbt"]/parent::div//input[@name="btnK"]';
const SUBMIT_BUTTON_LOCATOR = '//div[@jsname="UUbT9"]/following-sibling::div//input[@name="btnK"]';

describe('Google search script', () => {
  it('Get search field and enter text', async () => {
    browser.get('https://google.com');

    element(by.xpath(SEARCH_FIELD_LOCATOR)).sendKeys(SEARCH_STRING);
    // To handle case when no proposed search string appears
    if (await (element(by.xpath(LISTBOX_LOCATOR))).isDisplayed()) {
      element(by.xpath(LISTBOX_SUBMIT_BUTTON_LOCATOR)).click();
    } else {
      element(by.xpath(SUBMIT_BUTTON_LOCATOR)).click();
    }
  });
});
