const {
  addNumbers,
  assignValue,
  isEqualValue,
  isStrictEqual,
  makeStringTemplate,
  primitiveValues,
  createPerson,
  createFruits,
  demonstrateUndefined,
} = require('../exercises');

describe('Week 1 Exercises', () => {
  test('Arithmetic Operator: addNumbers', () => {
    expect(addNumbers(10, 20)).toBe(30);
  });

  test('Assignment Operator: assignValue', () => {
    expect(assignValue(10, 20)).toBe(20);
  });

  test('Comparison Operator == : isEqualValue', () => {
    expect(isEqualValue(10, 20)).toBe(false);
    expect(isEqualValue('23', 23)).toBe(true);
  });

  test('Comparison Operator === : isStrictEqual', () => {
    expect(isStrictEqual(23, 23)).toBe(true);
    expect(isStrictEqual('23', 23)).toBe(false);
  });

  test('String template: makeStringTemplate', () => {
    expect(makeStringTemplate('John', 20, true)).toBe('Name: John, Age: 20, Is Student: true');
  });

  test('Primitive data types: primitiveValues', () => {
    const values = primitiveValues();
    expect(typeof values.number).toBe('number');
    expect(typeof values.string).toBe('string');
    expect(typeof values.boolean).toBe('boolean');
    expect(values.nullVal).toBeNull();
    expect(values).toHaveProperty('undefinedVal');
    expect(values.undefinedVal).toBeUndefined();
  });

  test('Object: createPerson has properties and eat method', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const person = createPerson('John Doe', 20, true);
    expect(person).toMatchObject({ name: 'John Doe', age: 20, isStudent: true });
    expect(typeof person.eat).toBe('function');
    person.eat();
    expect(logSpy).toHaveBeenCalledWith('I am eating');
    logSpy.mockRestore();
  });

  test('Array: createFruits', () => {
    const fruits = createFruits();
    expect(Array.isArray(fruits)).toBe(true);
    expect(fruits).toEqual(['apple', 'banana', 'cherry']);
  });

  test('Undefined example: demonstrateUndefined', () => {
    const { W, y } = demonstrateUndefined();
    expect(W).toBeUndefined();
    expect(y).toBeUndefined();
  });
});
