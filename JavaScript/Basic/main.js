/*

\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed

*/
/**=================================
 *          Counting Cards
 * =================================
 */


/*
In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.
*/

let count = 0;

function cc(card) {
  // Only change code below this line
  const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
  const decision = ['Bet', 'Hold'];
  
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }

  // Only change code above this line
}



/**
 * ======================================
 *          Sealing an object
 * ======================================
 */

const person = {
  myName: "Rafal",
  myAge: 34,
}

Object.seal(person); // Zapobiega dodawaniu właściwości do obiektu

console.log(person.city = "Paris")

console.log(person)

person.myAge = 30;
console.log(person)

/*
                          Testing Objects for Properties
                          ===============================
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.
                          
*/
                         
/*
                                  Record Collection
                          ===============================
You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the recordCollection object is used for the tests.

*/

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Dodaje atrybuty do obiektu -> musi istnieć numer id aby uzupełnić.
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}


updateRecords(recordCollection, 5439, 'artist', 'ABBA');

console.log(recordCollection)

updateRecords(recordCollection, 2468, 'tracks', 'Hope so')

console.log(recordCollection)

updateRecords(recordCollection, 5439, 'tracks', 'Mamma mia');

console.log(recordCollection)


// Dodaje nowy numer albumu do obiektu
function updateNewRecord(records, id) {
  if(id !== '') {
    records[id] = [];
  }
  return records
}

updateNewRecord(recordCollection, 1111);
console.log(recordCollection)
updateRecords(recordCollection, 1111, 'artist', 'Metalica');
console.log(recordCollection)
updateRecords(recordCollection, 1111, 'tracks', 'Nothing else matters')
console.log(recordCollection)

const myArray = [];

// Only change code below this line
for(let i = 1; i <= 9; i += 2) {
  myArray.push(i);
}

console.log(myArray)

// Funkcja iteruje po subtablicach i mnoży je przez siebie, zwracając wynik do zmiennej product.
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for(let i = 0; i < arr.length; i++) {
  for(let j = 0; j < arr[i].length; j++) {
    product *= arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));

/* Zastępowanie pętli rekurencją */

function multiply2(arr, n) {  // Funkcja mnoży kolejne elementy tablicy przez siebie w zależności od podania liczby 'n' dla której będzie wykonana ilość mnożenia.
  if (n <= 0) {
    return 1;
  } else {
    return multiply2(arr, n - 1) * arr[n - 1];
  }
}
const arr2 = [2, 5, 6];
// console.log(multiply2(arr2, 2))

/* ===========================================
/               REKURENCJA
/  =========================================== */

// Rekurencyjne wywołanie funkcji w funkcji

let string = 'Kiedy byłem małym chłopcem hej, zawsze chciałem gładko golić się';

function longestWordRecursive(str) {
  str = str.split(' ');
  if (str.length === 1) {
    return [str[0], str[0].length];
  }
  if (str[0].length >= str[1].length) {
    str.splice(1, 1);
    return longestWordRecursive(str.join(' '))
  }
  if (str[0].length <= str[1].length) {
    return longestWordRecursive(str.slice(1, str.length).join(' '))
  }
  return str.length;
}

console.log(longestWordRecursive(string));

// Funkcja rekurencyjna, która zwraca sumę pierwszego n elementów tablicy 'arr'.
function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
const arrToSum = [3, 5, 7];
console.log(sum(arrToSum, 2));
console.log('=====')
console.log(arrToSum[2-1] + 1)

// Profile Lookup
/*
1. The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

2. If both are true, then return the "value" of that property.

3. If name does not correspond to any contacts then return the string No such contact.

4. If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
*/

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];


/* PROGRAM SPRAWDZA CZY LISTA ZAWIERA DANY ATRYBUT 'NAME' ORAZ WŁAŚCIWOŚĆ 'PROP'.
JEŚLI IMIĘ I WŁAŚCIWOŚĆ ZNAJDUJĄ SIĘ NA LIŚCIE, ZWRACA WARTOŚĆ WARTOŚĆ WŁAŚCIWOŚCI.
JEŚLI IMIĘ SIĘ ZNAJDUJE NA LIŚCIE, ALE WŁAŚCIWOŚĆ NIE - ZWRACA INFORMACJE O BRAKU WŁAŚCIWOŚCI.
JEŚLI NIE ZNAJDZIE IMIENIA NA LIŚCIE, ZWRACA INFORMACJĘ O BRAKU KONTAKTU NA LIŚCIE */

