import { setTimeout } from 'timers';
import { browser, by, element, ElementFinder, protractor } from 'protractor';

browser.waitForAngularEnabled(false);
describe('Protractor-Idan Test', () => {

    beforeAll(() => {
        browser.rootEl = '';
        browser.driver.manage().window().setSize(1600,900);
        browser.get('http://10.0.3.131');
      });
      
    beforeEach(() => {
        browser.rootEl = '';
        browser.get('http://10.0.3.131');
        browser.waitForAngular();
    })

    afterEach(() => {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
        browser.driver.manage().deleteAllCookies(); 
        
      });

    it('1. Should navigate to the demo website', () => {
        browser.getTitle().then((title) => {
            expect(title).toEqual('Keshet');
        })
        const loginContainer = element(by.css('.login-container'));
        expect(loginContainer.isPresent()).toBeTruthy();
    });

    it('2. Should insert correct string to Login inputs', () => {
        element(by.className("username")).sendKeys('Primetimeuadmin');
        element(by.className("password")).sendKeys('Keshet1@');
        element(by.tagName("button")).click();
        let sidebar = element(by.css('.slide-menu'));
        let present = protractor.ExpectedConditions.presenceOf(sidebar);
        browser.wait(present).then((present) => {
            expect(present).toBeTruthy();
        })        
    });

    it('3. Should insert incorrect string to Login inputs', () => {
        element(by.className("username")).sendKeys('Pri');
        element(by.className("password")).sendKeys('Ke');
        element(by.tagName("button")).click();
        const loginContainer = element(by.css('.login-container'));
        expect(loginContainer.isPresent()).toBeTruthy();
    });
})