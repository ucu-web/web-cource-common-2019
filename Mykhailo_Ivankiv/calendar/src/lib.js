export const getNumberOfDaysInMonth = date => {
  const d = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return d.getDate();
};

export const delegateEvent = (node, cssPath, eventName, callbackFn) => {
  const evHandler = ev => {
    if (ev.target.matches(cssPath)) {
      callbackFn.call(ev.target, ev);
    }
  };
  node.addEventListener(eventName, evHandler);

  return () => node.removeEventListener(eventName, evHandler);
};

export const addMonth = (date, monthAmount) => {
  const currentMonth = date.getMonth();
  const result = new Date(date);
  result.setMonth(currentMonth + monthAmount);
  return result;
};

export const chunk = (array, size = 1) => {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
