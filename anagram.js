 // Implement Javascript once page fully loads.
window.onload = function() {

    function GetText() {
        var word1, word2;

        // Get text from input.
        // Reduce all letters to lowercase.
        // Remove all spaces from the text.
        word1 = document.getElementById("word1").value.toLowerCase().replace(/\s+/g, '');
        word2 = document.getElementById("word2").value.toLowerCase().replace(/\s+/g, '');

        AnagramCheck(word1, word2);
        
    }

    function AnagramCheck(word1, word2) {
        // Check if inputs are the same length in characters.
        // If so, continue with anagram check.
        // Otherwise, the inputs are not anagrams.
        if ( CheckLength(word1, word2) ) {

            // Check if same letters are in each word.
            // If so, the two words are anagrams.
            // Otherwise, the inputs are not anagrams.
            if ( CheckLetters(word1, word2) ) {
                SendMessage('Anagrams!');
            } else {
                SendMessage('Not anagrams!');
            }

        } else {
            SendMessage('Not anagrams!');
        }
    }

    function CheckLetters(word1, word2) {
        var word1Letters, word2Letters, result;

        // Split both words into sorted arrays of individual characters.
        word1Letters = word1.split("").sort();
        word2Letters = word2.split("").sort();
        result = true;

        // Iterate over the two arrays to check for same letters.
        word1Letters.forEach(function(letter, i) {
            if (letter != word2Letters[i]) {
                result = false;
            }
        });

        return result;
    }

    function CheckLength(word1, word2) {
        // Are the two words the same length?
        return word1.length === word2.length;
    }

    function SendMessage(message) {
        var messageBox = document.getElementById('result');
        messageBox.innerHTML = message;
    }

    // Add event listener to the button.
    var button = document.getElementById("button");
    button.addEventListener("click", GetText, false);

}