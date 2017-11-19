import {browser, element, by} from 'protractor';

describe('Protractor-Idan Test', () => {
    beforeEach(() => {
        browser.rootEl = '';
        browser.get('https://valor-software.com/ngx-bootstrap');
    });

    it('test 1',() => {
        expect(browser.getTitle()).toEqual('Angular Bootstrap');
    });

});
