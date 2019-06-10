const AllUsersReducer = {
  getAllUsersStart(state, payload) {
    state.allUsers.fetching = true;
    return state;
  },
  getAllUsersSuccess(state, payload) {
    state.allUsers.data = payload;
    state.allUsers.fetching = false;
    state.allUsers.fetched = true;
    return state;
  },
  getAllUsersError(state, payload) {
    state.allUsers.error = payload;
    state.allUsers.fetching = false;
    return state;
  }
};
export default AllUsersReducer;
