// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "Eternity's Moment.mp3",
    background_image: "Bravely.jpg",
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
            music: "Pursuing My True Self.mp3",
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
            music: "specialist (Reincarnation).mp3",
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
            background_image: "Junes.png",
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
            background_image: "Junes.png",
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
            background_image: "Midnight.jpg",
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
            background_image: "TwistedDistant.jpg",
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
            background_image: "BattleEnd.jpg",
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
            background_image: "P4Background1.jpg",
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
            background_image: "YuRoom.png",
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
            background_image: "watchTV.jpg",
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
            background_image: "Yasogami.jpg",
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
            background_image: "P4Background2.jpg",
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
            background_image: "Midnight.jpg",
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
            background_image: "ChieShadow.PNG",
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
            background_image: "YukikoCastle.jpg",
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
            background_image: "ChieAccepts.jpg",
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
            background_image: "P4Background1.jpg",
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
            background_image: "P4Background1.jpg",
            choices: [
                {
                    text: "Game over",
                    nextLevel: "start",
                }
            ]
        },

        xc2Start: {
            message: "It turns out that the green thing is actually a sword girl named Pyra, and she brings you back from the dead on one condition: you need to take her to Elysium (a.k.a. a place that may or may not exist). What do you do?",
            music: "Where We Used To Be.mp3",
            background_image: "uraya-screen-2.jpg",
            choices: [
                {
                    text: "Sure, I'll take Pyra to Elysium.",
                    nextLevel: "elysium",
                },

                {
                    text: "Going to Elysium isn't worth it. Bye.",
                    nextLevel: "start",
                },
            ]
        },

        elysium: {
            message: "Getting to Elysium is no easy task. There's a lot that needs to be done. I guess you could say it's going to be a bizarre adventure.",
            music: "Exploration.mp3",
            background_image: "uraya-screen-2.jpg",
            choices: [
                {
                    text: "Darn. Okay. :(",
                    nextLevel: "gormott",
                }
            ]
        },

        gormott: {
            message: "Okay, so now you're in Gormott, a place unrelated to where you died.",
            music: "Gormott.mp3",
            background_image: "gormott.jpg",
            choices: [
                {
                    text: "Haha, throwback to when I died.",
                    nextLevel: "rotbart",
                },
                {
                    text: "Isn't there a town nearby?",
                    nextLevel: "torigoth",
                },
            ]
        },

        rotbart: {
            message: "Oh no! Territorial Rotbart has spotted you! He's a high-level Unique Monster! What do you do?",
            music: "Those Who Stand Against Our Path.mp3",
            background_image: "rotbart.jpg",
            choices: [
                {
                    text: "Fight him, even though I'm incredibly underleveled.",
                    nextLevel: "rotbartLoss",
                },
                {
                    text: "Run away.",
                    nextLevel: "rotbartWin",
                },
            ]
        },

        rotbartWin: {
            message: "You made the right choice. You're safe...for now.",
            music: "Kirby Dance.mp3",
            background_image: "gormott-screen-1.jpg",
            choices: [
                {
                    text: "I've had enough of this place.",
                    nextLevel: "torigoth",
                }
            ]
        },

        rotbartLoss: {
            message: "You've made a huge mistake. Did you really think you could pick a fight with a level 78 monster when you're level 8, and win? You somehow managed to die a second time.",
            music: "Defeat.mp3",
            background_image: "gormott-screen-1.jpg",
            choices: [
                {
                    text: "Pyra, I've failed you.",
                    nextLevel: "start",
                }
            ]
        },

        torigoth: {
            message: "You decide to check out the local town, Torigoth. What now?",
            music: "Torigoth Day.mp3",
            background_image: "gormott-screen-6.jpg",
            choices: [
                {
                    text: "Wander",
                    nextLevel: "ardainian",
                },
                {
                    text: "I need a break.",
                    nextLevel: "inn",
                },
            ]
        },

        ardainian: {
            message: "You were minding your own business, but then an Ardainian soldier came out of nowhere. Think you can take him?",
            music: "Monster Surprised You.mp3",
            background_image: "soldier.jpg",
            choices: [
                {
                    text: "I cannot.",
                    nextLevel: "inn",
                },
                {
                    text: "I can take him.",
                    nextLevel: "soldierFight",
                },
            ]
        },

        soldierFight: {
            message: "It turns out that this fight is a bit overwhelming. What do you do?",
            music: "the xenoblade chronicles 2 battle theme but you won't forget it.mp3",
            background_image: "soldier.jpg",
            choices: [
                {
                    text: "Keep fighting",
                    nextLevel: "dontForget",
                },
                {
                    text: "Run away!",
                    nextLevel: "soldierWin",
                },
            ]
        },

        dontForget: {
            message: "You couldn't take him. Game over.",
            music: "Defeat.mp3",
            background_image: "dontforget.jpg",
            choices: [
                {
                    text: "I won't forget him.",
                    nextLevel: "start",
                }
            ]
        },

        soldierWin: {
            message: "You're safe! Now you can keep going!",
            music: "Omens of Life.mp3",
            background_image: "gormott-screen-3.jpg",
            choices: [
                {
                    text: "Onwards!",
                    nextLevel: "xc2ending",
                }
            ]
        },

        inn: {
            message: "Do you want to chill at an inn? It's almost nighttime, and you're starting to feel tired.",
            music: "Torigoth Night.mp3",
            background_image: "gormott-screen-3.jpg",
            choices: [
                {
                    text: "Nah. I think I'm good to go.",
                    nextLevel: "tired",
                },
                {
                    text: "Sure. Why not?",
                    nextLevel: "sleep",
                },
            ]
        },

        tired: {
            message: "Uhh, I don't think you were actually good to go. You passed out back there.",
            music: "Defeat.mp3",
            background_image: "gormott.jpg",
            choices: [
                {
                    text: "Adventuring isn't for me.",
                    nextLevel: "start",
                }
            ]
        },

        sleep: {
            message: "You shleep.",
            music: "White All Around Us.mp3",
            background_image: "alrest.jpg",
            choices: [
                {
                    text: "Rise and shine.",
                    nextLevel: "wakeyWakey",
                }
            ]
        },

        wakeyWakey: {
            message: "It's morning. You can keep going now.",
            music: "Mor Ardain.mp3",
            background_image: "gormott-screen-2.jpg",
            choices: [
                {
                    text: "To Elysium!",
                    nextLevel: "xc2ending",
                }
            ]
        },

        xc2ending: {
            message: "You've won (not really but this game isn't over and it's kinda long so for the sake of time I'm saying you won)! Do you make it to Elysium? I'm not telling.",
            music: "Still, Move Forward!.mp3",
            background_image: "XC2-World-Tree.jpg",
            choices: [
                {
                    text: "👌",
                    nextLevel: "start",
                }
            ]
        },
    },
};