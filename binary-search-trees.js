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


let test = new BST(3);
test.insert(3);
test.insert(6);
test.insert(4);
test.insert(9);
test.insert(11);
test.insert(15);
test.insert(17);
test.insert(19);
test.insert(20);
function LOg(value ){
    console.log(value);
}
test.depthFirstOrder(LOg,"pre-order");


let contain = test.contains(7);


//
console.log(test);
// console.log(contain);
