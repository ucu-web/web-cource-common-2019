const AllCoursesReducer = {
  getAllCoursesStart(state, payload) {
    state.allCourses.fetching = true;
    return state;
  },
  getAllCoursesSuccess(state, payload) {
    state.allCourses.data = payload;
    state.allCourses.fetching = false;
    state.allCourses.fetched = true;
    return state;
  },
  getAllCoursesError(state, payload) {
    state.allCourses.error = payload;
    state.allCourses.fetching = false;
    return state;
  }
};
export default AllCoursesReducer;
