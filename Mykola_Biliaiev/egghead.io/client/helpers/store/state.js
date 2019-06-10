const allCourses = {
  allCourses: {
    fetching: false,
    fetched: false,
    error: false,
    data: []
  }
};

const allLessons = {
  allLessons: {
    fetching: false,
    fetched: false,
    error: false,
    data: []
  }
};

const allUsers = {
  allUsers: {
    fetching: false,
    fetched: false,
    error: false,
    data: []
  }
};
const loggedUser = {
  loggedUser: {
    fetching: false,
    fetched: false,
    loggedIn: false,
    data: {}
  }
};
const registrationState = {
  registrationState: {
    fetching: false,
    fetched: false,
    loggedIn: false,
    data: {}
  }
};

export default {
  ...allCourses,
  ...allLessons,
  ...allUsers,
  ...loggedUser,
  ...registrationState
};
