export const delegateEvent = (node, cssPath, eventName, callbackFn, matchNode) => {
  const evHandler = ev => {
    if (matchNode || ev.target.matches(cssPath)) {
      callbackFn.call(ev.target, ev);
    }
  };
  node.addEventListener(eventName, evHandler);

  return () => node.removeEventListener(eventName, evHandler);
};

export const distance = (p1, p2) => {
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
};
