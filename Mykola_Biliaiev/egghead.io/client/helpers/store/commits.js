export default {
  getAllCoursesStart(context, payload) {
    context.commit("getAllCoursesStart", payload);
  },
  getAllCoursesSuccess(context, payload) {
    context.commit("getAllCoursesSuccess", payload);
  },
  getAllCoursesError(context, payload) {
    context.commit("getAllCoursesError", payload);
  },

  getAllLessonsStart(context, payload) {
    context.commit("getAllLessonsStart", payload);
  },
  getAllLessonsSuccess(context, payload) {
    context.commit("getAllLessonsSuccess", payload);
  },
  getAllLessonsError(context, payload) {
    context.commit("getAllLessonsError", payload);
  },

  getAllUsersStart(context, payload) {
    context.commit("getAllUsersStart", payload);
  },
  getAllUsersSuccess(context, payload) {
    context.commit("getAllUsersSuccess", payload);
  },
  getAllUsersError(context, payload) {
    context.commit("getAllUsersError", payload);
  },

  userLoginStart(context, payload) {
    context.commit("userLoginStart", payload);
  },
  userLoginSuccess(context, payload) {
    context.commit("userLoginSuccess", payload);
  },
  userLoginError(context, payload) {
    context.commit("userLoginError", payload);
  },

  userRegistrationStart(context, payload) {
    context.commit("userRegistrationStart", payload);
  },
  userRegistrationSuccess(context, payload) {
    context.commit("userRegistrationSuccess", payload);
  },
  userRegistrationError(context, payload) {
    context.commit("userRegistrationError", payload);
  }
};
