/* =============================

	Javascript for DevBench
	@author: Jack Crawford + Jodie Doubleday
	@twitter: @jackdcrawford + @jodiedoubleday

=============================== */

$(function() {

	if(window.Mailr) {
    var myMailr = new window.Mailr({id: 'mailr'});
    myMailr.init();
  }

	// ------------------------------
	//	Modernizr placeholder
	// ------------------------------

	if (!Modernizr.input.placeholder) {

		// always declare javascript variables at the top of the script
		var $elements, $i, $x, $len, $formInput, $inputField, $form;

		$form = document.getElementById('contact-us').elements;

		$i = 0;

		//set placeholder values for internet explorer
		for ($len = $form.length; $i < $len; $i += 1) {

			if ($form[$i].getAttribute("placeholder") != undefined) {

				$form[$i].value = $form[$i].getAttribute("placeholder");

			} // if not undefined
		} // end for loop

		$inputField = document.forms.contactUs.getElementsByTagName('input');

		$x = 0;

		// loop through input areas to make sure placeholder disappears on focus
		for ($len = $inputField.length; $x < $len; $x += 1) {

			// Don't change the submit input!
			if ($inputField[$x].type !== "submit") {

				// Give placeholder text a grey colour
				$inputField[$x].style.color = "#999";

				//Delete the placeholder text and change CSS text colour to black on user focus
				$inputField[$x].onfocus = function () {

					this.value = "";
					this.style.color = "#000";

				};

			}

		} // if not undefined
	} // end modernizr

  // ------------------------------
  // Mobile Navbar Toggle
  // ------------------------------
  $(".navbar-toggle").click(function(){
    $("body").toggleClass("slide");
  });
});

