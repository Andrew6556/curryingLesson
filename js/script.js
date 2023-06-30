"use strict";

const tree = { 
        value: 1, children: [ 
            {value: 2, children: [{value: 4}, {value: 5}, ] },
            {value: 3, children: [{value: 6}, {value: 7}, ] } 
        ] 
    };

let value = [];

function getTreeValues(tree){
    value.push(tree.value)
    if(tree.children !== undefined){
        for (let key in tree.children){
            getTreeValues(tree.children[key])
        }
    }
}
getTreeValues(tree)
