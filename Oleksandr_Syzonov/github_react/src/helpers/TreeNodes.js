import { map } from "ramda";

export class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null;
  }

  setParentNode(node) {
    this.parent = node;
  }

  getParentNode() {
    return this.parent;
  }

  addChild(node) {
    node.setParentNode(this);
    this.children[this.children.length] = node;
  }

  getChildren() {
    return this.children;
  }

  removeChildren() {
    this.children = [];
  }
  clone() {
    let newNode = new Node(this.value);
    newNode.setParentNode(this.parent ? this.parent : null);
    map(x => newNode.addChild(x), this.children);
    return newNode;
  }
}
