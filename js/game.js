// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "Eternity's Moment.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            music: "Eternity's Moment.mp3",
            message: "Two objects appear before you. Which one do you take?",
            choices: [
                {
                    text: "Is that a tarot card?",
                    nextLevel: "p4Start",
                },

                {
                    text: "the green thing that looks like a USB",
                    nextLevel: "xc2Start",
                }
            ]
        },

        p4Start: {
            message: "You're going to be living in the countryside (Inaba!) with your uncle and your younger cousin for a year because your parents are working overseas :/. Coincidentally, once you arrived, people have been getting murdered. Why is this happening? You're about to find out (and try to put an end to it with the power of friendship).",
            music: "Pursuing-My-True-Self.mp3",
            background_image: "P4-CoverArt.jpg",
            choices: [
                {
                    text: "Okay, cool.",
                    nextLevel: "school",
                },

                {
                    text: "No, thanks. Take me back.",
                    nextLevel: "start",
                }
            ]
        },

        school: {
            message: "Your first day at your new school! Yay! You even make new friends: Yosuke, Chie, and Yukiko! They tell you about the Midnight Channel. According to legend, when you look at the TV when it's raining at midnight you see ~magical~ people inside. You decide to try it out later that night, and as it turns out, the rumor is true!",
            music: "specialist.mp3",
            background_image: "ProtagonistTV.gif",
            choices: [
                {
                   text: "Midnight Channel real",
                   nextLevel: "junes",
                },
            ]
        },

        junes: {
            message: "You tell Chie and Yosuke about last night's discovery, but they don't believe you. You decide to test it out at the Junes electronics section (yes, the local superstore is a legitimate hangout spot). You stick your hand through the TV. Yosuke and Chie believe you now, at least. What now?",
            music: "Junes Theme.mp3",

            choices: [
                {
                    text: "Enter the TV with Yosuke",
                    nextLevel: "midnightChannel",
                },

                {
                    text: "Tell Chie to go with Yosuke",
                    nextLevel: "noChie",
                },
            ]
        },

        noChie: {
            message: "Yosuke does not want to enter the TV with Chie, because apparently she has 'cooties.' The guy is 16. He needs to grow up.",
            music: "Junes Theme.mp3",
            choices: [
                {
                    text: "Okay, fine. I'll enter the TV.",
                    nextLevel: "midnightChannel",
                }
            ]
        },

        midnightChannel: {
            message: "You're inside the TV! At least your friends believe you now. There's also a weird bear thing here.",
            music: "Backside Of The TV.mp3",
            choices: [
                {
                    text: "Who are you?",
                    nextLevel: "tutorialFight",
                },
            ]
        },

        tutorialFight: {
            message: "TUTORIAL FIGHT! SHADOW ALERT! TUTORIAL FIGHT! SHADOW ALERT! There's a Shadow about to attack you. What will you do?",
            music: "Reach Out To The Truth -First Battle-.mp3",
            choices: [
                {
                    text: "GO! IZANAGI! (that's your Persona!)",
                    nextLevel: "tutorialVictory",
                },

                {
                    text: "Don't do anything",
                    nextLevel: "dead",
                },
            ]
        },

        tutorialVictory: {
            message: "Yay! You defeated the Shadow. Not bad for your first time fighting, right? Then you fought Yosuke's Shadow, and he got a Persona too. But Yosuke's not important.",
            music: "Period.mp3",
            choices: [
                {
                    text: "Nice. Now I'm tired. Weird bear, get us out.",
                    nextLevel: "home",
                },
            ]
        },

        dead: {
            message: "Uhh, you didn't bother to fight back, so you died. What did you expect?",
            music: "Alone.mp3",
            choices: [
                {
                    text: "I had so much to live for.",
                    nextLevel: "start",
                },
            ]
        },

        home: {
            message: "You guys want a break. Also, the bear never told you who he was. So go home and rest. There's school tomorrow. :(",
            music: "Signs Of Love.mp3",
            choices: [
                {
                    text: "But first, check the Midnight Channel",
                    nextLevel: "tv",
                },
            ]
        },

        tv: {
            message: "Whoa, someone familiar is on TV! Could it be a girl from school?",
            music: "Who's There.mp3",
            choices: [
                {
                    text: "Nah",
                    nextLevel: "thonk",
                },

                {
                    text: "Now that you mention it...",
                    nextLevel: "thonk",
                },
            ]
        },

        thonk: {
            message: "At school, you, Chie, and Yosuke discuss what you saw on TV last night. You all agree that the person who appeared was Yukiko. To make matters worse, Yukiko is missing! Do you think the Midnight Channel might have something to do with the murders? Is Yukiko in danger?",
            music: "Deduction.mp3",
            choices: [
                {
                    text: "Not at all",
                    nextLevel: "yukikoDied",
                },

                {
                    text: "Definitely. Yukiko must be inside the TV.",
                    nextLevel: "saveYukiko",
                },
            ]
        },

        yukikoDied: {
            message: "So, the Midnight Channel does have something to do with the murders. People are thrown into the TV, where they are then killed. That's what happened to Yukiko. You could've saved her.",
            music: "Reverie.mp3",
            choices: [
                {
                    text: "Game over for me",
                    nextLevel: "start",
                }
            ]
        },

        saveYukiko: {
            message: "You guys decide to save Yukiko! With your newfound Persona powers, this will be a piece of cake!",
            music: "Backside Of The TV.mp3",
            choices: [
                {
                    text: "But Chie doesn't have a Persona",
                    nextLevel: "chieShadow",
                }
            ]
        },

        chieShadow: {
            message: "Uh oh! Chie's shadow self appeared! It's a part of Chie that she doesn't want to accept (so you need to fight it before it runs amok). Deep down, Chie is jealous of Yukiko.",
            music: "Borderline of Madness.mp3",
            choices: [
                {
                    text: "'You're not me!' ~ Chie",
                    nextLevel: "chieShadowFight",
                },
            ]
        },

        chieShadowFight: {
            message: "This is a group effort. You and Yosuke need to fight this thing together. Since, you know, you two are the only ones with Personas. And Chie really needs your help.",
            music: "I'll Face Myself -Battle-.mp3",
            choices: [
                {
                    text: "YEAH!",
                    nextLevel: "fightSuccess",
                },

                {
                    text: "We're not fighting this",
                    nextLevel: "fightFailure",
                },
            ]
        },

        fightSuccess: {
            message: "You defeated Chie's Shadow, and she managed to accept it. Okay, yeah, maybe she is a bit jealous of Yukiko. Who wouldn't be? Oh, and Chie also got a Persona!",
            music: "I'll Face Myself.mp3",
            choices: [
                {
                    text: "Now we can actually save Yukiko!",
                    nextLevel: "p4end",
                }
            ]
        },

        p4end: {
            message: "I'm going to end things here. You guys end up saving Yukiko, she gets a Persona, and you meet new people who also get Personas. This group of Persona users is known as the Investigation Team (although you guys can't tell anyone you use Personas). You solve the mystery of the Midnight Channel, and it turns out the killer was someone you knew. After that, all is good in the small town you and your friends live in.",
            music: "Electronica In Velvet Room.mp3",
            choices: [
                {
                    text: "That was fun",
                    nextLevel: "start",
                }
            ]
        },

        fightFailure: {
            message: "And you LOST",
            music: "Reverie.mp3",
            choices: [
                {
                    text: "Game over",
                    nextLevel: "start",
                }
            ]
        },

        xc2Start: {
            message: "",
            music: "Where We Used To Be.mp3",
            choices: [
                {
                    text: "",
                    nextLevel: "",
                },

                {
                    text: "",
                    nextLevel: "",
                },
            ]
        },
    },
};
