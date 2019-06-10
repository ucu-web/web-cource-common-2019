const UserLoginReducer = {
  userLoginStart(state, payload) {
    state.loggedUser.fetching = true;
    return state;
  },
  userLoginSuccess(state, payload) {
    state.loggedUser.data = payload;
    state.loggedUser.fetching = false;
    state.loggedUser.fetched = true;
    state.loggedUser.loggedIn = true;
    return state;
  },
  userLoginError(state, payload) {
    state.loggedUser.error = payload;
    state.loggedUser.fetching = false;
    return state;
  }
};
export default UserLoginReducer;
