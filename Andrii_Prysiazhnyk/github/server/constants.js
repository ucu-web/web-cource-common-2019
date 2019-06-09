const path = require("path");

const usersPath = path.resolve(__dirname, "../", "data", "users.json");
const repositoriesPath = path.resolve(__dirname, "../", "data", "repositories.json");
const friendsPath = path.resolve(__dirname, "../", "data", "friends.json");
const contributorsPath = path.resolve(__dirname, "../", "data", "contributors.json");

module.exports.usersPath = usersPath;
module.exports.repositoriesPath = repositoriesPath;
module.exports.friendsPath = friendsPath;
module.exports.contributorsPath = contributorsPath;
