const prompt = require("prompt-sync")({ sigint: true });
let userName = prompt("What is your name? ");

console.log(`Hello ${userName} and welcome to the Inspo channel!`);

let todayMonth = prompt('What month is it? ');
let todayDate = prompt ('What day of the month is it? ');
todayDate = parseInt(todayDate);

if (todayDate <14 ){
    dateSection = 1;
} else if (todayDate <21){
    dateSection = 2;
} else {
    dateSection = 3;
}

let randomWord = prompt('Think of a random word... ');
console.log(`Your random word is ${randomWord}. Inspo channel uses scrabble word scoring to create a your random word score.`);
randomWord = randomWord.toUpperCase()

let randomWordArray = Array.from(randomWord);

let rws = 0;
randomWordArray.forEach(letter => {
    if (letter === 'Q' || letter === 'Z'){
        rws += 10;
    } else if (letter === 'J' || letter === 'X'){
        rws += 8;
    } else if (letter === 'K'){
        rws += 5;
    } else if (letter === 'F' ||letter === 'H'||letter === 'V'||letter === 'W'||letter === 'Y'){
        rws += 4;
    } else if (letter === 'B'||letter === 'C'||letter === 'M'||letter === 'P'){
        rws += 3;
    } else if (letter === 'D'||letter === 'G'){
        rws += 2;
    } else {
        rws += 1
    }
}
);

let rns = rws * dateSection

if (rns <12){
    randomOutcome = 'music';
} else  if (rns < 24){
    randomOutcome = 'quote';
} else {
    randomOutcome = 'toDo';
}

todayMonth = todayMonth.toLowerCase()

if (todayMonth === 'january' || todayMonth === 'february'){
    monthSection = 1;
} else if (todayMonth === 'march' || todayMonth === 'april'|| todayMonth === 'may'){
    monthSection = 2;
} else if (todayMonth === 'june' || todayMonth === 'july'|| todayMonth === 'august'){
    monthSection = 3;
} else if (todayMonth === 'september'|| todayMonth === 'october'|| todayMonth === 'november'){
    monthSection = 4
} else {
    monthSection = 5
} 

switch (randomOutcome) {
    case 'music':
        console.log("Music is just what was prescirbed.")
        switch (monthSection){
            case 1:
                console.log("Today, try listening to Mozart's Rondo alla Turca, K311 3rd Movt");
                break;
            case 2:
                console.log("Why don't you try listening to Rachmaninoff's Rhapsody on a theme of Pagannini?");
                break;
            case 3:
                console.log("Gershwin's music is inspiratonal. Listen to Summertime to give it a go.");
                break;
            case 4:
                console.log("Debussy's piece - La fille aux chevaux de lin is briliant!");
                break;
            case 5:
                console.log("Something to suit the mood is Waking in the Air by Howard Blake.");
                break;
        }
        break;
    case 'quote':
        console.log("Quotes can be so inspirational...");
        switch (monthSection){
            case 1:
                console.log("'The day is what you make it! So why not make it a great one?'");
                break;
            case 2:
                console.log("'Your mind is a garden. Your thoughts are the seeds. You can grow flowers or you can grow weeds.'")
                break;
            case 3:
                console.log("'Sun rays must be the sun's way of dancing alone.'");
                break;
            case 4:
                console.log("'Autumn shows us how beautiful it is to let things go.'");
                break;
            case 5:
                console.log("'Success is how high you bounce when you hit the bottom.'");
                break;
        }
        break;
    case 'toDo' :
        console.log("Having something to do might help you get in the right mood.")
        switch (monthSection){
            case 1:
                console.log("Have a cup of tea and phone a friend.");
                break;
            case 2:
                console.log("Go for a walk. Appreciate the flowers.");
                break;
            case 3:
                console.log("Treat yourself to an icecream!");
                break;
            case 4:
                console.log("Learn something new. Challenge yourself.");
                break;
            case 5:
                console.log("Give a gift or do something special for someone else. It is the season of goodwill.");
                break;
        }
        break;

}
