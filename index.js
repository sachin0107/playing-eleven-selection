val email="email";
val emaill="emaill";
val password="password";

$("#submit").on("click", function(event) {
  event.preventDefault();
  var input = $("input#myInput").val();

  if (email=4 && emaill=5 && password =7) {
    console.log("redirect");
    window.location.href = "https://www.w3schools.com/tags/att_script_src.asp";
  } else {
    console.log("don't redirect");
  }
});