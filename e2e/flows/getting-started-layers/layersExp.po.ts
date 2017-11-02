import { browser, by, element, protractor } from 'protractor';
import { BasePO } from '../../base/base.po';

export class LayersPo extends BasePO {
    private _pageTitle:any;
    private _getStartBtn:any;

    constructor(conf:any) {
        super(conf);
        this._pageTitle = this.getElement('page-title');
        this._getStartBtn = this.getElement('get-started-btn');
    }

    getPageTitle() {
        return this._pageTitle;
    }

    getStatBtn() {
        return this._getStartBtn;
    }

}
