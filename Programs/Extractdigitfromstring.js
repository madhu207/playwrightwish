// function extractDigits(inputString) {
//     let digits = ''; // Initialize an empty string to hold the extracted digits

//     // Loop through each character in the input string
//     for (let i = 0; i < inputString.length; i++) {
//         const char = inputString[i]; // Get the current character

//         // Check if the current character is a digit
//         if (char >= '0' && char <= '9') {
//             digits += char; // Append the digit to the digits string
//         }
//     }

//     return digits; // Return the final string of digits
// }

// extractDigits("abcd223");

function extractDigits(str) {
    const digits = str.replace(/[^0-9]/g, '');
    return digits;
  }
  
  const string = "abcd223";
  const extractedDigits = extractDigits(string);
  console.log(extractedDigits); // Output: 223

  /////////////////////

  function extractDigits(str) {
    //str = abcd223
    let digits = ""; // Initialize an empty string to hold the extracted digits
    
    // Loop through each character in the input string
    for (let i = 0; i < str.length; i++) {
      // Check if the current character is a digit
      if (!isNaN(parseInt(str[i]))) {
        digits += str[i]; // Append the digit to the digits string
      }
    }
    
    return digits; // Return the final string of digits
  }