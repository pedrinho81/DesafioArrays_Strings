function verificaPalindromo(string) {
    if(!string) return "string inexistente"

    return console.log(string.split("").reverse().join("") === string)
}

verificaPalindromo("ovo")


//

function verificaPalindromo2(string) {
    if(!string) return "string inexistente";

    for (let i=0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return console.log(false)
        }
    }
    return console.log(true)
}

verificaPalindromo2("abba")