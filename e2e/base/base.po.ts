import { browser, by, element, ElementFinder, protractor } from 'protractor';

export class BasePO {
    protected conf_section:any;
    protected selectors:any;
    constructor(conf_section: any) {
        this.conf_section = conf_section;
        this.selectors = this.conf_section['selectors'];
    }

    getElement(by_css_selector: string) {
        return element(by.css(this.selectors[by_css_selector]));
    }

    getElementByLinkText(by_text_selector: string) {
        return element(by.linkText(this.selectors[by_text_selector]));
    }

    getElementByXpath(by_xpath_selector: string) {
        return element(by.xpath(this.selectors[by_xpath_selector]));
    }

    getElements(by_css_selector: string) {
        return element.all(by.css(this.selectors[by_css_selector]));
    }

    getInnerElement(object: ElementFinder, by_css_selector: string) {
        return object.element(by.css(this.selectors[by_css_selector]));
    }

    getInnerElements(object: ElementFinder, by_css_selector: string) {
        return object.all(by.css(this.conf_section['selectors'][by_css_selector]));
    }

    getUrl() {
        return this.conf_section.url;
    }

    switchToNewPage() {
        return browser.wait(() => {
            return browser.getAllWindowHandles().then(function (handles) {
                return handles.length == 2;
            })
        }).then(() => {
            browser.getAllWindowHandles().then(function (handles) {
                let newWindowHandle = handles[1];
                browser.driver.switchTo().window(newWindowHandle);
            });
        });
    }

    switchToOldPage() {
        return browser.getAllWindowHandles().then(function (handles) {
            let oldWindowHandle = handles[0];
            browser.driver.close();
            if (oldWindowHandle != undefined) {
                browser.driver.switchTo().window(oldWindowHandle);
            }
        });
    }

    waitForElementVisibility(element: ElementFinder) {
        return browser.wait(protractor.ExpectedConditions.visibilityOf(element));
    }

    waitForElementInvisibility(element: ElementFinder) {
        return browser.wait(protractor.ExpectedConditions.invisibilityOf(element), 3 * 60 * 1000, "timeout elapsed");
    }

    getMessages(){
        return this.conf_section['messages'];
    }

    getData(){
        return this.conf_section['data'];
    }

    waitForElementToBeClickable(element: ElementFinder){
        return browser.wait(protractor.ExpectedConditions.elementToBeClickable(element), 2000);
    }

    waitForURL(url:string){
        return browser.wait(protractor.ExpectedConditions.urlIs(url));
    }
}
