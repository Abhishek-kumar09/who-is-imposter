let user_signed = true

chrome.runtime.onMessage.addListener(function (req, sender, send) {
  if(req.message === 'is_user_signed_in') {
    send({
      message: 'success',
      payload: user_signed
    })
  }

  else if(req.message === 'sign_out') {
    user_signed = true
    send({
      message: 'success'
    })
  }

  return true
})
