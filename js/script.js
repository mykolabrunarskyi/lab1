console.log("Ламаємо пайплайн для звіту!");

class Stack {
    constructor() {
        this.items = [];
        this.history = [];
    }

    push(element) {
        this.items.push(element);
        this.history.push(`Push: ${element}`);
        if (this.history.length > 10) {
            this.history.shift();
        }
    }

    pop() {
        if (this.isEmpty()) throw new Error('Stack empty');
        const item = this.items.pop();
        this.history.push(`Pop: ${item}`);
        if (this.history.length > 10) {
            this.history.shift();
        }
        return item;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    // --- ДОДАНІ МЕТОДИ ДЛЯ ТЕСТІВ ---
    peek() {
        if (this.isEmpty()) throw new Error('Stack is empty: cannot peek');
        return this.items[this.items.length - 1];
    }

    clear() {
        this.items = [];
    }
    // --------------------------------

    getHistory() {
        return [...this.history];
    }
}

const myStack = new Stack();
myStack.push(1);
console.log('Базовий стек створено');
const statusElement = document.getElementById('app-status');
if (statusElement) {
    statusElement.innerText = import.meta.env.VITE_APP_STATUS;
}

export { Stack };