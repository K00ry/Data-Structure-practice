class Node{
    constructor(data,next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert First node to LL
    InsertFirst(data){
        this.head = new Node(data,this.head)
        this.size++
    }

    //Insert LastNode

    InsertLast(data){
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head = node;
        }else{
        current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next= node;
        }
        this.size++
    }


    InsertAtIndex(data,index){
       // requested index is out of range
        if(index > 0 && index > this.size){
           return;
        }
        if(index === 0){
            this.InsertFirst(data);
            return
        }
        let node = new Node(data);
        let current,previous;
        let count = 0;
        current = this.head;

        while(count < index){
            previous = current;
            count++
            current = current.next;
        }
        node.next = current;
        previous.next = node;


    }

    //Print each Node Data

    PrintData(){
      let current = this.head;
      while(current){
          console.log(current.data);
          current = current.next;
      }

    }


}

const jj = new LinkedList();
jj.InsertFirst(100);
jj.InsertFirst(200);
jj.InsertFirst(300);
jj.InsertLast(400);
console.log(jj);
jj.InsertAtIndex(500,2);

jj.PrintData();
