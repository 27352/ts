(function(w) {
    w.vtg = w.vtg || {};

    w.vtg.config = {
        Adobe: {
            enabled: true,
            params: {
                prodApiServer: "cbs-stage.hb-api.omtrdc.net",
                devApiServer: "cbs-dev.hb-api.omtrdc.net",
                trackingServer: "saa.cbsi.com",
                reportSuite: "cnetcbscomsite-dev",
                marketingCloudOrgId: "10D31225525FF5790A490D4D@AdobeOrg",
                channel: "CBS Entertainment",
                enableSSL: true
            }
        },
        Nielsen: {
            enabled: true,
            params: {
                devApiServer: "sandbox-cloudapi.imrworldwide.com/nmapi/v2",
                prodApiServer: "cloudapi.imrworldwide.com/nmapi/v2",
                appId: "dfe5-gd82-8bsh-f8bx",
                genreId: "SE"
            }
        },
        ConvivaPs4: {
            enabled: false,
            params: {
                customerId: "c3.CBS",
                customerKey: "87a6b28bc7823e67a5bb2a0a6728c702afcae78d",
                prodServerUrl: "cbscom-test.testonly.conviva.com",
                testServerUrl: "cws.conviva.com"
            }
        }
    };

})(window);
