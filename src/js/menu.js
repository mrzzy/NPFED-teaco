// For Menu page
window.onload = function() {
    $('#menu_title').delay(600).fadeIn(1000).animate({'opacity':'1'},800);
    $('#menu_caption').delay(1200).fadeIn(1000).animate({'opacity':'1'},800);
    $('#menuButton').delay(1200).fadeIn(1000).animate({'opacity': '1'}, 800);
}

$(document).ready(function() {
    $("#menuButton").click(function() {
        $('html, body').animate({
            scrollTop: $("#foodContainer").offset().top-40
        }, 1000);
    });      
})