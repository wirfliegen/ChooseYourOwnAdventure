// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You spawn. What do you do?",
            choices: [
                {
                    text: "Get some wood",
                    nextLevel: "wood",
                },

                {
                    text: "Hunt for hostile mobs",
                    nextLevel: "mobs",
                },
            ]
        },

        wood: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You have some wood and wood weapons. What now?",
            choices: [
                {
                    text: "Make a house",
                    nextLevel: "house",
                },
                
                {
                   text: "Mine",
                   next: "mine",
                },
            ]
        },

        mobs: {
            message: "You died!",
            music: "Determination.mp3",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        mine: {
            message: "You found diamonds! What do you do?",
            music: "",
            choices: [
                {
                    text: "Mine diamonds",
                    nextLevel: "noDiamonds",
                },
                
                {
                    text: "Wait until you get better weapons",
                    nextLevel: "",
                }
            ]
        },
        
        house: {
            message: "",
            music: "",
            choices: [
                {
                    text: "",
                    nextLevel: "",
                }
            ]
        },
        noDiamonds: {
            message: "Your wooden pickaxe broke and you didn't get any diamonds.",
            music: "",
            choices: [
                {
                   text: "Sucks to be you",
                   nextLevel: "",
                }
            ]
        },
        
        
    }
};
