"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var LoginPo = (function () {
    function LoginPo() {
    }
    LoginPo.prototype.getElement = function (by_css_selector) {
        return protractor_1.element(protractor_1.by.css(by_css_selector));
    };
    LoginPo.prototype.fillInput = function (element_by_css, msg) {
        protractor_1.element(protractor_1.by.css(element_by_css)).sendKeys(msg);
    };
    LoginPo.prototype.buttonClick = function (element_by_css) {
        protractor_1.element(protractor_1.by.css(element_by_css)).click();
    };
    return LoginPo;
}());
exports.LoginPo = LoginPo;
