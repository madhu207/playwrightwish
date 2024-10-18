function isprime(number) {

    if (number <= 1) return false;

    for (let i = 2; i < number; i++) {

        if (number % i == 0) return false
    } return true;
}

function printprimes() {

    for (let i = 1; i <= 50; i++) {
        if (isprime(i)) {
            console.log(i);
        }
    }
}

printprimes();