const express = require('express');
const questionsListRouter = require('./questionsListRouter.js');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../', 'dist')));
app.use(express.static(path.resolve(__dirname, '../', 'src', 'images')));


app.use('/questions', questionsListRouter);

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));