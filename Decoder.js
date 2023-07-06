function rot13(str) {
    let alpB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str.split('').map(char => {  
        const pos = alpB.indexOf(char);      
        return pos >= 0 ? alpB[(pos + 13) % 26] : char;
      }).join('');
}

console.log(rot13("SERR PBQR PNZC"));