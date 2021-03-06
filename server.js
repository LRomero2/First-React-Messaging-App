const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const pusher = new Pusher({
  appId: '1239113',
  key: '912f9ffbe4e1708e2097',
  secret: '866bb15d8f37bea15768',
  cluster: 'eu',
  encrypted: true
});
app.set('PORT', process.env.PORT || 5000);

app.post('/message', (req, res) => {
  const payload = req.body;
  pusher.trigger('chat', 'message', payload);
  res.send(payload)
});

app.listen(app.get('PORT'), () => 
  console.log('Listening at ' + app.get('PORT')))