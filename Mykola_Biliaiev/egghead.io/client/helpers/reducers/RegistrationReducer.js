const UserRegistrationReducer = {
  userRegistrationStart(state, payload) {
    state.registrationState.fetching = true;
    return state;
  },
  userRegistrationSuccess(state, payload) {
    state.registrationState.data = payload;
    state.registrationState.fetching = false;
    state.registrationState.fetched = true;
    return state;
  },
  userRegistrationError(state, payload) {
    state.registrationState.error = payload;
    state.registrationState.fetching = false;
    return state;
  }
};
export default UserRegistrationReducer;
