const { subtract, isEven, max } = require('./math-helpers.js');

// ---- PRUEBAS PARA RESTA ----
test("Subtract 10 - 3 should be 7", () => {
  expect(subtract(10, 3)).toBe(7);
});

test("Subtract 3 - 10 should be -7", () => {
  expect(subtract(3, 10)).toBe(-7);
});

// ---- PRUEBAS PARA PAR/IMPAR ----
test("10 is even", () => {
  expect(isEven(10)).toBe(true);
});

test("3 is not even", () => {
  expect(isEven(3)).toBe(false);
});

test("0 is even", () => {
  expect(isEven(0)).toBe(true);
});

// ---- PRUEBAS PARA MÁXIMO ----
test("Max of [4, 8, 1] should be 8", () => {
  expect(max([4, 8, 1])).toBe(8);
});

test("Max of [] should be null", () => {
  expect(max([])).toBeNull();
});
