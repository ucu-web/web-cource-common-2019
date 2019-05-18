const express = require('express');
const friendRepositoryRouter = require('./friendsRepositoryRouter.js');
const recommendedRepositoryRouter = require('./recommendedRepositoryRouter');


const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/friendsRepository', friendRepositoryRouter);
app.use('/recommendedRepository', recommendedRepositoryRouter);

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
