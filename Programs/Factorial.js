function fact(number){


    if (number < 0) return "Factorial is not defined for negative numbers"; // Handle negative input
    let result = 1; // Initialize result

    for(let i=2;i<=number;i++){

       result = result*i; 
    }

    return result;

}

const number =5;
console.log(fact(number));