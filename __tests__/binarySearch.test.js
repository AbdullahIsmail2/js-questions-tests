// Implement a function that performs binary search on an array of numbers. The function should take in a sorted array of integers and a target integer to find. It returns the index of the target element or -1, if the target element doesn't exist in the array.

import binarySearch from './binarySearch'

describe('binarySearch', () => {
  test('empty', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  test('one element', () => {
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1], 2)).toBe(-1);
  });

  test('two elements', () => {
    expect(binarySearch([1, 4], 1)).toBe(0);
    expect(binarySearch([1, 4], 4)).toBe(1);
    expect(binarySearch([1, 4], 5)).toBe(-1);
  });

  test('more than two elements', () => {
    expect(binarySearch([1, 2, 3, 10, 11, 20], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 10)).toBe(3);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 9)).toBe(-1);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 4)).toBe(-1);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 0)).toBe(-1);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 21)).toBe(-1);
  });

  test('boundary values', () => {
    expect(binarySearch([1, 2, 3, 10, 11, 20], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 20)).toBe(5);
  });
});