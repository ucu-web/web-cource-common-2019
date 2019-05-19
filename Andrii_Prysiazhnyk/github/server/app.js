const express = require('express');
const friendRepositoryRouter = require('./friendsRepositoryRouter.js');
const recommendedRepositoryRouter = require('./recommendedRepositoryRouter.js');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../', 'dist')));

app.use('/friendsRepository', friendRepositoryRouter);
app.use('/recommendedRepository', recommendedRepositoryRouter);

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
