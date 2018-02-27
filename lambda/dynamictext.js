
    // Configurable text arrays
    
    var welcomeText = [
        'Hey there, Welcome to',
        'Welcome to',
        'You woke me up. I was dreaming about Robocop. Welcome to'
    ];


    var insultsText = [
        'Don\'t give up your day job',
        'You bring everyone a lot of joy, when you leave the room',
        'I bet your brain feels as good as new, seeing that you never use it',
        'I\'m jealous of all the people that haven\'t met you',
        'You look like something I\'d draw with my left hand',
        'If laughter is the best medicine, your face must be curing the world',
        'Roses are red violets are blue, God made me pretty, what happened to you?',
        'How old are you? - Wait I shouldn\'t ask, you can\'t count that high',
        'All day I thought of you... I was at the zoo', 
        'To make you laugh on Saturday, I need to tell you a joke on Wednesday', 
        'You\'re so fat, you could sell shade',
        'Don\'t you need a license to be that ugly?',
        'My friend thinks he is smart. He told me an onion is the only food that makes you cry, so I threw a coconut at his face',
        'Your house is so dirty you have to wipe your feet before you go outside',
        'If you really spoke your mind, you\'d be speechless',
        'Stupidity is not a crime so you are free to go',
        'If I told you that I have a piece of dirt in my eye, would you move?',
        'So, a thought crossed your mind? Must have been a long and lonely journey',
        'You are so old, your birth-certificate expired',
        'Every time I\'m next to you, I get a fierce desire to be alone',
        'You\'re so dumb that you got hit by a parked car',
        'Keep talking, someday you\'ll say something intelligent!',
        'You\'re so fat, you leave footprints in concrete',
        'How did you get here? Did someone leave your cage open?',
        'Pardon me, but you\'ve obviously mistaken me for someone who gives a damn'   
    ]


    var victoryText = [
        'See you soon hopefully',
        'You killed it',
        'You have impressed me',
        'That was amazing'
        ];


    function getRandomString (arytxt) {
        var i =   Math.floor((Math.random() * arytxt.length));
        return arytxt [i];
    }



    module.exports = {
        'getInsultText' : function ()
            {
                return (getRandomString(insultsText))
            },

        'getWelcomeText' : function ()
            {
                return (getRandomString(welcomeText))
            },
        'getVictoryText' : function () 
            {
                return (getRandomString(victoryText))
            }
    };