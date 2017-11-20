import {Config, browser} from 'protractor';
import {frameworkConfig} from './params';
const HTMLReport = require('protractor-html-reporter');

export let config: Config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    directConnect: true,

    specs: ['./specs/**/*.spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'https://valor-software.com/ngx-bootstrap',
    noGlobals: false,

    onPrepare: () => {
        // Configure JasmineReporter for outputting XML results.
        let JasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new JasmineReporters.JUnitXmlReporter({
            consolidateAll: frameworkConfig.reporter.enableReporter || false,
            savePath: `${frameworkConfig.rootResultDirectory || 'reports'}/${frameworkConfig.reporter.resultsDirectoryName || 'xmlReports'}`,
            filePrefix:  frameworkConfig.reporter.resultsFileName
        }));

        // const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

        // jasmine.getEnv().addReporter(
        //     new Jasmine2HtmlReporter({
        //         savePath: 'reports/screenshots'
        //     })
        // )
    },

    // onComplete: () => {
    //     // new HTMLReport().from('./reports/results/xmlTestOutput.xml', {
    //     //     reportTitle: 'Test Execution Report',
    //     //     screenshotPath:'./reports/postResults/screenshots',
    //     //     outputPath: './reports/postResults',
    //     //     testBrowser: 'chrome'
    //     // })
    // }
};