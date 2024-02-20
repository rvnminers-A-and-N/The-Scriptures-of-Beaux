var scenes = {
    'start': {
        // Scene data for the title screen...
        'act': 'The Scriptures of Beaux:\nA Story of Echeloning',
        'text': 'This is the scriptures of Beaux #1 and Beaux #2, an unlikely duo who were about to embark on an unforgetable journey of crypto, development, FUD, and more than they could only begin to imagine.\n\nJoin our unlikely heros on their adventure to change their fates and echelon on their peers!',
        'image': 'img/Echelon/Echelon.png',
        'audio': 'audio/Button.mp3',
        'colorScheme': {
            backgroundColor: '#0B3D73',
            bodyColor: '#F8F8FF',
            buttonColor: '#007bff',
            buttonBorderColor: '#04F0E8',
            buttonHoverColor: '#0056b3',
            buttonHoverBorderColor: '#FFBA3E',
            buttonTextColor: '#F8F8FF',
            gameDivBackgroundColor: '#FE2A8B',
            gameDivBorderColor: '#FFBA3E',
            gameContainerBackgroundColor: '#000000',
            gameContainerBorderColor: '#04F0E8',
            gameContainerColor: '#F8F8FF',
            gameTitleBackgroundColor: '#4B1E78',
            gameTitleBorderColor: '#04F0E8',
            gameTitleColor: '#FFBA3E',
            gameOptionButtonColor: '#7b00ff',
            gameOptionButtonBorderColor: '#04F0E8',
            gameOptionButtonHoverColor: '#5600b3',
            gameOptionButtonHoverBorderColor: '#FFBA3E',
            gameOptionButtonTextColor: '#F8F8FF',
            gameOptionTitleBackgroundColor: '#4B1E78',
            gameOptionTitleBorderColor: '#04F0E8',
            gameOptionTitleColor: '#FFBA3E',
            pathTitleBackgroundColor: '#4B1E78',
            pathTitleBorderColor: '#04F0E8',
            pathTitleColor: '#FFBA3E',
            sceneImageBorderColor: '#F8F8FF'
            // ... add more color properties as needed
        },
        'choices': [
            {
                'text': 'Begin The Journey of Echeloning',
                'target': 'startJourney',
                'audio': 'audio/Button.mp3'
            }
        ],
        'gameOptions': [],
        'actions': []
    },
    'startJourney': {
        // Scene data for starting the journey...
        'act': 'Act 1 Part 1:\nThe Need To Cook',
        'text': 'The scriptures start with Beaux #1 and Beaux #2 hanging out in the tech-filled garage of Beaux #2, surrounded by gadgets, crypto mining rigs, and a board filled with brainstorming notes.\n\n"We need to cook Beaux..." says Beaux #1 out loud as he looks at all of the work and technology that Beaux #2 had laying around his garage.\n\n Beaux #2 has been putting in countless sleepless nights, behind the scenes, while still managing to keep his grades high in college from which Beaux #2 recently graduated with a Bachelors of Science in ACS Chemistry and Physics, minors in Astronomy and Mathematics, and is just looking for his big break!\n\nHowever, Beaux #2 wants Beaux #1 to be along for the journey, because they both come from the same trenches, and it is boring to echelon and escape the matrix alone!',
        'image': 'img/Scenes/GarageScene.png',
        'audio': 'audio/Button.mp3',
        'colorScheme': {
            backgroundColor: '#0B3D73',
            bodyColor: '#F8F8FF',
            buttonColor: '#007bff',
            buttonBorderColor: '#04F0E8',
            buttonHoverColor: '#0056b3',
            buttonHoverBorderColor: '#FFBA3E',
            buttonTextColor: '#F8F8FF',
            gameDivBackgroundColor: '#FE2A8B',
            gameDivBorderColor: '#FFBA3E',
            gameContainerBackgroundColor: '#000000',
            gameContainerBorderColor: '#04F0E8',
            gameContainerColor: '#F8F8FF',
            gameTitleBackgroundColor: '#4B1E78',
            gameTitleBorderColor: '#04F0E8',
            gameTitleColor: '#FFBA3E',
            gameOptionButtonColor: '#7b00ff',
            gameOptionButtonBorderColor: '#04F0E8',
            gameOptionButtonHoverColor: '#5600b3',
            gameOptionButtonHoverBorderColor: '#FFBA3E',
            gameOptionButtonTextColor: '#F8F8FF',
            gameOptionTitleBackgroundColor: '#4B1E78',
            gameOptionTitleBorderColor: '#04F0E8',
            gameOptionTitleColor: '#FFBA3E',
            pathTitleBackgroundColor: '#4B1E78',
            pathTitleBorderColor: '#04F0E8',
            pathTitleColor: '#FFBA3E',
            sceneImageBorderColor: '#F8F8FF'
            // ... add more color properties as needed
        },
        'choices': [
            {
                'text': 'Teach Beaux #1 Programming',
                'target': 'startCoding',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Seek Food At Local Burger World',
                'target': 'seekBurgers',
                'audio': 'audio/Button.mp3'
            }
        ],
        'gameOptions': [
            {
                'text': 'Filler Button With Some Extra Text',
                'target': 'start',
                'audio': 'audio/Button.mp3'
            }
        ],
        'actions': [
            {
                'text': 'Eat Food',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Spend All Your Money',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Sleep Eight Hours',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Stay Up All Night',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Drink Weird Random Drink On Ground',
                'audio': 'audio/Button.mp3'
            }
        ]
    },
    'startCoding': {
        // Scene data for starting coding...
        'act': 'Act 1 Part 2:\nThe Echeloning Begins',
        'text': 'As we foretold earlier in the scriptures, Beaux #2 had already been putting in countless nights (for what was climbing to be a decade now) towards cryptocurrency development any time he was not working on school (yes, even in high school).\n\nAs Beaux #1 and Beaux #2 had been friends all through their teenage years, and Beaux #2 was now back home from college, Beaux #2 decided to echelon on Beaux #1, upgrade the PC that Beaux #1 had, sit him down in a gaming chair in front of it, and show him the ropes on how to code a basic website so he can get the picture of how it all links together, use GitHub to upload his own projects, get others projects to expand and make edits too, and much more!',
        'image': 'img/Echelon/Echelon.png',
        'audio': 'audio/Button.mp3',
        'colorScheme': {
            backgroundColor: '#0B3D73',
            bodyColor: '#F8F8FF',
            buttonColor: '#007bff',
            buttonBorderColor: '#04F0E8',
            buttonHoverColor: '#0056b3',
            buttonHoverBorderColor: '#FFBA3E',
            buttonTextColor: '#F8F8FF',
            gameDivBackgroundColor: '#FE2A8B',
            gameDivBorderColor: '#FFBA3E',
            gameContainerBackgroundColor: '#000000',
            gameContainerBorderColor: '#04F0E8',
            gameContainerColor: '#F8F8FF',
            gameTitleBackgroundColor: '#4B1E78',
            gameTitleBorderColor: '#04F0E8',
            gameTitleColor: '#FFBA3E',
            gameOptionButtonColor: '#7b00ff',
            gameOptionButtonBorderColor: '#04F0E8',
            gameOptionButtonHoverColor: '#5600b3',
            gameOptionButtonHoverBorderColor: '#FFBA3E',
            gameOptionButtonTextColor: '#F8F8FF',
            gameOptionTitleBackgroundColor: '#4B1E78',
            gameOptionTitleBorderColor: '#04F0E8',
            gameOptionTitleColor: '#FFBA3E',
            pathTitleBackgroundColor: '#4B1E78',
            pathTitleBorderColor: '#04F0E8',
            pathTitleColor: '#FFBA3E',
            sceneImageBorderColor: '#F8F8FF'
            // ... add more color properties as needed
        },
        'choices': [
            {
                'text': 'Start Teaching Beaux #1 Programming',
                'target': 'startCoding',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Seek Food At Local Burger World',
                'target': 'seekBurgers',
                'audio': 'audio/Button.mp3'
            }
        ],
        'gameOptions': [
            {
                'text': 'Filler Button',
                'target': 'start',
                'audio': 'audio/Button.mp3'
            }
        ],
        'actions': [
            {
                'text': 'Eat Food',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Spend All Your Money',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Sleep Eight Hours',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Stay Up All Night',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Drink Weird Random Drink On Ground',
                'audio': 'audio/Button.mp3'
            }
        ]
    },
    'seekBurgers': {
        // Scene data for seeking food from Burger World...
        'act': 'Act 1 Part 2:\nThe Side Scriptures of Burger World',
        'text': 'We are currently echeloning on this part of the story!',
        'image': 'img/Echelon/Echelon.png',
        'audio': 'audio/Button.mp3',
        'colorScheme': {
            backgroundColor: '#FFC72C', // McDonald's Yellow for background
            bodyColor: '#FFFFFF', // White for body text
            buttonColor: '#DA291C', // McDonald's Red for buttons
            buttonBorderColor: '#FBB03B', // A lighter shade of yellow for button borders
            buttonHoverColor: '#FBB03B', // Lighter yellow for button hover
            buttonHoverBorderColor: '#DA291C', // Red for button hover border
            buttonTextColor: '#F8F8FF', // White for button text
            gameDivBackgroundColor: '#DA291C', // McDonald's Red for game div background
            gameDivBorderColor: '#FFC72C', // McDonald's Yellow for game div border
            gameContainerBackgroundColor: '#F8F8FF', // White for game container background
            gameContainerBorderColor: '#DA291C', // McDonald's Red for game container border
            gameContainerColor: '#000000', // Black for game container text
            gameTitleBackgroundColor: '#FFC72C', // McDonald's Yellow for game title background
            gameTitleBorderColor: '#DA291C', // McDonald's Red for game title border
            gameTitleColor: '#DA291C', // McDonald's Red for game title text
            gameOptionButtonColor: '#FBB03B', // Lighter Yellow for game option buttons
            gameOptionButtonBorderColor: '#DA291C', // McDonald's Red for game option button borders
            gameOptionButtonHoverColor: '#DA291C', // McDonald's Red for game option button hover
            gameOptionButtonHoverBorderColor: '#FFC72C', // McDonald's Yellow for game option button hover border
            gameOptionButtonTextColor: '#F8F8FF', // White for game option button text
            gameOptionTitleBackgroundColor: '#DA291C', // McDonald's Red for game option title background
            gameOptionTitleBorderColor: '#FFC72C', // McDonald's Yellow for game option title border
            gameOptionTitleColor: '#FFC72C', // McDonald's Yellow for game option title text
            pathTitleBackgroundColor: '#DA291C', // McDonald's Red for path title background
            pathTitleBorderColor: '#FFC72C', // McDonald's Yellow for path title border
            pathTitleColor: '#FFC72C', // McDonald's Yellow for path title text
            sceneImageBorderColor: '#DA291C' // McDonald's Red for scene image border
            // ... add more color properties as needed
        },
        'choices': [
            {
                'text': 'Approach The Legendary GoosDraba',
                'target': 'encounterGoosDraba',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Move Along And Go Inside',
                'target': 'insideBurgerWorld',
                'audio': 'audio/Button.mp3'
            }
        ],
        'gameOptions': [
            {
                'text': 'Filler Button',
                'target': 'start',
                'audio': 'audio/Button.mp3'
            }
        ],
        'actions': [
            {
                'text': 'Eat Food',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Spend All Your Money',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Sleep Eight Hours',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Stay Up All Night',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Drink Weird Random Drink On Ground',
                'audio': 'audio/Button.mp3'
            }
        ]
    },
    'encounterGoosDraba': {
        // Scene data for seeking food from Burger World...
        'act': 'Act 1 Part 3:\nRandom Encounter With The Legendary GoosDraba',
        'text': 'We are currently echeloning on this part of the story!',
        'image': 'img/Echelon/Echelon.png',
        'audio': 'audio/Button.mp3',
        'colorScheme': {
            backgroundColor: '#FFC72C', // McDonald's Yellow for background
            bodyColor: '#FFFFFF', // White for body text
            buttonColor: '#DA291C', // McDonald's Red for buttons
            buttonBorderColor: '#FBB03B', // A lighter shade of yellow for button borders
            buttonHoverColor: '#FBB03B', // Lighter yellow for button hover
            buttonHoverBorderColor: '#DA291C', // Red for button hover border
            buttonTextColor: '#FFFFFF', // White for button text
            gameDivBackgroundColor: '#DA291C', // McDonald's Red for game div background
            gameDivBorderColor: '#FFC72C', // McDonald's Yellow for game div border
            gameContainerBackgroundColor: '#FFFFFF', // White for game container background
            gameContainerBorderColor: '#DA291C', // McDonald's Red for game container border
            gameContainerColor: '#000000', // Black for game container text
            gameTitleBackgroundColor: '#FFC72C', // McDonald's Yellow for game title background
            gameTitleBorderColor: '#DA291C', // McDonald's Red for game title border
            gameTitleColor: '#DA291C', // McDonald's Red for game title text
            gameOptionButtonColor: '#FFC72C', // McDonald's Yellow for game option buttons
            gameOptionButtonBorderColor: '#DA291C', // McDonald's Red for game option button borders
            gameOptionButtonHoverColor: '#FBB03B', // Lighter yellow for game option button hover
            gameOptionButtonHoverBorderColor: '#DA291C', // Red for game option button hover border
            gameOptionButtonTextColor: '#DA291C', // McDonald's Red for game option button text
            gameOptionTitleBackgroundColor: '#DA291C', // McDonald's Red for game option title background
            gameOptionTitleBorderColor: '#FFC72C', // McDonald's Yellow for game option title border
            gameOptionTitleColor: '#FFC72C', // McDonald's Yellow for game option title text
            pathTitleBackgroundColor: '#DA291C', // McDonald's Red for path title background
            pathTitleBorderColor: '#FFC72C', // McDonald's Yellow for path title border
            pathTitleColor: '#FFC72C', // McDonald's Yellow for path title text
            sceneImageBorderColor: '#DA291C' // McDonald's Red for scene image border
            // ... add more color properties as needed
        },
        'choices': [
            {
                'text': 'Start Teaching Beaux #1 Programming',
                'target': 'startCoding',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Seek Food At Local Burger World',
                'target': 'seekBurgers',
                'audio': 'audio/Button.mp3'
            }
        ],
        'gameOptions': [
            {
                'text': 'Filler Button',
                'target': 'start',
                'audio': 'audio/Button.mp3'
            }
        ],
        'actions': [
            {
                'text': 'Eat Food',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Spend All Your Money',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Sleep Eight Hours',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Stay Up All Night',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Drink Weird Random Drink On Ground',
                'audio': 'audio/Button.mp3'
            }
        ]
    },
    'insideBurgerWorld': {
        // Scene data for seeking food from Burger World...
        'act': 'Act 1 Part 3:\nThe Scriptures Continue Inside The Local Burger World',
        'text': 'We are currently echeloning on this part of the story!',
        'image': 'img/Echelon/Echelon.png',
        'audio': 'audio/Button.mp3',
        'colorScheme': {
            backgroundColor: '#FFC72C', // McDonald's Yellow for background
            bodyColor: '#FFFFFF', // White for body text
            buttonColor: '#DA291C', // McDonald's Red for buttons
            buttonBorderColor: '#FBB03B', // A lighter shade of yellow for button borders
            buttonHoverColor: '#FBB03B', // Lighter yellow for button hover
            buttonHoverBorderColor: '#DA291C', // Red for button hover border
            buttonTextColor: '#FFFFFF', // White for button text
            gameDivBackgroundColor: '#DA291C', // McDonald's Red for game div background
            gameDivBorderColor: '#FFC72C', // McDonald's Yellow for game div border
            gameContainerBackgroundColor: '#FFFFFF', // White for game container background
            gameContainerBorderColor: '#DA291C', // McDonald's Red for game container border
            gameContainerColor: '#000000', // Black for game container text
            gameTitleBackgroundColor: '#FFC72C', // McDonald's Yellow for game title background
            gameTitleBorderColor: '#DA291C', // McDonald's Red for game title border
            gameTitleColor: '#DA291C', // McDonald's Red for game title text
            gameOptionButtonColor: '#FFC72C', // McDonald's Yellow for game option buttons
            gameOptionButtonBorderColor: '#DA291C', // McDonald's Red for game option button borders
            gameOptionButtonHoverColor: '#FBB03B', // Lighter yellow for game option button hover
            gameOptionButtonHoverBorderColor: '#DA291C', // Red for game option button hover border
            gameOptionButtonTextColor: '#DA291C', // McDonald's Red for game option button text
            gameOptionTitleBackgroundColor: '#DA291C', // McDonald's Red for game option title background
            gameOptionTitleBorderColor: '#FFC72C', // McDonald's Yellow for game option title border
            gameOptionTitleColor: '#FFC72C', // McDonald's Yellow for game option title text
            pathTitleBackgroundColor: '#DA291C', // McDonald's Red for path title background
            pathTitleBorderColor: '#FFC72C', // McDonald's Yellow for path title border
            pathTitleColor: '#FFC72C', // McDonald's Yellow for path title text
            sceneImageBorderColor: '#DA291C' // McDonald's Red for scene image border
            // ... add more color properties as needed
        },
        'choices': [
            {
                'text': 'Start Teaching Beaux #1 Programming',
                'target': 'startCoding',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Seek Food At Local Burger World',
                'target': 'seekBurgers',
                'audio': 'audio/Button.mp3'
            }
        ],
        'gameOptions': [
            {
                'text': 'Filler Button',
                'target': 'start',
                'audio': 'audio/Button.mp3'
            }
        ],
        'actions': [
            {
                'text': 'Eat Food',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Spend All Your Money',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Sleep Eight Hours',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Stay Up All Night',
                'audio': 'audio/Button.mp3'
            },
            {
                'text': 'Drink Weird Random Drink On Ground',
                'audio': 'audio/Button.mp3'
            }
        ]
    }
    // Other scenes...
};

