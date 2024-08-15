// Implement a queue data structure in JavaScript that contains the following operations:

// new Queue(): Creates an instance of a Queue class that doesn't contain any items. The constructor does not accept any arguments.
// enqueue(): Adds an item to the back of the queue. Required time complexity: O(1).
// dequeue(): Removes an item from the front of the queue. Required time complexity: O(1).
// isEmpty(): Determines if the queue is empty. Required time complexity: O(1).
// front(): Returns the item at the front of the queue without removing it from the queue. Required time complexity: O(1).
// back(): Returns the item at the back of the queue without removing it from the queue. Required time complexity: O(1).
// length(): Returns the number of items in the queue. Required time complexity: O(1).

import Queue from './queue';

describe('Queue', () => {
  test('constructor', () => {
    const q = new Queue();
    expect(q instanceof Queue);
  });

  test('enqueue()', () => {
    const q = new Queue();
    expect(q.enqueue(100)).toBe(1);
    expect(q.enqueue(200)).toBe(2);
  });

  test('dequeue()', () => {
    const q = new Queue();
    q.enqueue(100);
    q.enqueue(200);
    expect(q.dequeue()).toBe(100);
    expect(q.length()).toBe(1);
    expect(q.dequeue()).toBe(200);
    expect(q.length()).toBe(0);
    expect(q.dequeue()).toBe(undefined);
  });

  test('isEmpty()', () => {
    const q = new Queue();
    expect(q.isEmpty()).toBeTruthy();
    q.enqueue(100);
    expect(q.isEmpty()).toBeFalsy();
    q.dequeue();
    expect(q.isEmpty()).toBeTruthy();
  });

  test('length()', () => {
    const q = new Queue();
    q.enqueue(100);
    expect(q.length()).toBe(1);
    q.enqueue(200);
    expect(q.length()).toBe(2);
    q.dequeue();
    expect(q.length()).toBe(1);
    q.enqueue(300);
    expect(q.length()).toBe(2);
  });

  test('front()', () => {
    const q = new Queue();
    q.enqueue(100);
    expect(q.front()).toBe(100);
    q.enqueue(200);
    expect(q.front()).toBe(100);
    q.dequeue();
    expect(q.front()).toBe(200);
    q.enqueue(300);
    expect(q.front()).toBe(200);
    q.dequeue();
    q.dequeue();
    expect(q.front()).toBe(undefined);
  });

  test('back()', () => {
    const q = new Queue();
    q.enqueue(100);
    expect(q.back()).toBe(100);
    q.enqueue(200);
    expect(q.back()).toBe(200);
    q.dequeue();
    expect(q.back()).toBe(200);
    q.enqueue(300);
    expect(q.back()).toBe(300);
    q.dequeue();
    q.dequeue();
    expect(q.back()).toBe(undefined);
  });

  test('integration', () => {
    const q = new Queue();
    q.enqueue(100);
    expect(q.length()).toBe(1);
    expect(q.dequeue()).toBe(100);
    expect(q.length()).toBe(0);
    q.enqueue(200);
    expect(q.length()).toBe(1);
    expect(q.dequeue()).toBe(200);
  });
});