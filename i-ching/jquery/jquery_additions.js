// jQuery additions

$('a').click(function(){
    $('embed').remove();
    $('body').append('<embed src="http://warpit.com/syndicate/sounds/ding.wav" autostart="true" hidden="true" loop="false">');
});

