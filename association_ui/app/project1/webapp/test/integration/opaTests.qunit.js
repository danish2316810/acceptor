sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'association/dan/project1/test/integration/FirstJourney',
		'association/dan/project1/test/integration/pages/CUSTOMERSList',
		'association/dan/project1/test/integration/pages/CUSTOMERSObjectPage',
		'association/dan/project1/test/integration/pages/SALESORDERSObjectPage'
    ],
    function(JourneyRunner, opaJourney, CUSTOMERSList, CUSTOMERSObjectPage, SALESORDERSObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('association/dan/project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCUSTOMERSList: CUSTOMERSList,
					onTheCUSTOMERSObjectPage: CUSTOMERSObjectPage,
					onTheSALESORDERSObjectPage: SALESORDERSObjectPage
                }
            },
            opaJourney.run
        );
    }
);