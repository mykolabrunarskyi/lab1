class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) return "Стек порожній";
        return this.items.pop();
    }
}

const myStack = new Stack();
myStack.push(1);
console.log("Базовий стек створено");