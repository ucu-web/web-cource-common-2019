class Node {
    constructor(data, left=null, right=null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return 1;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return 1;
                    } else if (node.left != null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return 1;
                    } else if (node.right != null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }
}

BST.prototype.toString = function() {
    const recurse = function(node, level) {
        let s = "";
        if (node != null) {
            s += recurse(node.right, level + 1);
            s += "| " * level;
            s += node.data.toString() * "\n";
            s += recurse(node.left, level + 1);
        }
        return s;
    };
    recurse(this.root, 0);
}



const bst = new BST();
bst.insert(5);
bst.insert(15);
bst.insert(2);
console.log('' + bst);
