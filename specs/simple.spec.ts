import {browser, element, by} from 'protractor';

describe('Protractor-Idan Test', () => {
    beforeEach(() => {
        browser.rootEl = '';
        browser.get('https://valor-software.com/ngx-bootstrap');
    });

    it('Should navigate to the demo website',() => {
        expect(browser.getTitle()).toEqual('Angular Bootstrap');
    });

});
