var scenes = {
    'start': {
        // Scene data for the title screen...
        'act': 'The Scriptures of Beaux:\nA Story of Echeloning',
        'text': 'This is the scriptures of Beaux #1 and Beaux #2, an unlikely duo who were about to embark on an unforgetable journey of crypto, development, FUD, and more than they could only begin to imagine.\n\nJoin our unlikely heros on their adventure to change their fates and echelon on their peers!',
        'image': 'img/Echelon/Echelon.png',
        'audio': 'audio/Fart.mp3',
        'colorScheme': {
            backgroundColor: '#0B3D73',
            buttonColor: '#007bff',
            buttonHoverColor: '#0056b3'
            // ... add more color properties as needed
        },
        'choices': [
            {
                'text': 'Start the adventure now!',
                'target': 'startJourney',
                'audio': 'audio/Fart.mp3'
            }
        ],
        'gameOptions': []
    },
    'startJourney': {
        // Scene data for starting the journey...
        'act': 'Act 1 Part 1:\nThe Need To Cook',
        'text': 'The scriptures start with Beaux #1 and Beaux #2 hanging out in the tech-filled garage of Beaux #2, surrounded by gadgets, crypto mining rigs, and a board filled with brainstorming notes.\n\n"We need to cook Beaux..." says Beaux #1 out loud as he looks at all of the work and technology that Beaux #2 had laying around his garage.\n\n Beaux #2 has been putting in countless sleepless nights, behind the scenes, while still managing to keep his grades high in college from which Beaux #2 recently graduated with a Bachelors of Science in ACS Chemistry and Physics, minors in Astronomy and Mathematics, and is just looking for his big break!\n\nHowever, Beaux #2 wants Beaux #1 to be along for the journey, because they both come from the same trenches, and it is boring to echelon and escape the matrix alone!',
        'image': 'img/Scenes/GarageScene.png',
        'audio': 'audio/Fart.mp3',
        'colorScheme': {
            backgroundColor: '#0B3D73',
            buttonColor: '#007bff',
            buttonHoverColor: '#0056b3'
            // ... add more color properties as needed
        },
        'choices': [
            {
                'text': 'Teach Beaux #1 Programming',
                'target': 'startCoding',
                'audio': 'audio/Fart.mp3'
            },
            {
                'text': 'Seek Food At Local Burger World',
                'target': 'seekBurgers',
                'audio': 'audio/Fart.mp3'
            }
        ],
        'gameOptions': [
            {
                'text': 'Restart The Current Playthrough',
                'target': 'start',
                'audio': 'audio/Fart.mp3'
            },
            {
                'text': 'Filler Button With Some Extra Text',
                'target': 'start',
                'audio': 'audio/Fart.mp3'
            }
        ]
    },
    'startCoding': {
        // Scene data for starting coding...
        'act': 'Act 1 Part 2:\nThe Echeloning Begins',
        'text': 'As we foretold earlier in the scriptures, Beaux #2 had already been putting in countless nights (for what was climbing to be a decade now) towards cryptocurrency development any time he was not working on school (yes, even in high school).\n\nAs Beaux #1 and Beaux #2 had been friends all through their teenage years, and Beaux #2 was now back home from college, Beaux #2 decided to echelon on Beaux #1, upgrade the PC that Beaux #1 had, sit him down in a gaming chair in front of it, and show him the ropes on how to code a basic website so he can get the picture of how it all links together, use GitHub to upload his own projects, get others projects to expand and make edits too, and much more!',
        'image': 'img/Echelon/Echelon.png',
        'audio': 'audio/Fart.mp3',
        'colorScheme': {
            backgroundColor: '#0B3D73',
            buttonColor: '#007bff',
            buttonHoverColor: '#0056b3'
            // ... add more color properties as needed
        },
        'choices': [
            {
                'text': 'Start Teaching Beaux #1 Programming',
                'target': 'startCoding',
                'audio': 'audio/Fart.mp3'
            },
            {
                'text': 'Seek Food At Local Burger World',
                'target': 'seekBurgers',
                'audio': 'audio/Fart.mp3'
            }
        ],
        'gameOptions': [
            {
                'text': 'Restart The Game',
                'target': 'start',
                'audio': 'audio/Fart.mp3'
            },
            {
                'text': 'Filler Button',
                'target': 'start',
                'audio': 'audio/Fart.mp3'
            }
        ]
    },
    'seekBurgers': {
        // Scene data for seeking food from Burger World...
        'act': 'Act 1 Part 2:\nThe Side Scriptures of Burger World',
        'text': 'We are currently echeloning on this part of the story!',
        'image': 'img/Echelon/Echelon.png',
        'audio': 'audio/Fart.mp3',
        'colorScheme': {
            backgroundColor: '#0B3D73',
            buttonColor: '#007bff',
            buttonHoverColor: '#0056b3'
            // ... add more color properties as needed
        },
        'choices': [
            {
                'text': 'Start Teaching Beaux #1 Programming',
                'target': 'startCoding',
                'audio': 'audio/Fart.mp3'
            },
            {
                'text': 'Seek Food At Local Burger World',
                'target': 'seekBurgers',
                'audio': 'audio/Fart.mp3'
            }
        ],
        'gameOptions': [
            {
                'text': 'Restart The Game',
                'target': 'start',
                'audio': 'audio/Fart.mp3'
            },
            {
                'text': 'Filler Button',
                'target': 'start',
                'audio': 'audio/Fart.mp3'
            }
        ]
    }
    // Other scenes...
};

