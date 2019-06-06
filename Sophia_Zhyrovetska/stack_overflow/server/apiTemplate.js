const fs = require('fs').promises;
const {getJson, getLargestQuestionId, getQuestionById} = require('./../src/helpers/routeHelpers.js');

const getAllQuestions = async (pathToJsonFile, req, res) => {
    try {
        res.json(await getJson(pathToJsonFile));
    } catch (error) {
        res.statusCode = 500;
        res.send("Internal server error");
    }
};

const getOneQuestion = async (pathToJsonFile, req, res) => {
    try {
        const allQuestions = await getJson(pathToJsonFile);
        const question = getQuestionById(allQuestions, req.params["id"]);

        if (question ) {
            res.json(question);
        } else {
            res.statusCode = 404;
            res.send("No such question");
        }

    } catch (error) {
        res.statusCode = 500;
        res.send("Internal server error");
    }
};


const postQuestion = async (pathToJsonFile, req, res) => {
    try {
        const questions = await getJson(pathToJsonFile);
        req.body["id"] = getLargestQuestionId(questions) + 1;
        questions.push(req.body);

        await fs.writeFile(pathToJsonFile, JSON.stringify(questions));
        res.json(req.body);
    } catch (error) {
        res.statusCode = 500;
        res.send("Internal server error");
    }
};


const putQuestion = async (pathToJsonFile, req, res) => {
    try {
        const questions = await getJson(pathToJsonFile);
        const question = getQuestionById(questions, req.body["id"]);

        if (question) {
            const updatedQuestions = questions.map((element) => element["id"] !== req.body["id"] ?
                element : req.body);
            await fs.writeFile(pathToJsonFile, JSON.stringify(updatedQuestions));

            res.json(req.body);
        } else {
            res.statusCode = 404;
            res.send("No such question");
        }
    } catch (error) {
        res.statusCode = 500;
        res.send("Internal server error");
    }
};

const deleteQuestion = async (pathToJsonFile, req, res) => {
    try {
        const questions = await getJson(pathToJsonFile);
        const filteredQuestions = questions.filter((element) => element["id"] !== req.params["id"]);

        if (filteredQuestions.length !== questions.length) {
            await fs.writeFile(pathToJsonFile, JSON.stringify(filteredQuestions));
            res.send("Question deleted")
        } else {
            res.statusCode = 404;
            res.send("No such question");
        }
    } catch (error) {
        res.statusCode = 500;
        res.send("Internal server error");
    }
};

module.exports.getAllQuestions = getAllQuestions;
module.exports.getOneQuestion = getOneQuestion;
module.exports.postQuestion = postQuestion;
module.exports.putQuestion = putQuestion;
module.exports.deleteQuestion = deleteQuestion;