function repeat(word, nom) {
    var rword = word;
    for (var i = 1; i < nom; i++) {
        word += rword;
    }
    return (word);
}
console.log(repeat("ff?", 4));