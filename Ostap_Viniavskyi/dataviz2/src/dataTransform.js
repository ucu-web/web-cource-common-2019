import { set, map } from "d3";

export const transformData = data => {
  const nodes = createNodes(data);
  const {
    indexToName: sourceIndexToName,
    nameToIndex: sourceNameToIndex
  } = assignIndicesToNames(nodes.sources);
  const {
    indexToName: targetIndexToName,
    nameToIndex: targetNameToIndex
  } = assignIndicesToNames(nodes.targets);
  const links = getProportionalLinks(nodes, createLinks(data));
  const { sourcesProp, targetsProp } = getProportions(nodes, links);
  return {
    nodes,
    links,
    sourceIndexToName,
    sourceNameToIndex,
    targetIndexToName,
    targetNameToIndex,
    sourcesProp,
    targetsProp
  };
};

const createNodes = data => {
  const nodes = { sources: [], targets: [] };
  const universities = set();
  data.forEach(d => {
    nodes.sources.push({ name: d.name });
    d.laureates.forEach(l => {
      if (!universities.has(l.organization)) {
        universities.add(l.organization);
      }
    });
  });
  universities.values().forEach(v => {
    nodes.targets.push({ name: v });
  });
  return nodes;
};

const assignIndicesToNames = nodesEl => {
  let index = 0;
  const indexToName = map(),
    nameToIndex = map();
  nodesEl.forEach(el => {
    indexToName.set(index, el.name);
    nameToIndex.set(el.name, index++);
  });
  return { indexToName, nameToIndex };
};

const createLinks = data => {
  const links = new Map();
  data.forEach(d => {
    if (!links.has(d.name)) {
      links.set(d.name, new Map());
    }
    d.laureates.forEach(l => {
      const innerMap = links.get(d.name);
      if (!innerMap.has(l.organization)) {
        innerMap.set(l.organization, 1);
      } else {
        innerMap.set(l.organization, innerMap.get(l.organization) + 1);
      }
    });
  });
  const linksList = [];
  links.forEach((v, k) => {
    v.forEach((v1, k1) => {
      linksList.push({ source: k, target: k1, value: v1 });
    });
  });
  return linksList;
};

const getProportions = (nodes, links) => {
  const sourcesPropMap = new Map(),
    targetsPropMap = new Map();
  let valuesSum = 0;

  links.forEach(({ source, target, value }) => {
    if (!sourcesPropMap.has(source)) {
      sourcesPropMap.set(source, 0);
    }
    if (!targetsPropMap.has(target)) {
      targetsPropMap.set(target, 0);
    }
    sourcesPropMap.set(source, sourcesPropMap.get(source) + value);
    targetsPropMap.set(target, targetsPropMap.get(target) + value);
    valuesSum += value;
  });

  sourcesPropMap.forEach((value, key) => {
    sourcesPropMap.set(key, sourcesPropMap.get(key) / valuesSum);
  });

  targetsPropMap.forEach((value, key) => {
    targetsPropMap.set(key, targetsPropMap.get(key) / valuesSum);
  });

  const sourcesProp = [];
  for (let pair of sourcesPropMap) {
    sourcesProp.push({ name: pair[0], value: pair[1] });
  }
  const targetsProp = [];
  for (let pair of targetsPropMap) {
    targetsProp.push({ name: pair[0], value: pair[1] });
  }

  return { sourcesProp, targetsProp };
};

const getProportionalLinks = (nodes, links) => {
  const sumMap = new Map();
  nodes.sources.forEach(source => {
    let sourceSum = 0;
    links
      .filter(link => link.source === source.name)
      .forEach(x => {
        sourceSum += x.value;
      });
    sumMap.set(source.name, sourceSum);
  });
  return links.map(({ source, target, value }) => {
    return { source, target, value, proportion: value / sumMap.get(source) };
  });
};
