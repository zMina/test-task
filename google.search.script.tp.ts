import {browser, by, element} from 'protractor';

const SEARCH_FIELD_LOCATOR = '//input[@class="gLFyf gsfi"]' ;
const SUBMIT_BUTTON_LOCATOR = '//div[@class="FPdoLc VlcLAe"]//input[@name="btnK"]';
const SEARCH_STRING = 'some text which is better to keep in separate file:)';

describe('Google search script', function() {
  it('Get search field and enter text', function() {
    browser.get('https://google.com');

    element(by.xpath(SEARCH_FIELD_LOCATOR)).sendKeys(SEARCH_STRING);
    element(by.xpath(SUBMIT_BUTTON_LOCATOR)).click();
  });
});
