# NpmMorsecode

## What is this package

`npmMorsecode` is a JavaScript library that allows you to convert text to Morse code and vice versa. It is useful for anyone who wants to integrate Morse encoding and decoding functionality into their applications.

## Installation

To install `npmMorsecode`, run the following command:

```bash
npm install npmMorsecode
```

## Usage Example
Here is an example of how to use `npmMorsecode` to convert text to Morse code and vice versa:

```javascript
import { textToMorse } from 'morseconverter';
import { morseToText } from 'morseconverter';

const text = "Hello World";

const texttranslated = morseToText('.... . .-.. .-.. ---  .-- --- .-. .-.. -..');
const morseCode = textToMorse(text);
console.log(morseCode);
console.log(texttranslated);
```

## Functions

### `textToMorse`

This function takes a string of text as input and returns the Morse code equivalent.

- **Parameters**: `text` (string) - The text to be converted to Morse code.
- **Returns**: (string) - The text converted to Morse code.

### `morseToText`

This function takes a string of Morse code as input and returns the decoded text.

- **Parameters**: `morse` (string) - The Morse code to be converted to text.
- **Returns**: (string) - The Morse code converted to text.
