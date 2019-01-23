/*
 * css/teaco.js
 * TEACO
 * Teaco Main Script
*/

/* Render header for the current scroll position
 * if browser position is greater than a theshold,
 * will render the header as fixed
*/
function renderHeader() {
    // Disable interactivity for expanded responsive header
    if($("header").hasClass("expanded")) return;
    const threshold = 140;

    // Check if exceeded threshold
    if($(document).scrollTop() > threshold)
        $("header").addClass("fixed");
    else
        $("header").removeClass("fixed");
}

$(document).ready(() => {
    $(window).scroll(renderHeader);

    // Event handlers for expanding and collapsing responsive header
    $(".action#expand-header").click(() => {
        $("header").addClass("expanded");
    });
    $(".action#collapse-header").click(() => {
        $("header").removeClass("expanded");
    });
});

/* Add header and footer
 * On separate html files
*/
 $(function(){
  $("#header").load("header.html"); 
  $("#footer").load("footer.html"); 
});
