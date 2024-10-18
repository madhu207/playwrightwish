function palindrome(word){

//madam

let name = "";

for(let i= word.length-1;i>=0;i--){

    name = name + word[i]
}

if(word === name){

    return "It is palindrome"
}else{
    return "not"
}

}

const word = "madam"
console.log(palindrome(word))