var player = {
    stats: {
        health: 100,
        money: 50,
        food: 10,
        water: 10,
        sleep: 10
        // add more as we go
    },
    inventory: {
        food: ["Apple", "Banana", "Strawberry"],
        tools: ["Hammer", "Wrench", "Screwdriver"]
        // add more as we go
    }
};

// Define min and max values for stats
const statRanges = {
    health: { min: 0, max: 100 },
    food: { min: 0, max: 10 },
    water: { min: 0, max: 10 },
    sleep: { min: 0, max: 10 },
    money: { min: 0 } // Example: no max limit for money
};

// Function to update a player's stat
function updateStat(stat, value) {
    if (player.stats.hasOwnProperty(stat)) {
        player.stats[stat] += value;

        // Apply min/max limits if they exist for this stat
        if (statRanges[stat]) {
            if (statRanges[stat].hasOwnProperty('min')) {
                player.stats[stat] = Math.max(statRanges[stat].min, player.stats[stat]);
            }
            if (statRanges[stat].hasOwnProperty('max')) {
                player.stats[stat] = Math.min(statRanges[stat].max, player.stats[stat]);
            }
        }

        // Check if the stat hits zero and restart the game if so
        if (stat !== 'money' && stat !== 'sleep' && player.stats[stat] <= 0) {
            alert(`Sorry, one or more of your stats: (${stat}), has reached zero (or less), so the game has been restarted, thank you for playing and keep trying!`);
            restartGame();
            return; // Exit the function early to avoid updating UI unnecessarily
        }

        // Update UI
        if (stat === 'money') {
            document.getElementById(stat).innerText = `${stat.charAt(0).toUpperCase() + stat.slice(1)}: $${player.stats[stat]}`;
        } else {
            document.getElementById(stat).innerText = `${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${player.stats[stat]}`; 
        }
    }
}


