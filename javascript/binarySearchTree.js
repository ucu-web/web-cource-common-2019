"use strict";

class BinarySearchTree {

    constructor(data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (this.data) {
            if (data < this.data) {
                if (this.left === null) {
                    this.left = new BinarySearchTree(data);
                } else {
                    this.left.insert(data);
                }
            } else if (data > this.data) {
                if (this.right === null) {
                    this.right = new BinarySearchTree(data);
                } else {
                    this.right.insert(data);
                }
            }
        } else {
            this.data = data;
        }
    }

    search(data) {
        if (data < this.data) {
            if (this.left === null) {
                console.log( "Nothing is found");
                return false;
            }
            return this.left.search(data);
        } else if (data > this.data) {
            if (this.right === null) {
                console.log( "Nothing is found");
                return false;
            }
            return this.right.search(data);
        } else {
            console.log("Item is found");
            return true;
        }
    }

    print() {

        function recurse(node, level) {
            let s = "";
            if (node !== null) {
                s += recurse(node.right, level + 1);
                s += "| ".repeat(level);
                s += node.data + "\n";
                s += recurse(node.left, level + 1);
            }
            return s;
        }

        console.log(recurse(this, 0));

    }

}

let bst = new BinarySearchTree(6);

bst.insert(5);
bst.insert(2);
bst.insert(8);
bst.insert(7);
bst.insert(6);
bst.insert(0);
bst.insert(23);

bst.search(23);

bst.print();