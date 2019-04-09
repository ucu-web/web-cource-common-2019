class BSTNode {
    constructor(data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {

    constructor(data = null) {
        this.root = new BSTNode(data);
    }

    insert(data, node = this.root) {
        if (node.data === null) {
            node.data = data;
            return;
        }
        if (data > node.data) {
            if (node.right == null) {
                node.right = new BSTNode(data);
                return;
            }
            this.insert(data, node.right);
        } else {
            if (node.left == null) {
                node.left = new BSTNode(data);
                return;
            }
            this.insert(data, node.left);
        }
    }

    search(data, node = this.root) {
        if (node === null || node.data === data) {
            return node;
        }
        if (data < node.data) {
            return this.search(data, node.left);
        }
        return this.search(data, node.right);
    }

    inorder(node = this.root) {
        if (node) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    print() {
        const recurse = (node, level) => {
            let s = "";
            if (node !== null) {
                s += recurse(node.right, level + 1);
                s += "| ".repeat(level);
                s += node.data.toString() + '\n';
                s += recurse(node.left, level + 1);
            }
            return s;
        };
        return recurse(this.root, 0);
    }
}

let tree = new BinarySearchTree(5);
console.log(tree.print());
tree.insert(3);
tree.insert(2);
tree.insert(6);
tree.insert(8);
tree.insert(7);
tree.insert(1);
tree.insert(1.5);
console.log(tree.print());



