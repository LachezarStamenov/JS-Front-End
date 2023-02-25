function stringCounter(text, serchedWord){
    let words = text.split(' ');
    let counter = 0;

    for (let word of words){
        if (word === serchedWord){
            counter += 1;
        }
    }
    console.log(counter)
}

stringCounter('This is a word and it also is a sentence',
'is'
)