function mostFrequentStringLength(arr) {
    const lengthFrequency = {}; //Một đối tượng để lưu trữ tần suất của mỗi độ dài chuỗi.
    let maxFrequency = 0; // Một biến để lưu trữ tần suất cao nhất tìm được.
    let maxLength = 0; //Một biến để lưu trữ độ dài của các chuỗi xuất hiện nhiều nhất.
    let result = []; // Một mảng để lưu trữ kết quả cuối cùng là các chuỗi có độ dài xuất hiện nhiều nhất

    arr.forEach(str => {
        const len = str.length;
        if (!lengthFrequency[len]) {
            lengthFrequency[len] = 0;
        }
        lengthFrequency[len]++;
        if (lengthFrequency[len] > maxFrequency) {
            maxFrequency = lengthFrequency[len]
            maxLength = len;
        }
    })
    result = arr.filter(str => str.length === maxLength)
    return result;
}

// console.log(mostFrequentStringLength(['a', 'ab', 'abc', 'cd', 'def', 'gh']));
// console.log(mostFrequentStringLength(['a', 'ab', 'abc', 'abcd', 'abcde']));
// console.log(mostFrequentStringLength(['abc', 'abcd', 'abcdef', 'abcdefg']));

// Unit test function
function testMostFrequentStringLength() {
    const testCases = [
        { input: ['a', 'ab', 'abc', 'cd', 'def', 'gh'], expected: ['ab', 'cd', 'gh'] },
        { input: ['a', 'ab', 'abc', 'abcd', 'abcde'], expected: ['a'] },
        { input: ['abc', 'abcd', 'abcdef', 'abcdefg', 'abcdefgh'], expected: ['abc', 'abcd', 'abcdef', 'abcdefg', 'abcdefgh'] },
        { input: ['a', 'b', 'c', 'd', 'e', 'f', 'g'], expected: ['a', 'b', 'c', 'd', 'e', 'f', 'g'] },
    ];

    testCases.forEach((testCase, index) => {
        const result = mostFrequentStringLength(testCase.input);
        const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
        console.log(`Test case ${index + 1}: ${passed ? 'PASSED' : 'FAILED'}`);
    });
}

testMostFrequentStringLength();
