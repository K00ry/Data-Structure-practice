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
        this.size += 1
    }

    //Insert LastNode
    // InsertLast(data){
    //     new Node(data,null)
    //
    //
    // }

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
jj.InsertFirst(400);

jj.PrintData();
