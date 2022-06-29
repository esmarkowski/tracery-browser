# Tracery

Tracery: A story-grammar generation library for javascript
## Installation

This is hosted at npm, so it can be installed like so:

```bash
$ npm install tracery-browser https://github.com/esmarkowski/tracery-browser.git
npm installation...
```

## Example usage

```javascript
const tracery = require('tracery-es8');

const grammar = tracery.createGrammar({
    animal: ['panda', 'fox', 'capybara', 'iguana'],
    emotion: ['sad', 'happy', 'angry', 'jealous'],
    origin: ['I am #emotion.a# #animal#.']
});

grammar.addModifiers(tracery.baseEngModifiers);

console.log(grammar.flatten('#origin#'));
```

Sample output:

```plaintext
I am a happy iguana.
I am an angry fox.
I am a sad capybara.
```
# tracery-browser
