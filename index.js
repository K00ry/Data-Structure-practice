function User(firstName,lastName,age,gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;

};

var User1 = new User('abbas','jasem',31,'male');
console.log(User1);






function LinkedList(){
this.head = null;
this.tail = null;
}

function Node(value,next,prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}
LinkedList.prototype.addToHead = function(value){
  var newNode = new Node(value,this.head,null);
  if(this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head= newNode;
};

LinkedList.prototype.addToTail = function (value){
    var newNode = new Node(value,null,this.tail);
    if(this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;

};

LinkedList.prototype.removeHead = function () {
        if(!this.head) return null;
        const val = this.head.value;
        this.head = this.head.next;
        if(this.head) this.head.prev = null;
        else this.tail = null;
        return val;
};

LinkedList.prototype.removeTail = function () {
  if(!this.tail) return null;
  const  val = this.tail.value;
  this.tail = this.tail.prev;
  if(this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};


LinkedList.prototype.search = function (searchValue) {
  let currentNode = this.head;
  while(currentNode){
      if (currentNode.value === searchValue) return currentNode.value;
      currentNode = currentNode.next;

  }
  return null;
};

//My Solution

LinkedList.prototype.indexOf = function (value) {
    let headex = 0;
    let arr = [];
    let currentNode = this.head;
        while(currentNode){
            if (currentNode.value === value){
                arr.push(headex);
            }
                headex++;
                currentNode = currentNode.next;
        }
        return arr;
};


//tutorials solution will be like this




var ll = new LinkedList();

ll.addToHead(3);
ll.addToHead(3);
ll.addToHead(5);
ll.addToHead(3);
ll.addToHead(3);
ll.addToHead(4);
ll.addToHead(3);
ll.addToHead(7);
ll.addToHead(8);


var myLL = new LinkedList();
myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);
myLL.addToTail(40);

console.log(ll.indexOf(3));
console.log(ll);


function factorial (val){

    if(val === 2){
        return val
    }
   else{
       return val * factorial(val - 1);
    }
}

console.log(factorial(5));

