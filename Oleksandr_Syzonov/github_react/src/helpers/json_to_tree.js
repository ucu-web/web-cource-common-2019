import { map, filter } from "ramda";
import { Node } from "./TreeNodes.js";

export const nodeToObject = node => ({
  name: node["name"],
  latest_commit_text: node["latest_commit_text"],
  latest_commit_time: node["latest_commit_time"],
  is_directory: node["is_directory"],
  id: node.id
});

export const listIntoTreeList = list => {
  let directories = [];
  const find_id = id => filter(x => x.parent_id === id, list);
  map(x => {
    if (x.is_directory) {
      x.contents = [];
      directories.push(x);
    }
  }, list);
  map(x => {
    x.contents = find_id(x.id);
  }, directories);
  map(x => {
    if (x.parent_id === 0 && !x.is_directory) {
      directories.push(x);
    }
  }, list);
  return directories;
};
const processFileEntry = (entry, parent) => {
  if (entry["is_directory"]) {
    let thisDir = new Node(nodeToObject(entry));
    map(x => {
      processFileEntry(x, thisDir);
    }, entry["contents"]);
    parent.addChild(thisDir);
  } else {
    parent.addChild(new Node(nodeToObject(entry)));
  }
};
export const listIntoTree = list => {
  let basicDirectory = new Node("");
  map(x => {
    processFileEntry(x, basicDirectory);
  }, list);
  return basicDirectory;
};
