import {browser, element, by} from 'protractor';
import { ConfUtil } from '../../utils/config-util';
import { LayersConf } from './layesExp.conf';
import { LayersPo } from './layersExp.po';


describe('Protractor-TypeScript Starter', () => {
    const layersPo = new LayersPo(LayersConf);
    beforeEach(() => {
        browser.get(ConfUtil.getBaseURL());
    });

    it('title should be Angular',() => {
        expect(browser.getTitle()).toEqual(layersPo.getPageTitle());
    });

    it('button should be presented and navigate by click', () => {
        let elem = layersPo.getStatBtn();
        expect(elem.isPresent()).toBeTruthy();
        elem.click();
        expect(browser.getCurrentUrl()).toContain(ConfUtil.getBaseURL() + 'guide/quickstart');
    });
});
