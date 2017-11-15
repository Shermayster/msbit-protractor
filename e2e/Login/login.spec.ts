import { browser, by, element, ElementFinder, protractor } from 'protractor';
import { LoginConf } from './login.conf';
import { LoginPo } from './login.po';

browser.waitForAngularEnabled(false);
describe('Protractor-Idan Test', () => {
 const loginPo = new LoginPo();
 const selectors = LoginConf.selectors;
 const messages = LoginConf.messages;
 const username = LoginConf.properties.username;
 const password = LoginConf.properties.password;

    beforeEach(() => {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
        browser.rootEl = '';
        browser.get('http://10.0.3.131');

    });

    it('1. Should navigate to the demo website',() => {
        expect(browser.getTitle()).toEqual('Keshet');
    });
    it('2. Should insert correct string to Login inputs',() =>{
        //element(by.className("username")).sendKeys('Primetimeuadmin');
        this.loginPo.fillInput(this.selectors['username-input'], this.username );
        //element(by.className("password")).sendKeys('Keshet1@');
        this.loginPo.fillInput(this.selectors['password-input'], this.password);
        element(by.tagName("button")).click();
        //this.loginPo.buttonClick(this.selectors['login-button']);
        var x = element(by.className('planner-container'));
        var y = browser.wait(protractor.ExpectedConditions.visibilityOf(x)).then(() => {
            expect(browser.isElementPresent(x)).toBe(true);
            // browser.close();
          });;
        
    });
    it('3. Should insert Incorrect string to Login inputs',() =>{
        element(by.className("username")).sendKeys('Primetimeuadmin');
        element(by.className("password")).sendKeys('Keshet1');
        element(by.tagName("button")).click();
        var x = element(by.tagName('toster'));
        var y = browser.wait(protractor.ExpectedConditions.visibilityOf(x)).then(() => {
            expect(browser.isElementPresent(x)).toBe(true);
            //browser.close();
          });;
       
    }); 
});
