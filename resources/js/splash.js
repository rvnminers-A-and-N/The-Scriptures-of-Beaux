function playSplashSound() {
    const audioElement = document.getElementById('splashAudio');
    if (audioElement) {
      audioElement.play()
    }
}

// Call the function when the document content is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    playSplashSound();
});