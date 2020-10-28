const http = require('http');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

http
  .createServer((req, res) => {
    // Create TwiML response
    const twiml = new VoiceResponse();

    twiml.say('call 911.');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  })
  .listen(1333, '127.0.0.1');