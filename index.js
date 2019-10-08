var loaderPage = function() {
    $(".loader").fadeOut("slow");
    };
    
$(function() {
    loaderPage();
});

$(document).ready(function(){
    var header = $('body');
    
    var backgrounds = new Array(
        'url(image/b.jpg)'
        , 'url(image/b1.jpg)'
        , 'url(image/b2.jpg)'
        , 'url(image/b3.jpg)'
    );
    
    var current = 0;
    
    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        header.css('background-image', backgrounds[current]);
    }
    setInterval(nextBackground, 1500);
    
    header.css('background-image', backgrounds[0]);
    });

