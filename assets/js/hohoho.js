
$('#link-about').on('click', function (event) {
	e.preventDefault();
	e.stopPropagation();
	e.cancelBubble = true;

});

$('#link-interest').on('click', function (event) {
	e.preventDefault();
	e.stopPropagation();
	e.cancelBubble = true;

});

$('#link-portfolio').on('click', function (event) {
	e.preventDefault();
	e.stopPropagation();
	e.cancelBubble = true;

});

$('#link-contact').on('click', function (event) {
	e.preventDefault();
	e.stopPropagation();
	e.cancelBubble = true;

	$('#about').hide();
	$('contact').fadeIn();

});




			

				$regBtn.on('click', function (event) {
					event.preventDefault();
					event.stopPropagation();
					event.cancelBubble = true;

					var $cancelBtn = $regForm.find('#cancel'),
						cancelCallback = function (event) {
							event.preventDefault();
							event.stopPropagation();
							event.cancelBubble = true;

							$cancelBtn.off('click', cancelCallback);

							// Hide the registration form
							$regForm.hide();

							// Show social login buttons
							$social.fadeIn();
							$regBtn.fadeIn();
							$smsBtn.fadeIn(); 
							$guest.fadeIn();
						};

					// Hide social login buttons
					$social.hide();
					$regBtn.hide();
					$guest.hide();
					$smsBtn.hide();

					// Show the registration form
					$regForm.fadeIn();

					$cancelBtn.on('click', cancelCallback);
				});

				$smsBtn.on('click', function (event) {
					event.preventDefault();
					event.stopPropagation();
					event.cancelBubble = true;

					var $cancelBtnSms = $('#sms-number-form').find('#cancel-sms'),
						cancelCallback_sms = function (event) {
							event.preventDefault();
							event.stopPropagation();
							event.cancelBubble = true;

							$cancelBtnSms.off('click', cancelCallback_sms);

							//Hide 
							$smsNumberForm.hide();

							//Show
							$social.fadeIn();
							$regBtn.fadeIn();
							$smsBtn.fadeIn();
							$guest.fadeIn();
						};

					//Hidden
					$social.hide();
					$regBtn.hide();
					$guest.hide();
					$smsBtn.hide();

					//Shown
					$smsNumberForm.fadeIn();


					$cancelBtnSms.on('click', cancelCallback_sms);
				}); 
			} ())