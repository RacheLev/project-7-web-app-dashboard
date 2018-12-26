$("#messageConfirm").hide();
$("#messageError").hide();
$("#message-submit").click(function(){
  if($("#search-user-field").val() && $("#message-user-field").val() != ""){
    $("#search-user-field,#message-user-field").val("");
    $("#messageConfirm").fadeIn().delay(3000).fadeOut();} else{$("#messageError").fadeIn().delay(3000).fadeOut();}
});

$("#saveConfirm").hide();
$("#save-pref-button").click(function(){
$("#saveConfirm").fadeIn().delay(3000).fadeOut();


});
