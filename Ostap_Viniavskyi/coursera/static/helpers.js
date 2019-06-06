export const delegateEvent = (node, cssPath, eventName, callbackFn) => {
    const evHandler = ev => {
        if (ev.target.matches(cssPath)) {
            callbackFn.call(ev.target, ev);
        }
    };
    node.addEventListener(eventName, evHandler);

    return () => node.removeEventListener(eventName, evHandler);
};