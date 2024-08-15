// Implement a stack data structure in JavaScript that contains the following operations:

// new Stack(): Creates an instance of a Stack class that doesn't contain any items. The constructor does not accept any arguments.
// push(): Pushes an item onto the top of the stack and returns the new length of the stack. Required time complexity: O(1).
// pop(): Removes an item at the top of the stack and returns that item. Required time complexity: O(1).
// isEmpty(): Determines if the stack is empty. Required time complexity: O(1).
// peek(): Returns the item at the top of the stack without removing it from the stack. Required time complexity: O(1).
// length(): Returns the number of items in the stack. Required time complexity: O(1).

import Stack from './stack'
describe('Stack', () => {
  test('constructor', () => {
    const s = new Stack();
    expect(s instanceof Stack);
  });

  test('push()', () => {
    const s = new Stack();
    expect(s.push(100)).toBe(1);
    expect(s.length()).toBe(1);
    expect(s.push(200)).toBe(2);
    expect(s.length()).toBe(2);
  });

  test('pop()', () => {
    const s = new Stack();
    s.push(100);
    expect(s.length()).toBe(1);
    expect(s.pop()).toBe(100);
    expect(s.length()).toBe(0);
    expect(s.pop()).toBe(undefined);
  });

  test('isEmpty()', () => {
    const s = new Stack();
    expect(s.isEmpty()).toBeTruthy();
    s.push(100);
    expect(s.isEmpty()).toBeFalsy();
    s.pop();
    expect(s.isEmpty()).toBeTruthy();
  });

  test('length()', () => {
    const s = new Stack();
    expect(s.length()).toBe(0);
    s.push(100);
    expect(s.length()).toBe(1);
    s.push(200);
    expect(s.length()).toBe(2);
    s.pop();
    expect(s.length()).toBe(1);
    s.push(300);
    expect(s.length()).toBe(2);
  });

  test('peek()', () => {
    const s = new Stack();
    expect(s.peek()).toBe(undefined);
    s.push(100);
    expect(s.peek()).toBe(100);
    s.push(200);
    expect(s.peek()).toBe(200);
    s.pop();
    expect(s.peek()).toBe(100);
    s.push(300);
    expect(s.peek()).toBe(300);
    s.pop();
    s.pop();
    expect(s.peek()).toBe(undefined);
  });
});