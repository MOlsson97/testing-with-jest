const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('push on stack adds the element on top', () => {
    stack.push(1);
    stack.push(42);
    expect(stack.peek()).toBe(42);
})

test('pop on stack removes the top element', () => {
    stack.push(1);
    stack.push(42);
    stack.pop();
    expect(stack.peek()).toBe(1);
})