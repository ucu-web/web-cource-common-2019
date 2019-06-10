import PubSub from "../lib/pubsub.js";

export default class Store {
  constructor(params) {
    let self = this;

    // Add some default objects to hold our actions, mutations and state
    self.actions = {};
    self.mutations = {};
    self.state = {};

    // A status enum to set during actions and mutations
    self.status = "resting";

    // Attach our PubSub module as an `events` element
    self.events = new PubSub();

    if (params.hasOwnProperty("actions")) {
      self.actions = params.actions;
    }

    if (params.hasOwnProperty("mutations")) {
      self.mutations = params.mutations;
    }

    self.state = new Proxy(params.state || {}, {
      set: function(state, key, value) {
        // Set the value as we would normally
        state[key] = value;

        // Trace out to the console. This will be grouped by the related action
        console.log(`stateChange: ${key}: ${value}`);

        // Publish the change event for the components that are listening
        self.events.publish("stateChange", self.state);

        // Reset the status ready for the next operation
        self.status = "resting";

        return true;
      }
    });
  }

  dispatch(actionKey, payload) {
    let self = this;

    if (typeof self.actions[actionKey] !== "function") {
      console.error(`Action "${actionKey} doesn't exist.`);
      return false;
    }

    console.groupCollapsed(`ACTION: ${actionKey}`);

    // Let anything that's watching the status know that we're dispatching an action
    self.status = "action";

    // Actually call the action and pass it the Store context and whatever payload was passed
    self.actions[actionKey](self, payload);

    // Close our console group to keep things nice and neat
    console.groupEnd();

    return true;
  }

  commit(mutationKey, payload) {
    let self = this;

    // Run a quick check to see if this mutation actually exists
    // before trying to run it
    if (typeof self.mutations[mutationKey] !== "function") {
      console.log(`Mutation "${mutationKey}" doesn't exist`);
      return false;
    }

    // Let anything that's watching the status know that we're mutating state
    self.status = "mutation";

    // Get a new version of the state by running the mutation and storing the result of it
    let newState = self.mutations[mutationKey](self.state, payload);

    // Merge the old and new together to create a new state and set it
    self.state = Object.assign(self.state, newState);

    return true;
  }
}
