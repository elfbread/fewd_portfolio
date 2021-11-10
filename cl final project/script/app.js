$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    })
});

// Activate Carousel
$("#myCarousel").carousel({interval: 50});

// Enable Carousel Indicators
$(".item").click(function(){
  $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#myCarousel").carousel("prev");
});

// calculate general consult estimate, assuming 10 hours per room
$(document).ready(function(){
	$(".checkout").on("keyup", ".quantity", function(){
		var price = +$(".price").data("price");
		var quantity = +$(this).val();
		$("#total").text("$" + price * quantity * 10);
	})
})

// calculate room refresh estimate, assuming 30 hours per room
$(document).ready(functionTwo(){
	$(".checkout2").on("keyup", ".quantity2", functionTwo(){
		var price2 = +$(".price2").data("price2");
		var quantity2 = +$(this).val();
		$("#total2").text("$" + price2 * quantity2 *30);
	})
})