var isMuted = false;

// Play a specific sound
function playSound(soundId, soundSrc) {
    var sound = document.getElementById(soundId);
    if (sound.src !== soundSrc) {
        sound.src = soundSrc;
    }
    // sound.loop = soundId === 'sceneAudio'; // Loop only background music, uncomment later, looping fart noises at the moment lol
    if (!isMuted) {
        // Stop the current sound if any and reset its position
        sound.pause();
        sound.currentTime = 0;
        
        // Play the new sound
        sound.play().catch(e => console.error("Error playing sound:", e));
    }
};

// Stop a specific sound and reset its position
function stopSound(soundId) {
    var sound = document.getElementById(soundId);
    sound.pause();
    sound.currentTime = 0;
};

// Mute or unmute all sounds
function muteToggle() {
    var audioElements = document.querySelectorAll('audio');
    isMuted = !isMuted;
    audioElements.forEach(audio => {
        audio.muted = isMuted;
    });
};

function nextScene(sceneId) {  
    var scene = scenes[sceneId];
    
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Stop scene audio
    stopSound('sceneAudio');
    
    var imgHTML = '<img src="' + scene.image + '" alt="Scene image">';
    document.getElementById('sceneAct').innerText = scene.act;
    document.getElementById('storyText').innerText = scene.text;
    document.getElementById('sceneImage').innerHTML = imgHTML;

    // Play scene audio
    if (scene.audio) {
        playSound('sceneAudio', scene.audio);
    }

    var choicesContainer = document.getElementById('choices');
    var choicesSection = document.getElementById('choicesSection');

    choicesContainer.innerHTML = ''; // Clear previous choices
    
    if (scene.choices && scene.choices.length > 0) {
        choicesSection.style.display = ''; // Show the section if there are choice options
    
        scene.choices.forEach(function(choice) {
            var button = document.createElement('button');
            button.innerText = choice.text;
            button.className = 'choiceButton'; // Use className instead of classList
            button.onclick = function() {
                if (choice.audio) {
                    playSound('choiceAudio', choice.audio); // 'buttonAudio' is the id of the button click sound element
                }
                nextScene(choice.target);
            };
            choicesContainer.appendChild(button);
        });
    } else {
        choicesSection.style.display = 'none'; // Hide the section if there are no choice options
    }

    var gameOptionsContainer = document.getElementById('gameOptions');
    var gameOptionsSection = document.getElementById('gameOptionsSection');

    gameOptionsContainer.innerHTML = ''; // Clear previous options

    if (scene.gameOptions && scene.gameOptions.length > 0) {
        gameOptionsSection.style.display = ''; // Show the section if there are game options

        scene.gameOptions.forEach(function(option) {
            var button = document.createElement('button');
            button.innerText = option.text;
            button.className = 'gameOptionsButton';
            button.onclick = function() {
                if (option.audio) {
                    playSound('optionAudio', option.audio);
                }
                nextScene(option.target);
            };
            gameOptionsContainer.appendChild(button);
        });

        var muteToggleSoundSrc = 'audio/Fart.mp3'; // replace with the path to your sound file
        var muteButton = document.getElementById('muteButton');
        if (!muteButton) {
            muteButton = document.createElement('button');
            muteButton.id = 'muteButton'; // Assign an ID for easy access
            muteButton.className = 'gameOptionsButton'; // Reuse the same style class
            muteButton.innerText = isMuted ? 'Click This Button To Unmute Sound' : 'Click This Button To Mute Sound'; // Set the initial text based on isMuted state

            // Attach click event to toggle mute
            muteButton.onclick = function() {
                muteToggle();
                // After toggling, check the new state and update button text accordingly
                muteButton.innerText = isMuted ? 'Click This Button To Unmute Sound' : 'Click This Button To Mute Sound';

                // If the game is now unmuted, play the sound for mute toggle button click
                if (!isMuted) {
                    playSound('muteToggleAudio', muteToggleSoundSrc); // Use 'muteToggleAudio' as the ID for the mute toggle audio
                }
            };

            // Append the mute button to the gameOptionsContainer
            gameOptionsContainer.appendChild(muteButton);
        }
    } else {
        gameOptionsSection.style.display = 'none'; // Hide the section if there are no game options
    }
}
// Initialize the first scene
nextScene('start');