const express = require('express');
const questionsListRouter = require('./questionsListRouter.js');
const usersRouter = require('./usersRouter.js');
const path = require('path');

const app = express();
const PORT = 5000;

console.log(path.resolve(__dirname, '..', 'dist'));
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
app.use('/src', express.static(path.resolve(__dirname, '../src')));

app.use('/questions', questionsListRouter);
app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'index.html'));
});

app.get('/users_list', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'users.html'));
});

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));