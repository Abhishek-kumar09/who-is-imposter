var config = {
  apiKey: "AIzaSyBNcHQR_Kz4Vd3lo-ezhcr-ydUbtJQ4LZ8",
  authDomain: "who-is-imposter.firebaseapp.com",
};

firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();
let photoUrl = "../images/icon48.png"

$("#fb").click(function () {
  chrome.windows.create({
    url: '../login.html',
    width: 150,
    height: 250,
    focused: true
  })
})

$("#fbpop").click(function () {
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      var user = result.user;
      photoUrl = user.photoURL
      updatePhotoUrl()
    }).catch((error) => {
      console.log(error)
    });

  setTimeout(() => {
    $("#login-wrapper").html("<h2>You can close the window once signIn event is completed")
  }, 4000);
})

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log(user.photoURL)
    photoUrl = user.photoURL
    updatePhotoUrl()
  } else {
    window.location.replace('../popup.html')
  }
});

function updatePhotoUrl() {
  var e = $('<img src="' + photoUrl + '" height="50px" width="50px" style="border-radius: 50px;"></img>');
  $('#avatar').html(e);
  e.attr('id', 'myid');
}
