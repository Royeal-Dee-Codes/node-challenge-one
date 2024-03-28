document.addEventListener("DOMContentLoaded", function () {
  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  class LinkedList {
    constructor() {
      this.head = null;
    }

    append(data) {
      console.log(data, this);
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }

    prepend(data) {
      console.log(data, this);
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }

    remove(data) {
      console.log(data);
      if (!this.head) return;
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      while (current.next) {
        if (current.next.data === data) {
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
    }

    clear() {
      this.head = null;
    }

    getFirstNode() {
      return this.head;
    }

    getLastNode() {
      if (!this.head) return null;
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      return current;
    }

    popLastNode() {
      if (!this.head) return null;
      if (!this.head.next) {
        const poppedNode = this.head;
        this.head = null;
        return poppedNode;
      }
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      const poppedNode = current.next;
      current.next = null;
      return poppedNode;
    }
  }

  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  linkedList.prepend(0);
  console.log("First node:", linkedList.getFirstNode().data);
  console.log("Last node:", linkedList.getLastNode().data);
  linkedList.popLastNode();
  linkedList.clear();
});
