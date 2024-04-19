sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'association.dan.project1',
            componentId: 'CUSTOMERSObjectPage',
            contextPath: '/CUSTOMERS'
        },
        CustomPageDefinitions
    );
});