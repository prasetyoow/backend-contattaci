require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({extended: false}));
app.use(cors());

app.post('/', (req, res) => {
  return res.json({
    success: true,
    message: 'Posted data success to send'
  });
});

app.post('/tesayam', (req, res) => {
  return res.send(req.body);
})

app.use('*', (req, res) => {
  return res.status(404).send({
    succes: false,
    message: 'Resource not found'
  });
});

app.listen(process.env.PORT, () => {
  console.log(`App is running on port ${process.env.PORT}`);
});