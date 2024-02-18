function playSplashSound() {
    const splashAudioElement = document.getElementById('splashAudio');
    splashAudioElement.src = 'audio/Splash.mp3';
    splashAudioElement.play();
}

// Call the function
playSplashSound();