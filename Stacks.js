// // Creates a node containing the data and a reference to the next item
// class _Node {
//     constructor(data, next) {
//         this.data = data;
//         this.next = next;
//     }
// }

class Stack {
    constructor() {
        this.top = null; 
    }
    push(data){
        // if the stack is empty then the node will be the top of the stack
        if(this.top === null){
            this.top = new _Node(data, null);
            return this.top
        }
        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top)
    }

    pop(data){
         /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
           const node = this.top;
           this.top = node.next;
           return node.data

    }

}

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
    constructor(value){
        this.value = value;
        this.next = null;
        
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;


    }
    enqueue(data){
        const node = new _Node(data);

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
class Queue2 {
    constructor(){
        this.stackA = [];
        this.stackB = [];
    }
    enqueue(value){
        for(let i = 0; i<this.stackB.length;i++){
            this.stackA.push(this.stackB.pop())
        }
        this.stackA.push(value)
    }
    dequeue(){
        while(this.stackA.length > 0){
            this.stackB.push(stackA.pop())
        }
        return this.stackB.pop();
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
        console.log(node)
        node = node.next
    }
   
}

const display2 = (queue)=>{
    console.log(JSON.stringify(queue.stackA,null,4))
}

display(starTreckQ)

// remove spock
starTreckQ.dequeue()
starTreckQ.dequeue()
starTreckQ.enqueue("Kirk")


display(starTreckQ)

let starTrek1 = new Stack();
let arrayOfNames = ['Kirk', 'Spock', 'McCoy', 'Scotty']
arrayOfNames.forEach((name)=>{
    starTrek1.push(name);
});

let starTrek2 = new Stack();
arrayOfNames.forEach((name)=>{
    starTrek2.push(name);
});

let starQueue = new Queue2()
const newQueue = (stackA,stackB) =>{
    starQueue.enqueue(stackA)
    starQueue.enqueue(stackB)

}
newQueue(starTrek1,starTrek2)
display2(starQueue)
console.log(starQueue)






