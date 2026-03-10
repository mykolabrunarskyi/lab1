class Stack {
    constructor() {
        this.items = [];
        this.history = []; 
    }

    push(element) {
        this.items.push(element);
        this.history.push(`Push: ${element}`); 
    }

    pop() {
        if (this.isEmpty()) throw new Error("Stack empty");
        const item = this.items.pop();
        this.history.push(`Pop: ${item}`); 
        return item;
    }

    isEmpty() {
        return this.items.length === 0;
    }

}
const myStack = new Stack();
myStack.push(1);
console.log("Базовий стек створено");