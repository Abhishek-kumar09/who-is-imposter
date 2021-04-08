var config = {
  apiKey: "AIzaSyBNcHQR_Kz4Vd3lo-ezhcr-ydUbtJQ4LZ8",
  authDomain: "who-is-imposter.firebaseapp.com",
};

firebase.initializeApp(config);
var provider = new firebase.auth.GoogleAuthProvider();

$("#fb").click(function () {
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch((error) => {
      console.log(error)
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
})

let photoUrl = "../images/icon48.png"

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user.photoURL)
    photoUrl = user.photoURL
    updatePhotoUrl()
  } else {
    console.log("No user found")
  }
});

function updatePhotoUrl() {
  var e = $('<img src="' + photoUrl + '" height="50px" width="50px" style="border-radius: 50px;"></img>');
  $('#avatar').html(e);
  e.attr('id', 'myid');
}
