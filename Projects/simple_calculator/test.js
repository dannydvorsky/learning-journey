function test(description, expression, expected) {
    const result = parseAndEvaluate(expression);
    const passed = result === expected;
    console.log(`${passed ? '✅' : '❌'} ${description}: ${expression} = ${result} (expected: ${expected})`);
  }
  
  // Test cases
  test('Addition', '2+3', 5);
  test('Subtraction', '10 - 4', 6);
  test('Multiplication', '5 * 6', 30);
  test('Division', '20 / 5', 4);
  test('Order of operations', '2 + 3 * 4', 14);
  test('Decimal support', '2.5 + 2.5', 5);
  test('Complex chain', '2 + 2 * 3 - 4 / 2', 6);