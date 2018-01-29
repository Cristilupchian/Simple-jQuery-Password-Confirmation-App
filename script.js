// problem - hints are shown even when form is valid


// solution - hide and show popup when apropriate through user interaction
var $password = $('#password');
var $confirmPassword = $('#confirm_password'); 


// hide hints
$("form span").hide();


function isPasswordValid(){
	return $password.val().length > 8; 
}

function arePasswordsMatching(){
	return $password.val() === $confirmPassword.val();
}

function canSubmit(){
	return isPasswordValid() && arePasswordsMatching(); 
}

function passwordEvent(){
			// find out if password it's valid 
			if(isPasswordValid()){
			// hide hint 
				$password.next().hide(); 	
			}else{
				$password.next().show();
			}
			
}
function confirmPasswordEvent(){
		if(arePasswordsMatching()){
			$confirmPassword.next().hide(); 	
		}else{
			$confirmPassword.next().show(); 	
		}

}

function enableSubmitEvent(){
		$('#submit').prop("disabled", !canSubmit());

}

// when event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent); 
			// else show hint 

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
enableSubmitEvent(); 



// when event happens on password confirmation input
// find out if password and confirmation match
	// hide hint 
	// else show hint