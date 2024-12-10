function sumOfTopTwoIntegers(arr) {
    if (arr.length < 2) {
        throw new Error('Array must contain at least two integers');
    }
    const newSortArr = arr.sort((a,b) => a - b)
    return newSortArr[newSortArr.length - 1] + newSortArr[newSortArr.length - 2];
}

// Test cases
console.log(sumOfTopTwoIntegers([1, 4, 2, 3, 5])); 
console.log(sumOfTopTwoIntegers([10, 20, 30, 40, 50]));
console.log(sumOfTopTwoIntegers([100, 200, 300])); 

// Unit test function
function testSumOfTopTwoIntegers() {
    const testCases = [
        { input: [1, 4, 2, 3, 5], expected: 9 },
        { input: [10, 20, 30, 40, 50], expected: 90 },
        { input: [100, 200, 300], expected: 500 },
        { input: [5, 1, 5, 1], expected: 10 },
        { input: [-1, -2, -3, -4, -5], expected: -3 },
    ];

    testCases.forEach((testCase, index) => {
        const result = sumOfTopTwoIntegers(testCase.input);
        const passed = result === testCase.expected;
        console.log(`Test case ${index + 1}: ${passed ? 'PASSED' : 'FAILED'}`);
    });
}

testSumOfTopTwoIntegers();
