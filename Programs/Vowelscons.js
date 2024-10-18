function Vowelscons(str) {

    const vowles = []
    const cons = []

    for (let i = 0; i < str.length; i++) {

        const char = str[i].toLowerCase(); // Convert character to lowercase

        if(/[aeiou]/g.test(char)){

            vowles.push(char)

        }
        
        if(/[bcdfghjklmnpqrstvwxyz]/g.test(char)){
            cons.push(char); 
        }


    }
    return {vowles, cons };

}

const str = "Hello, world!";
const result = Vowelscons(str);
//console.log("Vowels:", result.vowles.join(", ")); // Output the vowels
console.log(result);