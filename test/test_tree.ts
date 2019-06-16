'use strict';

import {describe, it} from 'mocha';
import {expect} from 'chai';
import {Tree} from '../src/tree';

describe("Tree tests", function(){
    
    describe("Constructor tests", function(){
        it('should always have a root node', function(){
            // Arrange
            let tree = new Tree("a");

            // Act
            let root = tree.getRoot();

            // Assert
            expect(root).not.to.be.undefined;
        });
    });

    describe("getRoot tests", function(){
        it("should always return a node with the same value as constructor's value", function(){
            // Arrange
            let constructorValue = "a";
            let tree = new Tree(constructorValue);
            
            // Act
            let node = tree.getRoot();

            // Assert
            expect(node.value).to.equal(constructorValue);
        })
    });
});