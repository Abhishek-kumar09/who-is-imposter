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
      window.open('', '_self').close()
    }).catch((error) => {
      console.log(error)
    });
})

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    if (window.location.pathname !== '/main.html') {
      window.location.replace('../main.html')
    }
    console.log(user.photoURL)
    photoUrl = user.photoURL
    updatePhotoUrl()
  } else {
  }
});

function updatePhotoUrl() {
  var e = $('<img src="' + photoUrl + '" height="50px" width="50px" style="border-radius: 50px;"></img>');
  $('#avatar').html(e);
  e.attr('id', 'myid');
}
