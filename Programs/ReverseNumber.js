function ReverseNumber(num) {

  const number = num.toString()

    let reversenum = ""

    
    for (let i = number.length - 1; i >= 0; i--) {

        reversenum = reversenum + number[i];


    }
       // Convert the reversed string back to a number
       const reversedNumber = Number(reversenum);

    console.log(reversedNumber)

}

ReverseNumber(123456);
//////////////////////////
