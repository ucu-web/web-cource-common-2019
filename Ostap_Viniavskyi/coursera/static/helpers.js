export const delegateEvent = (node, cssPath, eventName, callbackFn, matchNode) => {
  const evHandler = ev => {
    if (matchNode || ev.target.matches(cssPath)) {
      callbackFn.call(ev.target, ev);
    }
  };
  node.addEventListener(eventName, evHandler);

  return () => node.removeEventListener(eventName, evHandler);
};
