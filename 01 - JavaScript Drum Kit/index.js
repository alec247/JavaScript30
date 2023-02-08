window.addEventListener("keydown", (event) => {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (!audio) return; // stop function if wrong key pressed
    audio.currentTime = 0; // rewind to beginning if already playing
    audio.play();

    // add and remove playing class to key pressed
    key.classList.toggle("playing");
    setTimeout(() => {
        key.classList.toggle("playing");
    }, 150);
});