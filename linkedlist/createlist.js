class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    let node = new Node(data);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

    
      current.next = node;
    }
    this.size++;
  return this.head
  }
}
let li=new LinkedList()
li.add(10)
let y=li.add(20)
console.log(y);


