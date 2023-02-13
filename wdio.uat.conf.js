//merge parent configuartion object + add new changes in uat(baseurl and connection timeout)
//this will override whenever we try to run from uat env
const merge = require('deepmerge')
const wdioConf = require('./wdio.conf.js')

exports.config=merge(wdioConf.config,{

    baseUrl : 'https://rahulshettyacademyUAT.com ',
    waitForTimeOut : 5000,
    //run with npx wdio run ./wdio.uat.conf.js
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        grep:'Sanity'
        //it will only run Sanity keyword in it or describe block, no need to give it in command line also
    },
})