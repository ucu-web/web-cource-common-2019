const faker = require('faker');

const Course = require('../db').Course;
const Lesson = require('../db').Lesson;
const User = require('../db').User;

const generateRandomUsers = async (amount) =>
    await Promise.all(new Array(amount).fill(0).map(async () =>
        await ((new User({
            "name": faker.name.findName(),
            "password": faker.lorem.word(),
            "email": faker.internet.email()
        })).save())
    ));

const generateRandomCourse = async (amount, author_id) =>
    await Promise.all(new Array(amount).fill(0).map(async () =>
        await ((new Course({
            courseName: faker.lorem.words(),
            courseTech: faker.lorem.words(),
            courseDescription: faker.lorem.sentence(),
            lessons: [],
            author: author_id,
        })).save())
    ));

const generateRandomLessons = async (amount, author_id) =>
    await Promise.all(new Array(amount).fill(0).map(async () =>
        await ((new Lesson({
            name: faker.lorem.words(),
            language: faker.lorem.words(),
            time: '1:14',
            video: 'test',
            author: author_id,
        })).save())
    ));

const generateData = async () => {
    let users_amount = 4;
    let courses_per_user = 3;
    let lessons_per_user = 3;
    const users = await generateRandomUsers(users_amount);
    const random_courses = await Promise.all(users.map(async (user) => await generateRandomCourse(courses_per_user, user["_id"])));
    const random_lessons = await Promise.all(users.map(async (user) => await generateRandomLessons(lessons_per_user, user["_id"])));
    process.exit()
};
generateData();