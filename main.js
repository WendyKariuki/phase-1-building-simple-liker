// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener("DOMContentLoaded", () => {
  const likeButtons = document.querySelectorAll('.like');

  // Add click event listeners to each like button
  likeButtons.forEach(likeButton => {
    likeButton.addEventListener("click", () => {
      mimicServerCall() // simulate making a server request
        .then(() => {
          activateHeartAppearance(likeButton.querySelector(".like-glyph"));
        })
        .catch(error => {
          displayErrorMessage(error);
        });
    });
  });

  // Function to activate heart appearance
  function activateHeartAppearance(heartGlyph) {
    if (heartGlyph.textContent === EMPTY_HEART) {
      heartGlyph.textContent = FULL_HEART;
      heartGlyph.classList.add("activated-heart");
    } else {
      heartGlyph.textContent = EMPTY_HEART;
      heartGlyph.classList.remove("activated-heart");
    }
  }

  // Function to display error message
  function displayErrorMessage(message) {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modal-message");
    modalMessage.textContent = message;
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 3000);
  }
});





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
