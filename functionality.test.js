const { capitalize, reverseString, Calculator, caesarCipher, analyzeArray} = require('./functionality');

//shows that testing is working
it('works', () => {
    
});

//capitalize function tests
it('Capitalizes', () => {
    expect(capitalize('hey folks')).toBe('Hey folks')
});

it('Capitalizes with punctuation', () => {
    expect(capitalize('howdy fellas!')).toBe('Howdy fellas!')
})

//reverse string function tests
it('Reverses a string', () => {
    expect(reverseString('banana')).toBe('ananab');
})

it('Reverses a string with punctuation in it', () => {
    expect(reverseString("Who's there?")).toBe("?ereht s'ohW");
})

it('Throws error when fed an empty string', () => {
    expect(() => reverseString()).toThrow('Input must be a string');
})

//Calculator object tests
const calculator = Calculator();

it('Adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
})

it('Adds with negative numbers', () => {
    expect(calculator.add(-2, 3)).toBe(1);
})

it('Subtracts two numbers', () => {
    expect(calculator.subtract(9, 6)).toBe(3)
})

it('Subtracts with negative numbers', () => {
    expect(calculator.subtract(9, -6)).toBe(15)
})

it('Multiplies two numbers', () => {
    expect(calculator.multiply(4, 6)).toBe(24)
})

it('Multiplies with negative numbers', () => {
    expect(calculator.multiply(3, -6)).toBe(-18)
})

it('Divides two numbers', () => {
    expect(calculator.divide(49, 7)).toBe(7)
})

it('Throws error when you try and divide by zero', () => {
    expect(() => calculator.divide(54, 0)).toThrow('Cannot divide by zero.');
})

//testing for caesarCipher functionality
it('Encrypts hello', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
})

it('Wraps from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

it('Preserves the case of the letter', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})

it('Handles punctuation', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

it('Handles other shift numbers', () => {
    expect(caesarCipher('Daniel', 1)).toBe('Ebojfm');
})

//testing analyzeArray functionality
it('Returns object with average', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     });
})

it('Works with negative numbers', () => {
    expect(analyzeArray([10, -5, 3, 8, 7])).toEqual({ 
        average: 4.6,  
        min: -5, 
        max: 10, 
        length: 5 })
})

it('Handles an empty array', () => {
    expect(analyzeArray([])).toEqual({
        average: null,
        min: null,
        max: null,
        length: 0
    })
})