function lookUpProfile(name, prop) {
  const arr = contacts;
  let item = [];
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].firstName == name && arr[i].hasOwnProperty(prop)) {
      console.log(arr[i][prop])
      item = arr[i];
      return arr[i][prop];
    } else if (arr[i].firstName == name && arr[i].hasOwnProperty(prop) == false) {
      console.log('No such property');
      item = arr[i];
      return 'No such property';
    }
  }
  return 'No such contact';
}

console.log('=================')
lookUpProfile("Akira", "likes");
lookUpProfile("Harry", "lastName");
lookUpProfile("Harry", "hates");
lookUpProfile("Harry", "likes");
lookUpProfile("Sherlock", "lastName")
lookUpProfile("Akira", "address")
lookUpProfile("Alan", "likes");

/* ===========================================
/         GENEROWANIE LOSOWEGO NUMERU
/  =========================================== */

// Metoda 'Math.random' przyjmuje losowe wartości z zakresu od 0 (włącznie) do 1 (wyłącznie).

function getRandomNum() {
  return Math.random();
}

console.log(getRandomNum());

// Metoda 'Math.floor' zaokrągla wynik działania w dół.
function getRandomWholeNum() {
  return Math.floor(Math.random() * 10);
}

console.log(getRandomWholeNum());

// Przyjmowanie wartości min i max dla 'Math.random'.
function getRandomNum2(numMin, numMax) {
  return Math.random() * (numMax - numMin) + numMin;
}

console.log(getRandomNum2(2, 4));

function getRandomNum3(min, max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}

console.log(getRandomNum3(5, 9));


/* ===========================================
/       Stosowanie funkcji  parseInt();
/  =========================================== */

console.log(`=================`)
console.log(`%cStosowanie "parseInt()"`, 'color: lime; font-size: 18px; text-decoration: underline;')

// Funkcja zamienia literał liczbowy na string.
function convertToInt(str) {
  return parseInt(str);
}

console.log(convertToInt('007'));
console.log(convertToInt('055102'))

/* ===========================================
/   Stosowanie operatora trójskładnikowego;
/  =========================================== */

console.log(`=================`)
console.log(`%cStosowanie operatora trójskładnikowego`, 'color: lime; font-size: 18px; text-decoration: underline;')

function checkIfEqual(a, b) {
  return a == b ? console.log(`Liczba ${a} jest równa liczbnie ${b}`) : console.log(`Liczba ${a} nie jest równa liczbie ${b}`);
}

checkIfEqual(5, 5);

/* ===========================================
/  Stosowanie operatora trójskładnikowego, wielowarunkowego (if else...);
/  =========================================== */

console.log(`=================`)
console.log(`%cStosowanie operatora trójskładnikowego, wielowarunkowego (if else...)`, 'color: lime; font-size: 18px; text-decoration: underline;')

function checkIfBigger(a, b) {
  return (a > b) ? `${a} jest większe od ${b}`
  : (a === b) ? `${a} jest równe ${b}`
  : `${b} jest większe.`
}

console.log(checkIfBigger(5, 10))

/* ===========================================
/        ZADANIE Z FUNKCJĄ REKURENCYJNĄ
/  =========================================== */


// Funkcja przyjmuje liczbę dla parametru 'n' i za pomocą funkcji rekurencyjnej zwraca n liczb w kolejności malejącej aż do 1 w postaci tablicy.
function countDown(n) {
  if(n < 1) {
    return [];
  } else {
    const countArray = countDown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countDown(10))

/* ===========================================
/        ZADANIE Z FUNKCJĄ REKURENCYJNĄ 2
/  =========================================== */
// Use Recursion to Create a Range of Numbers

/*
We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.
*/

//Funkcja przyjmuje dla dwóch parametrów liczbę początkową i końcową, a następnie zwraca tablicę z liczbami z zakresu pomiędzy tymi parametrami (włącznie). Jeśli parametr początkowy i końcowy jest identyczny, funkcja zwraca liczbę początkową jako tablicę.
function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
  ? [startNum]
  : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

console.log(rangeOfNumbers(6, 9))