/* =============================

	Javascript for DevBench
	@author: Jack Crawford + Jodie Doubleday
	@twitter: @jackdcrawford + @jodiedoubleday

=============================== */

$(document).ready( function() {

	// ------------------------------
	//	Ajax emailer
	// ------------------------------
	var messageDelay = 2000;  
	var contactForm = $('#contactForm');
	var messageStatus = $('#messageStatus');
	var messageButton = $('#contactForm button');
	var messageButtonText = $('#messageButtonText');
		
	contactForm.submit(function(e) {
  	e.preventDefault();
  	submitForm();
  	return false;
	});
	
	function submitForm() {
		$(messageStatus).attr('class', 'fa fa-spinner fa-spin');		
		$(messageButtonText).text('Sending');
    $.ajax( {
  		url: contactForm.attr( 'action' ) + '?ajax=true',
  		type: contactForm.attr( 'method' ),
  		data: contactForm.serialize(),
  		success: submitFinished
  	} );
  	return false;
	}
	
	// after PHP response
	function submitFinished( response ) {
  	response = $.trim( response );
  	console.log(response);
	  		 	
	 	// clear form fields
		if ( response == "success" ) {
		  $(messageStatus).attr('class', 'fa fa-check');
		  $(messageButton).attr('class', 'button-success');
  		$(messageButtonText).text('Sent!');
 			// $('#successMessage').fadeIn().delay(messageDelay).fadeOut();
 			$(':required', contactForm).removeClass('touched');
	    $('input[name=name]').val( "" );
	    $('input[name=email').val( "" );
	    $('textarea[name=message]').val( "" );
    	// $('#contactForm ul, #formButtons').delay(messageDelay+1000).fadeIn();
	    
	    // error sending message
    } else {
      $(messageStatus).attr('class', 'fa fa-ban');
  		$(messageButtonText).text('Error');
  		// $('#failureMessage').delay(500).fadeIn().delay(messageDelay).fadeOut();
  		// $('#contactForm ul, #formButtons').fadeOut().delay(messageDelay+1000).fadeIn();
		}
	}
	
	// ------------------------------
  // Reset the send message button if a user interacts with the form again 
	// ------------------------------
	$('input, textarea').on('focus', function() {
    $(messageButton).attr('class', 'button-primary');
    $(messageStatus).attr('class', 'fa fa-envelope-o');
    $(messageButtonText).text('Send');
	});
	
	// ------------------------------
  // Has a required form input been played with? 
	// ------------------------------
	$(':required').on('blur', function() {
    $(this).addClass('touched');
  });
	
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

