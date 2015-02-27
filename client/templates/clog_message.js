
'use strict';



Template['clog_message'].helpers({

});


Template['clog_message'].events({
    'click': function( e, template ){
        e.stopPropagation();

        Blaze.remove( template.view );
    }
});




Template['clog_message'].created = function () {

};


Template['clog_message'].rendered = function () {

};


Template['clog_message'].destroyed = function () {

};