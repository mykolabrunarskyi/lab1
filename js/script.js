class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty: cannot peek");
        }
        return this.items[this.items.length - 1];
    }
    
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty: cannot pop");
        }
        return this.items.pop();
    }

    clear() {
        this.items = [];
    }
}

const myStack = new Stack();
myStack.push(1);
console.log("Базовий стек створено та очищено від коментарів");