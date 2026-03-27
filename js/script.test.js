import { describe, it, expect, beforeEach } from 'vitest';
import { Stack } from './script.js';

describe('Тестування класу Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('1. Має створюватися порожній стек', () => {
        expect(stack.isEmpty()).toBe(true);
    });

    it('2. Метод push() має додавати елементи у стек', () => {
        stack.push(10);
        stack.push(20);
        expect(stack.isEmpty()).toBe(false);
        expect(stack.items.length).toBe(2);
    });

    it('3. Метод pop() має видаляти та повертати верхній елемент', () => {
        stack.push('A');
        stack.push('B');
        const poppedItem = stack.pop();
        expect(poppedItem).toBe('B');
        expect(stack.items.length).toBe(1);
    });

    it('4. Метод pop() має викидати помилку, якщо стек порожній', () => {
        expect(() => stack.pop()).toThrowError('Stack empty');
    });

    it('5. Метод peek() має повертати верхній елемент без його видалення', () => {
        stack.push(100);
        const peekedItem = stack.peek();
        expect(peekedItem).toBe(100);
        expect(stack.items.length).toBe(1); // Довжина не змінилася
    });

    it('6. Метод clear() має повністю очищати стек', () => {
        stack.push(1);
        stack.push(2);
        stack.clear();
        expect(stack.isEmpty()).toBe(true);
    });

    it('7. Метод getHistory() має повертати історію операцій', () => {
        stack.push(5);
        const history = stack.getHistory();
        expect(history).toContain('Push: 5');
        expect(history.length).toBe(1);
    });
});