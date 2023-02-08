function playOnKeyPress(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!audio) return; // stop function if wrong key pressed
    audio.currentTime = 0; // rewind to beginning if already playing
    audio.play();
    key.classList.add("playing");
}

function playOnClick(event) {
    console.log(event.target);
    
}

function removeTransition(event) {
    if (event.propertyName !== "transform") return; // skip if not transform (otherwise will fire numerous times)

    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("click", playOnClick);
    key.addEventListener("transitionend", removeTransition)
});

window.addEventListener("keydown", playOnKeyPress);