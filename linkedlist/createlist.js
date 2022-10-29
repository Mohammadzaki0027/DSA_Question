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
    return this.head;
  }
  removeele(data) {
    let current = this.head;
    let prev = null;
    while (current != null) {
      if (current.data === data) {
        if (prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.data;
      }
    prev = current;
      current = current.next;
}
    return -1;
  }
  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
        str += curr.data + " ";
        curr = curr.next;
    }
    console.log(str);
}


}
let li = new LinkedList();
li.add(10);
li.add(20);
li.add(30);
li.add(40);
li.add(50);
li.removeele(20);
li.printList()
let y = li.add(60);
knodefromback()