// Function to add an item to the inventory
function addToInventory(category, item) {
    // Check if the category exists
    if (!player.inventory[category]) {
        // If not, create a new array for this category
        player.inventory[category] = [];
        alert(`New category: ${category}, has been created.`);
    }

    // Add the item to the category
    player.inventory[category].push(item);
    updateInventoryUI();
    alert(`The ${item} has been added to your inventory under the ${category} category.`);
}

// Function to remove an item from the inventory
function removeFromInventory(category, item) {
    if (player.inventory[category]) {
        const index = player.inventory[category].indexOf(item);
        if (index > -1) {
            player.inventory[category].splice(index, 1);
            updateInventoryUI();
            alert(`The ${item} has been removed from your inventory.`); // Alert for item removal
        }
    } else {
        alert(`Inventory category: ${category}, does not exist.`);
    }
}

function updateInventoryUI() {
    const inventoryList = document.getElementById('inventoryList');
    inventoryList.innerHTML = ''; // Clear the inventory list

    Object.keys(player.inventory).forEach(category => {
        // Create a container for each category
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'categoryContainer';

        // Create and append the category banner
        const categoryBanner = document.createElement('h2');
        categoryBanner.className = 'categoryBanner';
        categoryBanner.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)}`; // Capitalize the first letter of category
        categoryContainer.appendChild(categoryBanner);

        // Create a list for items under this category
        const itemList = document.createElement('ul');
        itemList.className = 'itemList';

        player.inventory[category].forEach(item => {
            const listItem = document.createElement('h4');
            listItem.className = 'inventoryListItem';
            listItem.textContent = `${item}`; // Assuming item is a string, adjust if it's an object
            // categoryContainer.appendChild(listItem);
            itemList.appendChild(listItem);
        });

        // Append the itemList after the categoryBanner inside the category container
        categoryContainer.appendChild(itemList);

        // Append the category container to the inventory list
        inventoryList.appendChild(categoryContainer);
    });
}

function updateAllStatsUI() {
    const statsContainer = document.getElementById('statsOptions'); // Ensure this ID matches your container for stats

    Object.keys(player.stats).forEach(stat => {
        let statElement = document.getElementById(stat);

        // If the stat element doesn't exist, create it
        if (!statElement) {
            statElement = document.createElement('p');
            statElement.id = stat;
            statsContainer.appendChild(statElement);
        }

        // Update the stat element's text
        if (stat === 'money') {
            statElement.innerText = `${stat.charAt(0).toUpperCase() + stat.slice(1)}: $${player.stats[stat]}`;
        } else {
            statElement.innerText = `${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${player.stats[stat]}`;
        }
    });
}

function performAction(action) {
    switch(action) {
        case 'Eat Food':
            if(player.inventory.food.length > 0) { // Check if there's any food
                var foodItem = player.inventory.food[0]; // Get the first food item
                if(player.stats.food < 100) { // Assuming 100 is the max value for food stat
                    removeFromInventory('food', foodItem); // Use the function to remove it
                    updateStat('health', 10); // Example: Restore health
                    updateStat('food', 2); // Increase food stat, assuming it decreases over time and needs replenishing
                    alert(`The ${foodItem} has been eaten, your health stat has gone up by 10 points and your food stats has gone up by 2 points!`);
                } else {
                    alert(`You are already full, Beaux. You can wait!`);
                }
            } else {
                alert('You do not have any food in your inventory.');
            }
            break;
        case 'Drink Weird Random Drink On Ground':
            // Check if the energy stat already exists
            if (typeof player.stats.energy === 'undefined') {
                // If not, initialize it
                player.stats.energy = 100; // Initial energy value
                // Optionally, define its range
                statRanges.energy = { min: 0, max: 100 };
            }
            // Show a message about the new stat
            alert(`You find a weird random drink on the ground, chug it, and feel energized! You've gained an energy stat!`);
            // Ensure UI updates
            updateAllStatsUI();
            alert(`You thought that did not have consequences, Beaux? Minus 20 Health Points for drinking random fluids off the ground!.`)
            // Update the energy stat by a certain value (could be more logic here based on conditions)
            updateStat('health', -20); // Increase energy
            break;
        case 'Spend All Your Money':
            if(player.stats.money > 0) {
                let amountSpent = player.stats.money;
                updateStat('money', -amountSpent); // Deduct all money
                alert(`You have spent all your money! Total amount spent: $${amountSpent}. How foolish!`);
            } else {
                alert('You do not have any money to spend!');
            }
            break;
        case 'Sleep Eight Hours':
            if(player.stats.sleep > 0) {
                updateStat('sleep', 8); // Gain Eight Hours of Sleep
                alert(`You have slept eight hours! Get back out there and echelon Beaux!`);
            } else {
                alert('You almost fell asleep Beaux!');
                restartGame();
            }
            break;
        case 'Stay Up All Night':
            if(player.stats.sleep > 0) {
                updateStat('sleep', -10); // Lose All Sleep
                alert(`You rolled Katamari all night when you should have been sleeping so you could echelon through the day!`);
            } else {
                alert('No sleep till Brooklyn Beaux!');
                restartGame();
            }
            break;
        // Add more cases for different actions
    }
}

