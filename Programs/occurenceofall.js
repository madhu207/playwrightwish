function countCharacters(str) {
    const count = {}; // Initialize an empty object to hold the counts

    // Loop through each character in the string
    for (let char of str) {
        // If the character is already in the count object, increment its count
        if (count[char]) {
            count[char]++;
        } else {
            // If it's not in the object, add it with a count of 1
            count[char] = 1;
        }
    }

    return count; // Return the final counts
}

// const string = "hello";
// const occurrences = countCharacters(string);
// console.log(occurrences);

console.log(countCharacters("hello world"));