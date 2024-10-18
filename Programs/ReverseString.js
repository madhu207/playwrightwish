function ReverseString(str) {

    let reversestring = ""

    console.log(str.length);
    for (let i = str.length - 1; i >= 0; i--) {

        reversestring = reversestring + str[i];


    }

    console.log(reversestring)

}

ReverseString("Madhu")