function textToMorse(text) {
    var morseCode = '';
    for (var i = 0; i < text.length; i++) {
        var character = text.charAt(i);
        if (character === ' ') {
            morseCode += ' ';
        } else {
            morseCode += morseCodeMap[character.toUpperCase()] + ' ';
        }
    }
    return morseCode;
}

function morseToText(morseCode) {
    var text = '';
    var morseCodeWords = morseCode.split(' ');
    console.log(morseCodeWords);
    for (var i = 0; i < morseCodeWords.length; i++) {
        var morseCodeWord = morseCodeWords[i];
        console.log(morseCodeWord);
        if (morseCodeWord === '') {
            text += ' ';
        } else {
            var character = '';
            for (var key in morseCodeMap) {
                //console.log(key);
                if (morseCodeMap[key] === morseCodeWord) {
                    character += key;
                    break;
                }
            }

            text += character;
        }
    }
    return text;
}


var morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-',
    'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-',
    'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ', ': '--..--', '.': '.-.-.-', '?': '..--..', '/': '-..-.', '-': '-....-', '(': '-.--.', ')': '-.--.-'
};

module.exports = {
    textToMorse: textToMorse,
    morseToText: morseToText
};