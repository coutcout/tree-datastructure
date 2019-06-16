'use strict';

import { describe } from "mocha";
import { TreeNode } from "../src/treeNode";
import { expect } from "chai";

describe("TreeNode tests", function(){
    
    describe("TreeNode constructor test", function(){
        it("should always set the value", function(){
            // Arrange
            let node = new TreeNode("a");

            // Act
            let value = node.value;

            // Assert
            expect(value).not.to.be.undefined;
            expect(value).not.to.be.null;
        });

        it("should always have the same value as the constructor's value", function(){
            // Arrange
            let constructorValue = "a";
            let node = new TreeNode(constructorValue);

            // Act
            let value = node.value;

            // Assert
            expect(value).to.equal(constructorValue);
        });
    });

    describe("getChilds tests", function(){
        it("should return an empty list if there is no children", function(){
            // Arrange
            let node = new TreeNode(0);

            // Act
            let childs = node.getChilds();

            // Assert
            expect(childs).to.be.empty;
        });

        it("should return all the current node direct children", function(){
            // Arrange
            let node = new TreeNode(0);
            let node1 = node.addChild(1);
            let node2 = node.addChild(2);
            let node3 = node.addChild(3);
            
            let node11 = node1.addChild(11);

            // Act
            let childs = node.getChilds();

            // Assert
            expect(childs).not.to.be.empty;
            expect(childs).to.have.lengthOf(3);

            expect(childs).to.be.an('array').that.contain.members([node1, node2, node3]);
            expect(childs).to.be.an('array').that.not.contains(node11);
        });
    });

    describe("getParent tests", function(){
        it("should return the parent's node", function(){
            // Arrange
            let node = new TreeNode(0);
            let node1 = node.addChild(1);
            let node2 = node.addChild(2);

            let node11 = node1.addChild(11);
                        

            // Act
            let parent11 = node11.getParent();
            let parent0 = node.getParent()

            // Assert
            expect(parent11).to.equal(node1, "node1 is not the node11 parent");
            expect(parent0).to.be.oneOf([null, undefined], "root's parent is not null or undefined");
        });

        it("should return the parent of the node with the asked level", function(){
            // Arrange
            let node0 = new TreeNode(0);
            let node1 = node0.addChild(1);
            let node11 = node1.addChild(11);
            let node2 = node0.addChild(2);
            let node21 = node2.addChild(21);
            let node211 = node21.addChild(211);

            // Act
            let parent211_lvl1 = node211.getParent(1);
            let parent211_lvl2 = node211.getParent(2);
            let parent11_lvl0 = node11.getParent(0);

            // Assert
            expect(parent211_lvl1).to.equal(node2);
            expect(parent211_lvl2).to.equal(node0);
            expect(parent11_lvl0).to.equal(node1);
        });

        it("should throw a RangeError when level is too high", function(){
            // Arrange
            let node0 = new TreeNode(0);
            let node1 = node0.addChild(1);

            // Act

            // Assert
            expect(() => {node1.getParent(2);}).to.throw(RangeError, TreeNode.GET_PARENT_RANGE_ERROR);
        })
    });

    describe("addChildTreeNode tests", function(){
        it("should add the parametre node to the current node's children", function(){
            // Arrange
            let node = new TreeNode(0);
            let node1 = new TreeNode(1);

            // Act
            node.addChildTreeNode(node1);

            // Assert
            expect(node.getChilds()).to.contain(node1);
        });
    });

});