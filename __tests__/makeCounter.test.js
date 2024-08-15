// Implement a function makeCounter that accepts an optional integer value and returns a function. When the returned function is called initially, it returns the initial value if provided, otherwise 0. The returned function can be called repeatedly to return 1 more than the return value of the previous invocation.


import makeCounter from './make-counter';
describe('makeCounter', () => {
  test('returns a function', () => {
    const counter = makeCounter();
    expect(counter).toBeInstanceOf(Function);
  });

  describe('calling the function', () => {
    describe('returns initial value', () => {
      test('default', () => {
        const counter = makeCounter();
        expect(counter()).toBe(0);
      });

      test('custom', () => {
        const counter = makeCounter(4);
        expect(counter()).toBe(4);
      });
    });

    describe('can be repeatedly called', () => {
      test('default', () => {
        const counter = makeCounter();
        expect(counter()).toBe(0);
        expect(counter()).toBe(1);
        expect(counter()).toBe(2);
      });

      test('positive', () => {
        const counter = makeCounter(4);
        expect(counter()).toBe(4);
        expect(counter()).toBe(5);
        expect(counter()).toBe(6);
      });

      test('negative', () => {
        const counter = makeCounter(-4);
        expect(counter()).toBe(-4);
        expect(counter()).toBe(-3);
        expect(counter()).toBe(-2);
      });
    });

    test('isolated instances', () => {
      const counterA = makeCounter(5);
      const counterB = makeCounter(10);

      expect(counterA()).toBe(5);
      expect(counterB()).toBe(10);

      expect(counterA()).toBe(6);
      expect(counterB()).toBe(11);
    });
  });
});