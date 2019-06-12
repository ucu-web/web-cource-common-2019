function ControlState() {
    let states = {
        up: false,
        down: false,
        left: false,
        right: false,
        fire: false
    };

    const getCurrentState = () => {
      for (const state in states) {
          if (states[state] === true)
              return state;
      }
    };

    Object.defineProperty(this, "state", {
        get: function () {
            // console.log('current state:', getCurrentState());
            return getCurrentState();
        }
    });

    let keyMap = new Map([
        [37, 'left'], [39, 'right'], [38, 'up'], [40, 'down'], [32, 'fire']
    ]);

    document.addEventListener('keydown', (event) => update(event, true));
    document.addEventListener('keyup', (event) => update(event, false));

    function update(event, pressed) {
        if (keyMap.has(event.keyCode)) {
            event.preventDefault();
            states[keyMap.get(event.keyCode)] = pressed;
        }
    }
}

export default ControlState;