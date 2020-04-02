function sum(number){

    let sum = 0;

    for (let i = 0; i < number.length; i++){

        sum = sum + number[i];
    }

    return sum;

}

function longestWord (words){

    let s = words[0];

    for (let i = 0; i < words.length; i++){

        if(s.length < words[i].length){

            s = words[i];
        }

    }

    return s;
}

function range (min,max,step){

    
    let n = 0;

    for (let i = min; i <= max; i = i + step){

        n++;
    }

    let tab = [123,45];

    for (let k = 0; k < n; k++){

        tab[k] = min + k*step;

    }

    return tab;
}


function nbOccurences (wordList, word){

    let nb = 0;

    let tab = wordList.split(" ");

    for(let i = 0; i < tab.length; i++){

        if(tab[i] == word){

            nb++;

        }
    }

    return nb;
}



function flatten2D(array){

    let result = [];

    for (let i = 0; i < array.length; i++){

        for (let j = 0; j < array[i].length; j++){

            result.push(array[i][j]);

        }
    }

    return result;

}

function array (array){

    console.log(array);

    array.pop();

    console.log(array);

    array.push("Gilbert");

    console.log(array);

}


function multiplication (n){

    for(let i = 0; i < 10; i++){

        console.log(n," x ",i," = ",n*i);

    }
}



function chiffrage(message, cle){

    let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let crypte = [];

    for(let i = 0; i < message.length; i++){

        if(message[i] != " "){

            let letter = message[i];
            
            let index;

            for (let j = 0; j < alpha.length; j++){

                if(letter == alpha[j]){

                    index = j;

                }   
            
            }

            let ic = index + cle


            if(ic >= alpha.length){

                crypte[i] = alpha[(ic) - alpha.length];

            } else {

                crypte[i] = alpha[ic];

            }

        } else {

            crypte[i] = " ";
        }

    }
    //console.log(crypte);

    let translation = crypte.join("");

    return translation;
} 



function dechiffrage(message, cle){

    let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let crypte = [];

    for(let i = 0; i < message.length; i++){

        if(message[i] != " "){

            let letter = message[i];
            
            let index;

            for (let j = 0; j < alpha.length; j++){

                if(letter == alpha[j]){

                    index = j;

                }   
            
            }

            let ic = index - cle;


            if(ic >= 0){

                crypte[i] = alpha[ic];

            } else {

                crypte[i] = alpha[alpha.length + ic];

            }

        } else {

            crypte[i] = " ";
        }

    }

    //console.log(crypte);

    let translation = crypte.join("");

    return translation;


}


//exo 9

function chiLetter (letter,cle){

    let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let crypte;

    if(letter != " "){
        
        let index;

        for (let j = 0; j < alpha.length; j++){

            if(letter == alpha[j]){

                index = j;

            }   
        
        }

        let ic = (index + cle)


        if(ic >= alpha.length){

            crypte = alpha[(ic) - alpha.length];

        } else {

            crypte = alpha[ic];

        }

    } else {

        crypte = " ";
    }

    return crypte;

}



function dechiLetter(letter, cle){

    let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let crypte;

    if(letter != " "){
        
        let index;

        for (let j = 0; j < alpha.length; j++){

            if(letter == alpha[j]){

                index = j;

            }   
        
        }

        let ic = (index - cle)


        if(ic < 0){

            crypte = alpha[(ic) + alpha.length];

        } else {

            crypte = alpha[ic];

        }

    } else {

        crypte = " ";
    }

    return crypte;

}




function chiffrageVi(message, cle){

    let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let crypte = [];

    cle = cle.toString();

    let tab = cle.split("");

    for (let i = 0; i < tab.length; i++){

        tab[i] = parseInt(tab[i]);

    }

    let copy = [].concat(tab);

    let n = message.length / tab.length;

    for (let i = 0; i < n; i++){

        tab = tab.concat(copy);
        
    }



    for(let i = 0; i < message.length; i++){

        if(message[i] == " "){

            tab.splice(i,0," ");

        } else {


        }
    }

    for (let i = 0; i < message.length; i++){

        crypte[i] = chiLetter(message[i],tab[i]);

    }

    //console.log(crypte);

    let translation = crypte.join("");

    return translation;
    
} 




function dechiffrageVi(message, cle){

    let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let crypte = [];

    cle = cle.toString();

    let tab = cle.split("");

    for (let i = 0; i < tab.length; i++){

        tab[i] = parseInt(tab[i]);

    }

    let copy = [].concat(tab);

    let n = message.length / tab.length;

    for (let i = 0; i < n; i++){

        tab = tab.concat(copy);
        
    }



    for(let i = 0; i < message.length; i++){

        if(message[i] == " "){

            tab.splice(i,0," ");

        } else {


        }
    }

    for (let i = 0; i < message.length; i++){

        crypte[i] = dechiLetter(message[i],tab[i]);

    }

    //console.log(crypte);

    let translation = crypte.join("");

    return translation;
    
} 
