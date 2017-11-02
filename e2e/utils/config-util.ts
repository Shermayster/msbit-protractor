import { CONFIG } from '../e2e.config';

export class ConfUtil {

    static getBaseURL() {
        return CONFIG["baseURL"] + '/';
    }

    static getSleepTime() {
        return CONFIG["sleepTime"];
    }

}
