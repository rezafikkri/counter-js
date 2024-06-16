import { describe, expect, test } from 'vitest';
import { setupCounter, setupMultiple } from './counter';

describe('Counter tests', () => {
  test('Should return corrently multiple (odd & >= 1 <= 5)', () => {
    let multiple = 1;
    multiple = setupMultiple(multiple);
    expect(multiple).toEqual(3);

    multiple = setupMultiple(multiple);
    expect(multiple).toEqual(5);

    multiple = setupMultiple(multiple);
    expect(multiple).toEqual(1);
  });

  test('Should return corrently count', () => {
    let count = 0;
    count = setupCounter(count, 1);
    expect(count).toEqual(1);

    count = setupCounter(count, 3);
    expect(count).toEqual(4);

    count = setupCounter(count, 5);
    expect(count).toEqual(9);
  });
});
