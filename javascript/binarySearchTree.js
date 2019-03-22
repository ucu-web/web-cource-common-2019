class BinarySearchTree {

    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }

    addItem(item) {

        if (this.data) {
            if (item < this.data) {
                if (this.left == null) {
                    this.left = new BinarySearchTree(item);
                } else {
                    this.left.addItem(item);
                }
            } else if (item > this.data) {
                if (this.right == null) {
                    this.right = new BinarySearchTree(item);
                } else {
                    this.right.addItem(item);
                }
            }
        } else {
            this.data = item;
        }

    }

    searchItem(item) {

        if (item < this.data) {
            if (this.left == null) {
                return false;
            }
            return this.left.searchItem(item);
        } else if (item > this.data) {
            if (this.right == null) {
                return false;
            }
            return this.right.searchItem(item);
        } else {
            return true;
        }

    }

    // TODO: write item deletion

    deleteItem(item) {

    }

    printTree() {

        console.log(this.data);

        if (this.left != null) {
            this.left.printTree();
        }

        if (this.right != null) {
            this.right.printTree();
        }

    }

}

let SBT = new BinarySearchTree(5);

SBT.addItem(3);
SBT.addItem(0);
SBT.addItem(0);
SBT.addItem(6);
SBT.addItem(43);
SBT.addItem(2);

SBT.printTree();