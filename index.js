//strict is used to place a function or program in strict mode
//catches common coding errors

'use strict';
var APP_ID =  'amzn1.ask.skill.2ba565a8-fd28-452f-b2ae-ccf916ce0314';
var AlexaSkill = require('./AlexaSkill');
var SPEECH_OUTPUT = 'Hello';
var GreeterService = function() {
AlexaSkill.call(this, APP_ID);
};
GreeterService.prototype = Object.create(AlexaSkill.prototype);

//on launch event handler

var helloResponseFunction = function(intent, session, response) {
response.tell(SPEECH_OUTPUT);
};
GreeterService.prototype.eventHandlers.onLaunch = helloResponseFunction;

//the intent handler 

GreeterService.prototype.intentHandlers = { 'HelloWorldIntent' : helloResponseFunction};

// the AWS Lambda handler 

exports.handler = function(event, contaxt) { var greeterService = new GreeterService();
                                            greeterService.execute(event, context);
                                           };





