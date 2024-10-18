function Anagram(word, wordlist){

    
    // Clean and sort the input word
    const sortedWord = word.replace(/\s+/g, '').toLowerCase().split('').sort().join('')

    const anagrams = [];

     // Loop through each word in the wordlist

     for (let i = 0; i < wordlist.length; i++) {
        const currentWord = wordlist[i].replace(/\s+/g, '').toLowerCase().split('').sort().join('');
       // const sortedCurrentWord = currentWord.split('').sort().join('');

        // Check if sorted versions are equal
        if (currentWord === sortedWord) {
            anagrams.push(wordlist[i]); // Add to anagram list
        }
    }

    return anagrams;
}
const wordList = ["listen", "enlist", "google", "triangle", "integral", "apple", "silent",];
const result = Anagram("enlist", wordList);
console.log(result); // Output: ["silent", "enlist"]