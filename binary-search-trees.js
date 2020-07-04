function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}



BST.prototype.insert = function(value){
    if (value <= this.value) {
        if (!this.left)  this.left = new BST(value);
        else  this.left.insert(value);
    }
    else if (value >= this.value){
        if (!this.right)  this.right = new BST(value);
        else this.right.insert(value);

    }
};

BST.prototype.contains = function(value){
    if (value === this.value) return true;
    else if (value <= this.value) {
        if (!this.left) return false;
        else return this.left.contains(value);
    }else if (value >= this.value){
        if(!this.right) return false;
        else return this.right.contains(value);
    }
};

BST.prototype.depthFirstOrder = function(iterator,order){
    if (order === 'pre-order') iterator(this.value);
    if (this.left)  this.left.depthFirstOrder(iterator,order);
    if (order === 'in-order') iterator(this.value);
    if(this.right)  this.right.depthFirstOrder(iterator,order);
    if (order === 'post-order') iterator(this.value);
};
BST.prototype.breadthFirstTraversal = function(iterator){
    let que = [this];
    while(que.length){
        let treeNode = que.shift();
        iterator(treeNode);
        if(treeNode.left) que.push(treeNode.left);
        if(treeNode.right) que.push(treeNode.right);
    }
};


let test = new BST(50);
test.insert(30);
test.insert(70);
test.insert(100);
test.insert(60);
test.insert(59);
test.insert(20);
test.insert(45);
test.insert(35);
test.insert(85);
test.insert(105);
test.insert(10);
function LOg(value ){
    console.log(value);
}
function log_breadth(node){
    console.log(node.value);
}
// test.depthFirstOrder(LOg,"pre-order");
test.breadthFirstTraversal(log_breadth);
//
//
// let contain = test.contains(7);


//
console.log(test);
// console.log(contain);
