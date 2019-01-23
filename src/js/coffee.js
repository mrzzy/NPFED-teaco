// JavaScript source code
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

function calculateCoffee() {
    var coff = document.getElementById("selectedCoffee").value;
    var selectedQuantity = document.getElementById("quantityInput").value;
    var roast = document.getElementById('selectedRoast').value;
    document.getElementById("totalCoffee").innerHTML = `You have imported ${selectedQuantity} ${coff} of ${roast}.`;
}

function countryTextUpdate() {
    document.getElementById("countryText").innerHTML = `We will be importing it to ${document.getElementById('countryInput').value} ${document.getElementById('cityInput').value} ${document.getElementById('streetInput').value}`;
}

function submission() {
    alert(`Thank you for your order, ${document.getElementById("customerName").value}`)
}

calculateCoffee()
countryTextUpdate()