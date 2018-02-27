// Author: Muhammad Chaudhry 
// Humourous Number Guess skill for Alexa v0.1

var Alexa = require('alexa-sdk');
var DynamicText = require('./dynamictext');

    exports.handler = function(event, context, callback){
      var alexa = Alexa.handler(event, context);
      alexa.registerHandlers(handlers);
      alexa.execute();
    };


   
    var handlers = {

        'NewSession': function () {
            //          var chosenNumber = 0; // default
                      this.attributes['chosenNumber'] = Math.floor((Math.random() * 20) + 1);
                      this.attributes['guessCount']=0; // counter for number of guesses

                      this.emit(':ask', DynamicText.getWelcomeText() +  ' the number guessing game! Guess a number between 1 and 20', 'Guess a number between 1 and 20!');
                  },

        'Guess': function () {
            // The number user guessed
            var guessedNumber = this.event.request.intent.slots.GuessedNumber.value;
            // The random nunber chosen by alexa
            var chosenNumber = this.attributes['chosenNumber'];
          
            if (!(guessedNumber >=1 && guessedNumber <= 20))
                this.emit(':ask', 'Hmm, I didn\'t get that. Say a number between 1 and 20','Say a number between 1 and 20');
  
            // Increment the guess counter
            this.attributes['guessCount']++;

            if (guessedNumber == chosenNumber) {
                this.emit(':tell', `You are correct. It took you ${this.attributes['guessCount']} attempts. The number is indeed ${chosenNumber}. ${DynamicText.getVictoryText()}. Goodbye!`);
            } else 
           
            if (guessedNumber > chosenNumber) {
                this.emit(':ask', `${DynamicText.getInsultText()}. Your guess of ${guessedNumber} is too high, try again.`, 'Guess a number between 1 and 20.');  
            } else
            { 
                this.emit(':ask', `${DynamicText.getInsultText()}. Your guess of ${guessedNumber} is too low. Try again.`, 'Guess a number between 1 and 20.');  
                
            }
        }

    };
