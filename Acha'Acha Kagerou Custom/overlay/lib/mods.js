var jq = jQuery.noConflict();



jq('nav > .container').hide();

jq(document).ready(function(){
    jq('#init-menu > ul li.button').click(function(){
        jq('nav > .container').slideToggle('slow', function() {
            if (jq(#init-menu > ul li.button).is(":visible")) {
                 jq('#init-menu > ul li.button span').text('Hide');                
            } else {
                 jq('#init-menu > ul li.button span').text('Display');                
            }        
        });
            
    });
