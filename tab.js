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