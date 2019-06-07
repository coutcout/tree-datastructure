'use strict';

export class TreeNode<T> {
    value: T;
    private parent!: TreeNode<T>;
    private childs: TreeNode<T>[] = [];

    constructor(value: T){
        this.value = value;
    }

    /**
     * This method allow accessing the n-parent of the current node.
     * @param level The level of the parent we need to access.
     */
    getParent(level?: number): TreeNode<T> {
        if(!level || level === 0){
            return this.parent;
        } else if (!this.parent){
            throw new RangeError("This tree doesn't have enough depth");
        }

        return this.parent.getParent(level - 1);
    }


    getChilds(): TreeNode<T>[]{
        return this.childs;
    }

    /**
     * This methode create and add a node child to the current node.
     * The child need to be already created
     * @param node Node we want to add to the child list of the current node.
     */
    addChildTreeNode(node: TreeNode<T>): TreeNode<T>{
        node.parent = this;
        this.childs.push(node);
        return node;
    }

    /**
     * This methode create and add a node child from a value to the current node.
     * @param node Value of the node we want to add to the child list of the current node.
     */
    addChild(value: T): TreeNode<T>{
        let node = new TreeNode(value);
        node.parent = this;
        this.childs.push(node);
        return node;
    }
}