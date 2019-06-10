import actions from "./commits.js";
import mutations from "./reducers.js";
import state from "./state.js";
import Store from "./store.js";
export default new Store({
  actions,
  mutations,
  state
});
