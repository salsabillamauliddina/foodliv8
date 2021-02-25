const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/index');
const session = require('express-session')

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended : true}));

app.use(session({
  secret: 'rahasia',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(router);

app.listen(port, () => {
    console.log(`Listening on port : ${port}`);
})
