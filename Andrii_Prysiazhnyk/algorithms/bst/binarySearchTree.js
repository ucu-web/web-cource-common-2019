class Node {
    constructor(value, parent) {
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    getNextNode(value) {
        if (value > this.value) {
            return this.right;
        } else {
            return this.left;
        }
    }

    nodeWithMinValue() {
        let currentNode = this;
        while (currentNode.left !== null)
            currentNode = currentNode.left;

        return currentNode;
    }

    removeWithoutChildren() {
        if (this.parent.left === this) {
            this.parent.left = null;
        } else {
            this.parent.right = null;
        }
    }

    removeWithOneChild() {

    }

    removeWithBothChildren() {

    }
}


class BST {
    constructor() {
        this._root = null;
    }

    add(value) {
        if (!this._root) {
            this._root = new Node(value, null);
            return;
        }

        let currentNode = this._root, previousNode = null;
        while (currentNode) {
            previousNode = currentNode;
            currentNode = currentNode.getNextNode(value);
        }

        if (value > previousNode.value) {
            previousNode.right = new Node(value, previousNode);
        } else {
            previousNode.left = new Node(value, previousNode);
        }
    }

    search(value) {
        let currentNode = this._root;
        while (currentNode && currentNode.value !== value) {
            currentNode = currentNode.getNextNode(value);
        }
        return currentNode;
    }

    remove(value) {
        let node = this.search(value);
        if (node) {
            if (!node.left && !node.right) {
                node.removeWithoutChildren();
            } else if (!node.left ^ !node.right) {
                node.removeWithOneChild();
            } else {
                node.removeWithBothChildren();
            }
        }
    }
}

let a = new BST();
a.add(12);
a.add(9);
a.add(15);
a.add(123);
a.add(-20);
a.add(-40);
a.add(500);
console.log((1 !== 1) ^ (2 === 2));
