
'use strict';



Template['clog_onscreen'].helpers({
    clogMessages: function(  ){
        return [
            {
                message: 'foobar',
                level: {
                    label: 'log'
                }

            },
            {
                message: 'msg from rendered',
                level: {
                    label: 'info'
                }
            },
            {
                message: 'msg 3',
                level: {
                    label: 'log'
                }
            }
        ]
    }
});


Template['clog_onscreen'].events({

});




Template['clog_onscreen'].created = function () {

};


Template['clog_onscreen'].rendered = function () {
    var msgView = Blaze.renderWithData(
        Template['clog_message'],
        {
            message: 'msg from rendered',
            level: {
                label: 'info'
            }
        },
        document.getElementById('clog').childNodes[1],
        this.view
    );
};


Template['clog_onscreen'].destroyed = function () {

};