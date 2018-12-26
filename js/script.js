$(document).ready(function(c) {
	$('.closeBtn').on('click', function(c){

	  		$('.alert').remove();
		});
	});
});


// document.getElementById("message-user").onsubmit = function () {
//     var x = document.forms["message-user"]["name"].value;
//     var y = document.forms["message-user"]["email"].value;
//
//
//     var submit = true;
//
//     if (x == null || x == "") {
//         nameError = "Please enter your name";
//         document.getElementById("name_error").innerHTML = nameError;
//         submit = false;
//     }
//
//     if (y == null || y == "") {
//         emailError = "Please enter your email";
//         document.getElementById("email_error").innerHTML = emailError;
//         submit = false;
//     }
//
//     if (z == null || z == "") {
//         telephoneError = "Please enter your telephone";
//         document.getElementById("telephone_error").innerHTML = telephoneError;
//         submit = false;
//     }
//
//     return submit;
// }
//
// function removeWarning() {
//     document.getElementById(this.id + "_error").innerHTML = "";
// }
//
// document.getElementById("name").onkeyup = removeWarning;
// document.getElementById("email").onkeyup = removeWarning;
// document.getElementById("telephone").onkeyup = removeWarning;

// $("#messageConfirm").hide();
// $("#messageError").hide();
// $("#message-submit").click(function(){
//   if($("#search-user-field").val() && $("#message-user-field").val() != ""){
//     $("#search-user-field,#message-user-field").val("");
//     $("#messageConfirm").fadeIn().delay(3000).fadeOut();} else{$("#messageError").fadeIn().delay(3000).fadeOut();}
// });


// $("#messageConfirm").hide();
// $("#messageError").hide();
// $("#sendBtn").click(function(){
//   if($("#searchUser").val() && $("#message").val() != ""){
//     $("#searchUser,#message").val("");
//     $("#messageConfirm").fadeIn().delay(3000).fadeOut();} else{$("#messageError").fadeIn().delay(3000).fadeOut();}
// });
