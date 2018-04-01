 

const DialogflowApp = require('actions-on-google').DialogflowApp;

var buildRichResponseSimpleMessage= function buildRichResponse(req, res) {
  const assistant = new DialogflowApp({request: req, response: res});


//Simple Text

var googleAssistant = assistant.buildRichResponse()
.addSimpleResponse({speech: 'Simple Text Speech Testing By Bikash',
  displayText: 'Simple Text Display'});
  


  //Suggestion Chips

  
  /*
  var googleAssistant = assistant.buildRichResponse()
  .addSimpleResponse({speech: 'Simple Text Speech',
    displayText: 'Simple Text Display'})
    .addSimpleResponse({
      speech: 'Suggestion Chips',
      displayText: 'Suggestion Chips'})
    .addSuggestions(
      ['Basic Card', 'List', 'Carousel', 'Suggestions']);
 
  */

  //Basic Card
  
  /*
 
  var googleAssistant = assistant.buildRichResponse()
  .addSimpleResponse({speech: 'Simple Text Speech',
    displayText: 'Simple Text Display'})
    .addSimpleResponse({
      speech: 'Basic Cards',
      displayText: 'Basic Cards'})
        .addBasicCard(assistant.buildBasicCard('This is a basic card.') 
                              
          .setSubtitle('This is a subtitle')
          .setTitle('Title: this is a title')
          .addButton('This is a button', 'https://assistant.google.com/')
          .setImage('https://3c2ba678857e073c9506-9b92ffc51ccdc874f7e956dfcfbdbfba.ssl.cf5.rackcdn.com/spark/images/servicenow/servicenow.png', 'Image alternate text')
        );
*/

  
     
  assistant.ask(googleAssistant);

  const WELCOME_INTENT = 'input.welcome';  
  const NUMBER_INTENT = 'input.number';  
  const NUMBER_ARGUMENT = 'input.mynum'; 

} 

//Carousal
 




 var buildRichResponseCarousal = function buildRichResponse(req, res) {
   const app = new DialogflowApp({request: req, response: res});
 console.log(req.body);
 
 app.askWithCarousel('Alright! Here are a few things you can learn. Which sounds interesting?',
 // Build a carousel
 app.buildCarousel()
 // Add the first item to the carousel
 .addItems(app.buildOptionItem('MATH_AND_PRIME',
   ['math', 'math and prime', 'prime numbers', 'prime'])
   .setTitle('Math & prime numbers')
   .setDescription(' Test')
   .setImage('https://static.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg', 'Math & prime numbers'))
 // Add the second item to the carousel
 .addItems(app.buildOptionItem('EGYPT',
   ['religion', 'egpyt', 'ancient egyptian'])
   .setTitle('Ancient Egyptian religion')
   .setDescription('Test')
   .setImage('https://static.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg', 'Egypt')
 )
 // Add third item to the carousel
 .addItems(app.buildOptionItem('RECIPES',
   ['recipes', 'recipe', '42 recipes'])
   .setTitle('42 recipes with 42 ingredients')
   .setDescription('Test')
   .setImage('https://static.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg', 'Recipe')
 )

 );
 };
 
 

 //List
 


var buildRichResponseList = function buildRichResponse(req, res) {
  const app = new DialogflowApp({request: req, response: res});
console.log(req.body);

app.askWithList('Alright! Here are a few things you can learn. Which sounds interesting?',
// Build a carousel
app.buildList()
// Add the first item to the carousel
.addItems(app.buildOptionItem('MATH_AND_PRIME',
  ['math', 'math and prime', 'prime numbers', 'prime'])
  .setTitle('Math & prime numbers')
  .setDescription(' Test')
  .setImage('https://static.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg', 'Math & prime numbers'))
// Add the second item to the carousel
.addItems(app.buildOptionItem('EGYPT',
  ['religion', 'egpyt', 'ancient egyptian'])
  .setTitle('Ancient Egyptian religion')
  .setDescription('Test')
  .setImage('https://static.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg', 'Egypt')
)
// Add third item to the carousel
.addItems(app.buildOptionItem('RECIPES',
  ['recipes', 'recipe', '42 recipes'])
  .setTitle('42 recipes with 42 ingredients')
  .setDescription('Test')
  .setImage('https://static.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg', 'Recipe')
)

);
};

 
 module.exports.buildRichResponseSimpleMessage=buildRichResponseSimpleMessage;
 module.exports.buildRichResponseList=buildRichResponseList;
 module.exports.buildRichResponseCarousal=buildRichResponseCarousal