const AllLessonsReducer = {
  getAllLessonsStart(state, payload) {
    state.allLessons.fetching = true;
    return state;
  },
  getAllLessonsSuccess(state, payload) {
    state.allLessons.data = payload;
    state.allLessons.fetching = false;
    state.allLessons.fetched = true;
    return state;
  },
  getAllLessonsError(state, payload) {
    state.allLessons.error = payload;
    state.allLessons.fetching = false;
    return state;
  }
};
export default AllLessonsReducer;
