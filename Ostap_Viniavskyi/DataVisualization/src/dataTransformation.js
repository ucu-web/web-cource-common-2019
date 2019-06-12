import * as d3 from "d3";

export const assignIndices = data => {
  const indexToName = d3.map(),
    nameToIndex = d3.map();
  let index = 0;
  // assign indices to subjects names
  data.forEach(d => {
    if (!nameToIndex.has((d = d.name))) {
      indexToName.set(index, d);
      nameToIndex.set(d, index++);
    }
  });
  //    assign indices to universities
  data.forEach(subject => {
    subject.laureates.forEach(laureate => {
      if (!nameToIndex.has((laureate = laureate.organization))) {
        indexToName.set(index, laureate);
        nameToIndex.set(laureate, index++);
      }
    });
  });
  return { indexToName, nameToIndex };
};

export const transformDataToRelationMatrix = (data, nameToIndex) => {
  // create two-dim matrix
  const n = nameToIndex.keys().length;
  const relationMatrix = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  data.forEach(subject => {
    subject.laureates.forEach(laureate => {
      const i = nameToIndex.get(subject.name),
        j = nameToIndex.get(laureate.organization);
      relationMatrix[i][j]++;
      relationMatrix[j][i]++;
    });
  });
  return relationMatrix;
};

export const generateSourceTargetInfo = (data, sourceIndex, targetIndex, indexToName) => {
    const subjectOrganizations =  data[sourceIndex].laureates;
    const organization = indexToName.get(targetIndex);
    return subjectOrganizations.filter(l => l.organization === organization)
};