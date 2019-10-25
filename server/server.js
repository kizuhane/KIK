const express = require('express');
const path = require('path');
const logger = require('morgan');

// Custom logger
// const customLogger = require('./routes/middleware/logger');

const app = express();

const PORT = process.env.PORT || 5000;
// call routers to variable
// const indexRouter = require('./routes/index');

// BODY PHASER
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MIDDLEWARE

// create static route to / for static html files (where '/' is always index.html, /name 'name.html'
app.use(express.static(path.join(__dirname, 'public')));

// LOGGER
app.use(logger('dev'));
// app.use(customLogger);

// ROUTS
// app.use('/', indexRouter);

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'firstName1', lastName: 'lastName1' },
    { id: 2, firstName: 'firstName2', lastName: 'lastName2' },
    { id: 3, firstName: 'firstName3', lastName: 'lastName3' }
  ];
  res.json(customers);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
