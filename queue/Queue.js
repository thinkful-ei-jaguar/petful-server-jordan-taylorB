class _Node {
  constructor(value) {
    this.next=null;
    this.value=value;
    this.prev=null;
  }
}

class Queue {
  constructor() {
    this.last = null;
    this.first = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      node.prev = this.last;
      this.last.next = node;
    }
  
    this.last = node;
    return node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = node.next;
  
    if (node === this.last) {
      this.last = null;
    }
    
    return node.value;
  }

  show() {
    // Return the next item in the queue.
    const responseArr = [];
    if(!this.first === null) {
      return null;
    }
    responseArr.push(this.first.value);
    return responseArr;
  }

  all() {
    // Return all items in the queue.
    let node = this.first;
    let responseArr = [];
    while(node) {
      responseArr.push(node.value);
      node = node.next;
    }
    return responseArr;
  }

  position(value) {
    //start at the head
    let currNode = this.head;
    let countPosition = 1;
    //if the list is empty
    if (!this.head){
      return null;
    }
    while(currNode.value !== value) {
      //return null if end of the list 
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      }
      else {
        //keep looking 
        countPosition++;
        currNode = currNode.next;
      }
    }
    //found it
    return countPosition;
  }
}

module.exports = Queue;
