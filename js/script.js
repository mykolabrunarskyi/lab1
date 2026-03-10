class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    peek() {
        if (this.items.length === 0) return "Стек порожній";
        return this.items[this.items.length - 1];
    }

    pop() {
        if (this.isEmpty()) return "Стек порожній";
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const myStack = new Stack();
myStack.push(1);
console.log("Базовий стек створено");