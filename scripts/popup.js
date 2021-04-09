$("#btn").click(function () {
  alert("Button is clicked!!!!")
})

function checkSignIn() {
    chrome.runtime.sendMessage({ message: 'is_user_signed_in' }, function (response) {
      if (response.message === 'success' && response.payload && window.location.pathname !== '/main.html') {
        window.location.replace('../main.html')
      }
    })
}

// checkSignIn()
function signOut() {
  chrome.runtime.sendMessage({ message: 'sign_out' }, function (response) {
    if (response.message === 'success' && window.location.pathname !== '/popup.html') {
      firebase.auth().signOut().then(() => {
        console.log("signout successfull")
      }).catch((error) => {
        console.log('error occured while signing out', error)
      });

      window.location.replace('../popup.html')
    }
  })
}

$("#signOut").click(function () {
  signOut()
})