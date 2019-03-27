class BinarySearchTree {
    constructor(compareFunction) {
        this._key = null;
        this._value = null;
        this._compareFunction = compareFunction;
        this._parent = null;
        this._left = null;
        this._right = null;
    }

    _findNodeAndParentIfExists(key) {
        if (!this._compareFunction(this._key, key)) {
            return {parentNode: this._parent, node: this};
        }

        let nextNode = (this._compareFunction(this._key, key) > 0) ? this._left : this._right;
        return (nextNode !== null) ? nextNode._findNodeAndParentIfExists(key) : {parentNode: this, node: null};
    }

    static _checkKey(key) {
        if (key === null || key === undefined) {
            throw Error("Null and undefined can't be used as key.");
        }
    }

    add(key, value) {
        BinarySearchTree._checkKey(key);
        if (this._key === null) {
            this._key = key;
            this._value = value;
            return;
        }

        let {parentNode, node} = this._findNodeAndParentIfExists(key);
        if (node) {
            node._value = value;
        } else {
            let child;
            if (this._compareFunction(parentNode._key, key) > 0) {
                child = parentNode._left = new BinarySearchTree(this._compareFunction);
            } else {
                child = parentNode._right = new BinarySearchTree(this._compareFunction);
            }

            child._parent = parentNode;
            child._key = key;
            child._value = value;
        }
    }

    _findNode(key) {
        let node;
        if (this._key === null || !({node} = this._findNodeAndParentIfExists(key)).node) {
            throw Error("There isn't such key in the BST.");
        }

        return node;
    }

    search(key) {
        BinarySearchTree._checkKey(key);

        return this._findNode(key)._value;
    }

    remove(key) {
        BinarySearchTree._checkKey(key);
        let node = this._findNode(key);

        if (!node._left && !node._right) {
            node._removeWithoutChildren();
        } else if (!node._left ^ !node._right) {
            node._removeWithOneChild();
        } else {
            node._removeWithBothChildren(node);
        }
    }

    _removeWithoutChildren() {
        if (this._parent && this._parent._left === this) {
            this._parent._left = null;
        } else if (this._parent && this._parent._right === this) {
            this._parent._right = null;
        } else {
            this._key = null;
        }
    }

    _removeWithOneChild() {
        let childNode;
        if (this._left) {
            childNode = this._left;
        } else {
            childNode = this._right;
        }

        if (this._parent && this._parent._left === this) {
            node._parent._left = childNode;
            childNode._parent = node._parent;
        } else if (this._parent && this._parent._right === this) {
            this._parent._right = childNode;
            childNode._parent = this._parent;
        } else {
            Object.assign(this, childNode);
            this._parent = null;
        }
    }

    _removeWithBothChildren() {
        let successor = this._right._extremeNode((node) => node._left);
        if (successor._parent === this) {
            this._right = successor._right;
            if (successor._right) {
                successor._right._parent = this;
            }
        } else {
            if (successor._right) {
                successor._parent._left = successor._right;
                successor._right._parent = successor._parent;
            } else {
                successor._parent._left = null;
            }
        }

        this._key = successor._key;
        this._value = successor._value;
    }

    _extremeNode(nextNode) {
        if (this._key === null) {
            throw Error("The BST is empty.");
        }

        let node = this;
        while (nextNode(node)) {
            node = nextNode(node);
        }

        return node;
    }

    maxKey() {
        return this._extremeNode((node) => node._right)._key;
    }

    minKey() {
        return this._extremeNode((node) => node._left)._key;
    }

    getSortedData() {
        let data = [];
        this._inorder(data);
        return data;
    }

    _inorder(array) {
        if (this._left) {
            this._left._inorder(array);
        }
        array.push({key: this._key, value: this._value})
        if (this._right) {
            this._right._inorder(array);
        }
    }

    balance() {
        let data = this.getSortedData(), balancedTree = new BinarySearchTree(this._compareFunction);
        BinarySearchTree._recursiveFill(data, balancedTree, 0, data.length - 1);
        Object.assign(this, balancedTree);
    }

    static _recursiveFill(array, tree, start, end) {
        if (end >= start) {
            let center = ((start + end) / 2) ^ 0;
            tree.add(array[center].key, array[center].value);
            BinarySearchTree._recursiveFill(array, tree, start, center - 1);
            BinarySearchTree._recursiveFill(array, tree, center + 1, end);
        }
    }
}
