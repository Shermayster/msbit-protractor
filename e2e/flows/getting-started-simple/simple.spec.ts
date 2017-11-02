import {browser, element, by} from 'protractor';

describe('Protractor-TypeScript Starter', () => {
    beforeEach(() => {
        browser.rootEl = '';
        browser.get('https://angular.io/');
    });

    it('title should be Angular',() => {
        expect(browser.getTitle()).toEqual('Angular');
    });

    it('button should be presented and navigate by click', () => {
        let elem = element(by.css('.hero-cta'));
        expect(elem.isPresent()).toBeTruthy();
        elem.click();
        expect(browser.getCurrentUrl()).toEqual('https://angular.io/guide/quickstart');
    });
});
