class _Node {
  constructor(value) {
      this.value=value,
      this.next=null,
      this.prev=null;
  }
}

class Queue {
  constructor() {
        this.first = null;
        this.last = null;
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
    if(!this.first === null) {
      return null
    }

    return this.first.value
  }

  all() {
    // Return all items in the queue.
    let node = this.first
    while(node) {
      console.log(node.value)
      node = node.next
    }
  }
}

module.exports = Queue
