import { browser, by, element, ElementFinder, protractor } from 'protractor';

browser.waitForAngularEnabled(false);
describe('Protractor-Idan Test', () => {
    beforeEach(() => {
        browser.rootEl = '';
        browser.get('http://10.0.3.131');
    });

    it('1. Should navigate to the demo website',() => {
        expect(browser.getTitle()).toEqual('Keshet');

    it('2. Should insert correct string to Login inputs',() =>{
        element(by.className("username")).sendKeys('Primetimeuadmin');
        element(by.className("password")).sendKeys('Keshet1@');
        element(by.tagName("button")).click();
        var x = element(by.className('planner-container'));
        var y = browser.wait(protractor.ExpectedConditions.visibilityOf(x)).then(() => {
            expect(browser.isElementPresent(x)).toBe(true);
          });;
       // browser.close();
    });
    it('3. Should insert incorrect string to Login inputs',() =>{
        element(by.className("username")).sendKeys('Primetimeuadmin');
        element(by.className("password")).sendKeys('Keshet1@');
        element(by.tagName("button")).click();
        var x = element(by.className('planner-container'));
        var y = browser.wait(protractor.ExpectedConditions.visibilityOf(x)).then(() => {
            expect(browser.isElementPresent(x)).toBe(true);
          });
});
})})