"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var login_conf_1 = require("./login.conf");
var login_po_1 = require("./login.po");
protractor_1.browser.waitForAngularEnabled(false);
describe('Protractor-Idan Test1234', function () {
    var loginPo = new login_po_1.LoginPo();
    var selectors = login_conf_1.LoginConf.selectors;
    var messages = login_conf_1.LoginConf.messages;
    var username = login_conf_1.LoginConf.properties.username;
    var correctPassword = login_conf_1.LoginConf.properties.correctPassword;
    var incorrectPassword = login_conf_1.LoginConf.properties.incorrectPassword;
    beforeEach(function () {
        console.log('called');
        protractor_1.browser.executeScript('window.sessionStorage.clear();');
        protractor_1.browser.executeScript('window.localStorage.clear();');
        protractor_1.browser.driver.manage().window().setSize(1600, 900);
        protractor_1.browser.rootEl = '';
        protractor_1.browser.get('http://10.0.3.131');
    });
    afterEach(function () {
        console.log('called');
        protractor_1.browser.executeScript('window.sessionStorage.clear();');
        protractor_1.browser.executeScript('window.localStorage.clear();');
    });
    it('1. Should navigate to the demo website', function () {
        expect(protractor_1.browser.getTitle()).toEqual('Keshet');
    });
    // it('2. Should insert correct string to Login inputs',() =>{
    //     //element(by.className("username")).sendKeys('Primetimeuadmin');
    //     this.loginPo.fillInput(this.selectors['username-input'], this.username );
    //     //element(by.className("password")).sendKeys('Keshet1@');
    //     this.loginPo.fillInput(this.selectors['password-input'], this.correctPassword);
    //     //element(by.tagName("button")).click();
    //     this.loginPo.buttonClick(this.selectors['login-button']);
    //     var x = element(by.className('planner-container'));
    //     var y = browser.wait(protractor.ExpectedConditions.visibilityOf(x)).then(() => {
    //         expect(browser.isElementPresent(x)).toBe(true);
    //         // browser.close();
    //       });;
    // });
    // it('3. Should insert Incorrect string to Login inputs',() =>{
    //    // element(by.className("username")).sendKeys('Primetimeuadmin');
    //    this.loginPo.fillInput(this.selectors['username-input'], this.username );
    //    // element(by.className("password")).sendKeys('Keshet1');
    //    this.loginPo.fillInput(this.selectors['password-input'], this.incorrectPassword);
    //     // browser.wait(()=>{},1000);
    //    // element(by.tagName("button")).click();
    //    this.loginPo.buttonClick(this.selectors['login-button']);
    //     browser.wait(()=>{},500);
    //     var x = element(by.tagName('toster'));
    //     var y = browser.wait(protractor.ExpectedConditions.visibilityOf(x)).then(() => {
    //         expect(browser.isElementPresent(x)).toBe(true);
    //         //browser.close();
    //       });
    // }); 
});
