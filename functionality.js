function capitalize(string) {
    //splits string into an array
    const chars = string.split('');
    //capitalizes first letter of array and returns it
    let capitalizedFirstChar = chars[0].toUpperCase();
    
    return capitalizedFirstChar + string.slice(1);
}

function reverseString(string) {
    //throws error if not given a string
    if (typeof string !== 'string') {
        throw new Error('Input must be a string');
    }
    //splits string, reverses it, then rejoins it
    return string.split('').reverse().join('');
}

function Calculator() {
    //calculator function factory that has four simple function methods
    //initialize this by using const calculator = Calculator(), then you can use calculator.add
    //calculator.subtract, etc.
    return {
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
        multiply: (x, y) => x * y,
        divide: (x, y) => {
            if(y === 0) {
                throw new Error('Cannot divide by zero.')
            }

            return x / y
        }
    };
}

function caesarCipher(string, shift) {
    //blank string for encrypted message
    let encryptedMessage = ''
    
    for(let i = 0; i < string.length; i++) {
        //gets the ASCII value of every character of the string
        let charCode = string[i].charCodeAt(0);

        //if the ASCII value is an upper case letter, it falls in these bounds
        if(charCode >= 65 && charCode <= 90) {
            let newCode = charCode + shift;
            
            //if the shifted value brings it above or below these bounds, we need to wrap it to the other side
            if(newCode > 90) {
                newCode -= 26;
            } else if (newCode < 65) {
                newCode += 26
            }
            //add encrypted value to the message
            encryptedMessage += String.fromCharCode(newCode);
        } 
        
        //if ASCII value falls in these bounds it is a lower case letter
        else if (charCode >= 97 && charCode <= 122) {
            let newCode = charCode + shift;

            //if shifted value falls out of these bounds, we need to wrap it to the other side
            if(newCode > 122) {
                newCode -= 26;
            } else if(newCode < 97) {
                newCode += 26;
            }

            encryptedMessage += String.fromCharCode(newCode);
        } 
        
        //if the ASCII value wasn't caught in the first two if statements, it is a non letter value
        //and it will be passed through untouched
        else {
            encryptedMessage += string[i];
        }
    }
    return encryptedMessage;
}

function analyzeArray(array) {
    //handles being fed an empty array
    if(array.length === 0) {
        return {
            average: null,
            min: null,
            max: null,
            length: 0
        }
    }

    //reduce function to iterate over every value in array, keeping track of three variables
    const { sum, min, max} = array.reduce(
        (accumulator, currentValue) => {
            //add currentvalue to the sum section of our accumulator
            accumulator.sum += currentValue;
            //compare current value to the min section of our accumulator, if it is bigger, then we reassign our
            //min to the current value
            if(accumulator.min > currentValue) {
                accumulator.min = currentValue;
            }
            //compare current value to the max section of our accumulator, if it is smaller, then we reassign our
            //max to be the current value
            if(accumulator.max < currentValue) {
                accumulator.max = currentValue;
            }
            //this returns the accumulator we've been developing over the course of the array
            return accumulator;
        },
        //the initial values we set for our accumulator, any number would be smaller than our min, and bigger than
        //our max. We also set sum to start at zero.
        { sum: 0, min: Infinity, max: -Infinity }
    )
    //simple function for finding average, we take the sum from the reduce function and divide it by the total
    //number of numbers in the array
    let average = sum / array.length;

    //return an object with all of the variables we just created
    return {
        average: average,
        min: min,
        max: max,
        //length is the most simple, we just use a built in array method for that
        length: array.length
    }
    
}

module.exports = { capitalize, reverseString, Calculator, caesarCipher, analyzeArray }