// For Tea page
window.onload = function() {
    $('#tea_title').delay(600).fadeIn(1000).animate({'opacity':'1'},800);
    $('#tea_caption').delay(1200).fadeIn(1000).animate({'opacity':'1'},800);
    $('#teaButton').delay(1200).fadeIn(1000).animate({'opacity': '1'}, 800);
}

$(document).ready(function() {
    $("#teaButton").click(function() {
        $('html, body').animate({
            scrollTop: $("#productContainer").offset().top-40
        }, 1000);
    });      
})