function restartGame() {
    // Example: Reset player stats and inventory to initial values
    player.stats = {
        health: 100,
        money: 50,
        food: 10,
        water: 10,
        sleep: 10
    };
    player.inventory = {
        food: ["apple"],
        tools: ["hammer"]
    };

    // Optionally: Update UI elements to reflect the reset state
    updateAllStatsUI();
    updateInventoryUI();

    // Additional steps depending on game structure:
    // For a simple approach, you could reload the webpage:
    // location.reload();

    // Or, if you have a specific start scene or function, call that:
    // startGame(); or nextScene('start');

    nextScene('start');
}

var isMuted = false;

// Parse Through Scene Color Scheme CSS Variables
function applySceneColorScheme(colorScheme) {
    Object.keys(colorScheme).forEach(key => {
        let cssVarName = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`; // Converts camelCase to kebab-case
        let cssVarValue = colorScheme[key];
        document.documentElement.style.setProperty(cssVarName, cssVarValue);
    });
}

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

function playBackgroundAudio() {
    var backgroundAudio = document.getElementById('backgroundAudio');
    backgroundAudio.src = 'audio/DF7HS.mp3'; // Update with the correct path
    if (!isMuted) {
        backgroundAudio.play().catch(e => console.error("Error playing background audio:", e));
    }
}

// Call this function when the game loads
playBackgroundAudio();

function nextScene(sceneId) {  
    var scene = scenes[sceneId];
    
    // Apply color scheme from the scene or default
    if(scene.colorScheme) {
        applySceneColorScheme(scene.colorScheme);
    }

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

    var playerStatsSection = document.getElementById('playerStats');

    if (sceneId === 'start') {
        playerStatsSection.style.display = 'none'; // Hide player stats on start scene
    } else {
        playerStatsSection.style.display = 'flex'; // Show player stats on other scenes
        // Update stats UI when showing the section
        updateAllStatsUI();
    }

    var inventorySection = document.getElementById('inventorySection');

    if (sceneId === 'start') {
        inventorySection.style.display = 'none'; // Hide player stats on start scene
    } else {
        inventorySection.style.display = 'flex'; // Show player stats on other scenes
        // Update stats UI when showing the section
        updateInventoryUI();
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

        var restartSoundSrc = 'audio/Button.mp3'; // replace with the path to your sound file
        var restartButton = document.getElementById('restartButton');
        if (!restartButton) {
            restartButton = document.createElement('button');
            restartButton.id = 'restartButton'; // Assign an ID for easy access
            restartButton.className = 'gameOptionsButton'; // Reuse the same style class
            restartButton.innerText = 'Click This Button To Restart The Game'; // Set the initial text based on isMuted state

            // Attach click event to toggle mute
            restartButton.onclick = function() {
                // If the game is now unmuted, play the sound for mute toggle button click
                if (!isMuted) {
                    playSound('muteToggleAudio', muteToggleSoundSrc); // Use 'muteToggleAudio' as the ID for the mute toggle audio
                }
                // Restart the game
                restartGame();
            };

            // Append the mute button to the gameOptionsContainer
            gameOptionsContainer.appendChild(restartButton);
        }

        var restartSoundSrc = 'audio/Button.mp3'; // replace with the path to your sound file
        var restartButton = document.getElementById('restartButton');
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
        //gameOptionsSection.style.display = 'none'; // Hide the section if there are no game options
        var muteToggleSoundSrc = 'audio/Button.mp3'; // replace with the path to your sound file
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

            // Append the mute button to the gameOptionsContainer still so that on the beginning screen the player can mute
            gameOptionsContainer.appendChild(muteButton);
        }
    }

    var actionsContainer = document.getElementById('actions');
    var actionsSection = document.getElementById('actionsSection');

    actionsContainer.innerHTML = ''; // Clear previous choices
    
    if (scene.actions && scene.actions.length > 0) {
        actionsSection.style.display = ''; // Show the section if there are choice options
    
        scene.actions.forEach(function(action) {
            var actionButton = document.createElement('button');
            actionButton.innerText = action.text;
            actionButton.className = 'actionButton'; // Use className instead of classList
            actionButton.onclick = function() {
                if (action.audio) {
                    playSound('actionAudio', action.audio); // 'buttonAudio' is the id of the button click sound element
                }
                performAction(action.text);

            };
            actionsContainer.appendChild(actionButton);
        });
    } else {
        actionsSection.style.display = 'none'; // Hide the section if there are no choice options
    }
}
// Initialize the first scene
nextScene('start');