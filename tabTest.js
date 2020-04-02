function sumTest(){

    console.log( sum([]) ); // => 0
    console.log( sum([ 42 , 404 , 1337 ]) ); // => 1783

}

function longestTest(){
    console.log( longestWord(["lot", "of", "words", "of", "different", "sizes"]) ); // 

}

function rangeTest(){

    console.log(range(3, 8, 1) ); // => [3, 4, 5, 6, 7, 8]
    console.log(range(40, 90, 20) ); // => [40, 60, 80]

}

function occurencesTest(){

    let text = "bar qux baz foo bar foo qux foo";
console.log(nbOccurences(text, "foo")); // => 3
console.log(nbOccurences(text, "quux")); // => 0
console.log(nbOccurences(text, "baz")); // => 1
}

function flatten2DTest(){
    console.log( flatten2D([[1,2], [3,4], [5,6]])); // [1, 2, 3, 4, 5, 6]
    console.log( flatten2D([[1,2], [3,4,5], [6]])); // [1, 2, 3, 4, 5, 6]

}


function tabTest() {

    array(["Bob", "Julien", "Roger"]);

}

function multiplicationTest(){

    multiplication (5);

}

function cesarTest(){

    console.log(chiffrage("attaquez asterix", 3));
    console.log(dechiffrage("dwwdtxhc dvwhula", 3));

}

function viginereTest(){

    console.log(chiLetter("z",3));

    console.log(chiffrageVi("attaquez asterix",314));

    console.log(dechiffrageVi("duxdryha evuiujb", 314))
}


   