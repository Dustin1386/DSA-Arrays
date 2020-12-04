// // Creates a node containing the data and a reference to the next item
// class _Node {
//     constructor(data, next) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class Stack {
//     constructor() {
//         this.top = null; 
//     }
//     push(data){
//         // if the stack is empty then the node will be the top of the stack
//         if(this.top === null){
//             this.top = new _Node(data, null);
//             return this.top
//         }
//         /* If the stack already has something, 
//            then create a new node,
//            add data to the new node, and
//            have the pointer point to the top */
//         const node = new _Node(data, this.top)
//     }

//     pop(data){
//          /* In order to remove the top of the stack, you have to point
//            the pointer to the next item and that next item becomes the
//            top of the stack */
//            const node = this.top;
//            this.top = node.next;
//            return node.data

//     }

// }

// function sortStack(stackA){
//     let stackB = new Stack();
//     while(!stackA.isEmpty()){
//         const tmp = stackA.pop();
//         while(tmp < stackB.peek()){
//             stackA.push(stackB.pop());
//         }
//         stackB.push(tmp)
//     } 
//     return stackB
// }

// const peek = (stack)=>{
//     console.log('test',stack)
//     let node = stack.node.top
//     while(stack.node.value !== null){
//         console.log('this is node', node)
//     }
// }
// //check if stack is empty
// const isEmpty = (stack) =>{   
//     return stack.top === 0; 
// }

// //display stack
// const display = (stack) =>{
//     let node = stack.top
//     while(node !== null){
//         node = node.next
//     }
// }

// //remove McCoy
// let pop = (stack) => { 
//      return [--top]; }

// let starTrek = new Stack();
// let arrayOfNames = ['Kirk', 'Spock', 'McCoy', 'Scotty']
// arrayOfNames.forEach((name)=>{
//     starTrek.push(name);
// });


//queue
// Creates a node containing the data and a reference to the next item

class _Node {
    constructor(value,next,previous){
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.head = null;
        this.tail = null;

    }
    enqueue(data){
        const node = new _Node(data,this.head,this.tail);

        if(this.first === null){
            this.first = node;
        }
        if(this.last){
            this.last.next = node
        }
        this.last = node
    }
    dequeue(){
                    //if the queue is empty, there is nothing to return
        if(this.first === null){
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        //if this is the last item in the queue
        if(node === this.last){
            this.last = null;
        }
        return node.value

    }
}


let starTreckQ = new Queue();
let initialArray = ["Kirk", "Spock", "Uhura", "Sulu", "Checkov"]
initialArray.forEach((char)=>{
    starTreckQ.enqueue(char);
});


//display queue
const display = (queue) =>{
    let node = queue.first
    while(node !== null){
        console.log(node.value)
        node = node.next
    }
   
}
display(starTreckQ)

// remove spock
starTreckQ.dequeue()
starTreckQ.dequeue()
starTreckQ.enqueue("Kirk")


display(starTreckQ)



