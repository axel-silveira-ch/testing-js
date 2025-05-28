function subtract(a, b) {
  return a - b; // Implementación básica de resta
}

function isEven(n) {
  return n % 2 === 0; // Verifica si el número es par
}

function max(values) {
  if (values.length === 0) return null; // Caso para array vacío
  return Math.max(...values); // Usa el operador spread para encontrar el máximo
}

module.exports = {
  subtract,
  isEven,
  max
};
