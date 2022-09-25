// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// let's try making a listener for body and then identifying the target of clicks and seeing if they are class="like-glyph"
// first I'll try marking the hearts on and off, then we'll add the server call, mmmkay?
document.body.addEventListener('click', wasClicked);

function wasClicked (e) {
  if (e.target.className === 'like-glyph' || 'activated-heart') {
    sendLike(e.target)
  } 
}

function sendLike(whichLike) {
  // send server response
  // if failed, use .catch [after a then?] to display error message
  // remove .hidden from modal and set text to error message, setTimeout to remove 
  // message after 3 seconds
  // if successful, add class .activated-heart to non and vice versa
  mimicServerCall()
  .then((resp) => likeAndUnlike(whichLike))
  .catch((resp) => displayErrorModal(resp))
}

function likeAndUnlike(which) {
  if (which.className === 'activated-heart') {
    which.className = "like-glyph"
  } else {
    which.className = 'activated-heart'
  }
}

function displayErrorModal(errMsg) {
  const theModal = document.getElementById("modal")
  theModal.classList.remove("hidden")
  theModal.textContent = errMsg
  setTimeout(() => theModal.className = "hidden", 3000)
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
