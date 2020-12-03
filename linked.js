class _Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    insertFirst(item) {
      this.head = new _Node(item, this.head);
    }
    insertLast(item) {
      if (this.head === null) {
        this.insertFirst(item);
      } else {
        let tempNode = this.head;
        while (tempNode.next !== null) {
          tempNode = tempNode.next;
        }
        tempNode.next = new _Node(item, null);
      }
    }
    find(item) {
      // start at the head
      let currNode = this.head;
      // if the list is empty
      if (!this.head) {
        return null;
      }
      // check for the item
      while (currNode.value !== item) {
        // return null if it's the end of the list
        // and the item is not on the list
        if (currNode.next === null) {
          return null;
        } else {
          // otherwise, keep looking
          currNode = currNode.next;
        }
      }
      // once found
      return currNode;
    }
    remove(item) {
      // if the list is empty
      if (!this.head) {
        return null;
      }
      // if the node to be removed is head, make the next node head
      if (this.head.value === item) {
        this.head = this.head.next;
        return;
      }
      // start at the head
      let currNode = this.head;
      // keep track of previous
      let previousNode = this.head;
      while (currNode !== null && currNode.value !== item) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log('Item not found');
        return;
      }
      previousNode.next = currNode.next;
    }
    insertBefore(newItem, selectItem) {
      let currNode = this.head;
      let previousNode;
  
      while (currNode !== null) {
        if (currNode.value === selectItem) {
          if (previousNode) {
            console.log('inserted');
            previousNode.next = new _Node(newItem, currNode);
          } else {
            this.head = new _Node(newItem, currNode);
          }
          break;
        }
        previousNode = currNode;
        currNode = currNode.next;
      }
    }
    insertAfter(newItem, selectItem) {
      let currNode = this.head;
  
      while (currNode !== null) {
        if (currNode.value === selectItem) {
          currNode.next = new _Node(newItem, currNode.next);
          break;
        }
        currNode = currNode.next;
      }
    }

    insertAt(newItem,selectItem) {
        let currNode = this.head;

        while(currNode !== null){
            if(currNode.value === selectItem){
                currNode.value = new _Node(newItem, currNode.next)
            }
        }
    }
    displayList() {
      if (!this.head) {
        return;
      }
      let node = this.head;
      let str = '';
      while (node) {
        str += node.value + ' ';
        node = node.next;
      }
      return str;
    }
  }
  
  function main() {
    let SLL = new LinkedList('SLL');
    let valuesToAdd = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
    valuesToAdd.forEach((value) => {
      SLL.insertFirst(value);
    });
    // Add 'Tauhida' to the list
    SLL.insertFirst('Tauhida');
    // remove 'squirrel' from the list
    SLL.remove('squirrel'); // -> 'Item not found'
    SLL.insertAfter('value', 'Husker');
    console.log(SLL.displayList());
    console.log(SLL.find('Apollo'));
  }
  main();

