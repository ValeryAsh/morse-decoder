const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const SPACE = '**********'
    let arr = [];
    for(let i = 0; expr.length > i; i += 10){
        arr.push(expr.slice( i , i + 10 ).replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, ''));
    }
    let text = arr.map(item =>{
        for(let p in MORSE_TABLE){
            if(item === SPACE){
                return ' '
            }
            if(item === p){
                return MORSE_TABLE[p]
            }
        }
    })
    return text.join('')
}

module.exports = {
    decode
}
