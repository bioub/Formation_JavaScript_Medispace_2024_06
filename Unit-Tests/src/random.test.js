import { expect, test } from "vitest";
import { getRandomInt } from "./random";

test('BAD getRandomInt should return a number between 0 and 10 (excluded)', () => {
  const result = getRandomInt(0, 10);
  expect(result).toBeGreaterThanOrEqual(0);
  expect(result).toBeLessThan(10);
})

test('getRandomInt should return a number between 0 and 10 (excluded)', () => {
  const originalRandom = Math.random;
  Math.random = function() {
    return 0;
  };
  expect(getRandomInt(0, 10)).toBe(0);
  Math.random = originalRandom;
})

test('getRandomInt should return a number between 0 and 10 (excluded)', () => {
  const originalRandom = Math.random;
  Math.random = function() {
    return 0.99999999;
  };
  expect(getRandomInt(0, 10)).toBe(9);
  Math.random = originalRandom;
})
