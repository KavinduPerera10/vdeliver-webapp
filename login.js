firebase.auth().onAuthStateChanged(function(user)
{
if (user)
{
document.getElementById("login_div").style.display= "block";
document.getElementById("user_div").style.display= "none";
}
else {
    document.getElementById("login_div").style.display= "none";
    document.getElementById("user_div").style.display= "block";    
}

}) ; 

function login()
{
  var userEmail = document.getElementById("fname").value;
  var userPassword = document.getElementById("lname").value;

firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error)
 {
var errorCode = error.code;
window.alert("Error"+errorMessage);
 } 
 );

}