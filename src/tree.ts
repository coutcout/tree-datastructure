'use strict';

import { TreeNode } from "./treeNode";

/**
 * 
 */
export class Tree<T> {
    private root: TreeNode<T>;

    /**
     * Class constructor. This constructor create a Tree. The root will have the value passed in parameter.
     * @param value Root value
     */
    constructor(value: T){
        this.root = new TreeNode(value);
    }

    /**
     * This method return the tree root
     * @returns The tree root
     */
    getRoot(): TreeNode<T> {
        return this.root;
    }
}