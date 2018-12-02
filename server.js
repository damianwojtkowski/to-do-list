var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

var app = express();
var user = {};
var TODOS = [
  { 'id': 1, 'user_id': 1, 'name': "Get Milk", 'completed': false },
  { 'id': 2, 'user_id': 1, 'name': "Fetch Kids", 'completed': true },
  { 'id': 3, 'user_id': 2, 'name': "Buy flowers for wife", 'completed': false },
  { 'id': 4, 'user_id': 3, 'name': "Finish Angular JWT Todo App", 'completed': false }
];
var USERS = [
  { 'id': 1, 'username': 'jemma' },
  { 'id': 2, 'username': 'paul' },
  { 'id': 3, 'username': 'sebastian' }
];

function getTodos(userID) {
  return TODOS.filter(function (todo) {
    return userID === todo.user_id;
  });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressJwt({ secret: 'to-do-super-shared-secret'}).unless({path: ['/auth']} ));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
  next();
});

app.post('/auth', function (req, res) {
  var body = req.body;

  user = USERS.filter(function (el) {
    return el.username === body.username;
  })[0];

  if (!user || body.password !== 'todo') return res.sendStatus(401);

  var token = jwt.sign({ userID: user.id }, 'to-do-super-shared-secret', { expiresIn: '2h' });
  res.send({ token: token });
});

app.get('/todos', function (req, res) {
  res.type("json");
  res.send(getTodos(user.id));
});

app.listen(9876, function () {
  console.log('Server is listening on port 9876');
});
