//ListNode class, which contains the data and the pointer to the next object
class ListNode {
  public data: number;
  public next: ListNode | null;
  //our constructor is going
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//Linked List class
class LinkedList {
  public head: ListNode | null;
  constructor(head) {
    this.head = head;
  }

  // Insert into front of linked list O(1) time
  public insertHead(data: number): void {
    let node = new ListNode(data);
    let temp = this.head;
    this.head = node;
    this.head.next = temp;
  }

  // INSERT AFTER FINAL ELEMENT
  // O(n)
  public pushNode(data: number): void {
    if (this.head === null) {
      this.head = new ListNode(data);
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = new ListNode(data);
    }
  }

  //Check if a value is in the linked list
  public find(value: number): boolean {
    let temp = this.head;
    while (temp !== null) {
      if (temp.data === value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  public length(): number {
    let temp = this.head;
    let size = 0;
    while (temp !== null) {
      size++;
      temp = temp.next;
    }
    return size;
  }
  public print(): void {
    let temp = this.head;

    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

let nodeOne = new ListNode(5);
let nodeTwo = new ListNode(25);
nodeOne.next = nodeTwo;
let nodeThree = new ListNode(30);
nodeTwo.next = nodeThree;
let nodeFour = new ListNode(10);
nodeThree.next = nodeFour;
let linkedList = new LinkedList(nodeOne);

linkedList.pushNode(24);
linkedList.pushNode(27);
linkedList.print();
console.log("INSERTING NEW...");
linkedList.insertHead(38);
linkedList.print();
console.log("Length of list: ", linkedList.length());
console.log("Is 24 in the list? ", linkedList.find(24));
console.log("Is 100 in the list? ", linkedList.find(100));
