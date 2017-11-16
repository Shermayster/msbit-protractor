import { browser, by, element, protractor } from 'protractor';

export class LoginPo {

    constructor(){
        
    }

getElement(by_css_selector: string){
    return element(by.css(by_css_selector))
}

fillInput(element_by_css: string, msg: string){
    element(by.css(element_by_css)).sendKeys(msg);
}

buttonClick (element_by_css: string){
    element(by.css(element_by_css)).click();
}
}