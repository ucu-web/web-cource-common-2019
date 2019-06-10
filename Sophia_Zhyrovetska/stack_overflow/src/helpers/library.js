const sanitizeHtml = require("sanitize-html");
const { last } = require("ramda");

const delegateEvent = (node, cssPath, eventName, callBackFn) => {
  const evHandler = ev => {
    if (ev.target.matches(cssPath)) {
      callBackFn.call(ev.target, ev);
    }
  };
  node.addEventListener(eventName, evHandler);

  return () => node.removeEventListener(eventName, eventName);
};

const render = async (
  parentNode,
  containerClass,
  path,
  htmlElementGenerator,
  removePreviousContent,
  filterPredicat
) => {
  const container = parentNode.querySelector(containerClass);
  if (removePreviousContent) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
  const data = await (await fetch(path)).json();
  let dataArray;
  Array.isArray(data) ? (dataArray = data) : (dataArray = [data]);
  let dataFiltered;
  filterPredicat
    ? (dataFiltered = dataArray.filter(filterPredicat))
    : (dataFiltered = dataArray);
  dataFiltered.map(element =>
    container.appendChild(htmlElementGenerator(element))
  );
  localStorage.setItem(
    containerClass,
    document.querySelector(containerClass).innerHTML
  );
};

const renderLastElement = async (
  parentNode,
  containerClass,
  path,
  htmlElementGenerator,
  removePreviousContent,
  filterPredicat
) => {
  const container = parentNode.querySelector(containerClass);
  if (removePreviousContent) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
  const data = await (await fetch(path)).json();
  let dataArray;
  Array.isArray(data) ? (dataArray = data) : (dataArray = [data]);
  let dataFiltered;
  filterPredicat
    ? (dataFiltered = dataArray.filter(filterPredicat))
    : (dataFiltered = dataArray);
  container.appendChild(htmlElementGenerator(last(dataFiltered)));
};

const today = new Date();
const yearCurrent = today.getFullYear();
const monthCurrent = today.getMonth() + 1;
const dayCurrent = today.getDate();

const isDateCloseToCurrent = (element, dateRange) => {
  const sameYear = element.year == yearCurrent;

  const sameMonth =
    sameYear &&
    element.month == monthCurrent &&
    element.day + dateRange >= dayCurrent;
  const monthChanged =
    sameYear &&
    element.month == monthCurrent - 1 &&
    element.day + dateRange >= dayCurrent + 31;
  const yearChanged =
    element.year == yearCurrent - 1 &&
    monthCurrent == 1 &&
    element.month == 12 &&
    element.day + dateRange > dayCurrent + 31;

  return sameMonth || monthChanged || yearChanged;
};

const isDescendant = (parent, child) => {
  let node = child.parentNode;
  while (node != null) {
    if (node == parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

const buttonGroupChangeState = (
  parentNode,
  targetButtonSelector,
  otherButtonsSelectorsList,
  stateClass
) => {
  otherButtonsSelectorsList
    .filter(selector => {
      return parentNode.querySelector(selector).classList.contains(stateClass);
    })
    .map(selector => {
      parentNode.querySelector(selector).classList.remove(stateClass);
    });
  parentNode.querySelector(targetButtonSelector).classList.add(stateClass);
};

export {
  delegateEvent,
  render,
  renderLastElement,
  isDateCloseToCurrent,
  isDescendant,
    buttonGroupChangeState
};
