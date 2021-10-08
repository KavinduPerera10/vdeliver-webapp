//-----------EXTRA PAGE ALL THE CODES ARE IN THE HTML PAGE----------------------------//
(function(){
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
          uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: './dashboard.html',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
         
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
         
        ],
        // Terms of service url.
        tosUrl: './dashboard.html',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
      };
      ui.start('#firebaseui-auth-container', uiConfig);
})()

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

