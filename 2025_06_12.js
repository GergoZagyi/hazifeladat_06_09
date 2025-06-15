/*
	1.
	Írj Javascript programot, mely két megadott szám közül megkeresi, hogy melyik van közelebb a 100-hoz
*/


const closerToHundred = (a, b) => 100 - a <= 100 - b ? a : b;
//console.log('Én közelebb vagyok a százhoz: ' + closerToHundred(25, -134));

/*
	2.
	Írj függvényt mely felveszi egy művelet 2 operandusát, és az eredményt.
    A függvény döntse el, hogy a 4 alapművelet közül (*, /, +, -), melyiket kell elvégeznünk a 2 operandus közt, hogy megkapjuk
    a harmadik paraméterként írt eredményt. Térjen vissza, a helyes operátorral (stringként), vagy ha egyik művelet sem
    adja a megadott eredményt, a függvény térjen vissza null értékkel.
*/

const operand = (a, b, c) => {
    switch(true){
        case (a + b == c): return '+';
        case (a - b == c): return '-';
        case (a * b == c): return '*';
        case (a / b == c): return '/';
        default: return null;
    }
}
/*
	3.
	Egy rendezvényre készülünk, melynek regisztrációs feltétele, hogy az illető 16 és 25 év közti legyen. Aki ennél kisebb, 
       túl fiatal, aki idősebb, az túl idős.
       A feladatban kérjük be a regisztrálandó személy életkorát (prompt segítségével) és abban az esetben, ha a regisztrálandó személy
       életkora benne van ebben az intervallumban, egy "alert" ablakban jelenítsük meg, hogy "Sikeres regisztráció" 
       különben, írjuk ki, hogy "Nem megfelelő életkor"
*/
const ageCheck = () => {
    let age = parseInt(prompt('Add meg a korod'));
    if (age >= 16 && age <= 25){
        alert('Sikeres regisztráció');
    } else{
        alert('Nem megfelelő életkor')
    }
}

/*
	4.
	Egy számról döntsük el, hogy 1, 2, illetve, hogy 3 jegyű-e. Ugyancsak konzolban, jelenítsük meg az eredményt.
*/
const szamjegyCheck = (a) => {
    switch(true){
        case (a < 0 || a >= 1000):
            console.log('Intervallumon kivül eső szám');
            return null;
        case (a < 1000 && a >= 100):
            console.log('A szám 3 jegyű');
            return 3;
        case (a < 100 && a >= 10):
            console.log('A szám 2 jegyű');
            return 2;
        case (a < 10 && a >= 0):
            console.log('A szám 1 jegyű');
            return 1;
    }
}

/*
	5.
	Írj függvényt, mely visszatér egy 2 jegyű szám tagjainak összegével.
    25 esetén 2+5, vagyis 7-el
*/

const numberAdd = (a) => {
   let stringArray = (a.toString().split(''));
   if (stringArray.length !== 2){return null}
   return(parseInt(stringArray[0]) + parseInt(stringArray[1]))
}


/*
	6.
	Írjunk egy "prim" nevezetű függvényt, mely egy számról eldönti, hogy prím szám-e vagy sem.
(Azokat az 1-nél nagyobb természetese számokat nevezzük prímszámoknak, melyeknek 1-en és önmagukon kívül nincs osztójuk)
*/

const primeCheck = (a) => {
    if (a <= 1) {return false};
    for (let i = 2; i < a; i++){
        if(a % i == 0){
            return false;
        } 
    }
    return true;
}


/*
	7.
	Írjatok egy "osszeg" nevű függvényt, mely bemeneti paraméterként megkap egy tömböt, mely számokkal van feltöltve, és 
       kimenetként visszaadja, a tömb elemeinek az összegét.
*/

const arrayAdd =(array) => {
    let testNumber = 0;
    for (let i = 0; i < array.length; i++){
        testNumber += array[i];
    }
    return testNumber
}

/*
8.
Írj függvényt, mely összehasonlít 2 tömböt, és true értékkel tér vissza, ha a 2 tömb egyforma.
Két tömb akkor egyforma, ha minden azonos indexen levő elemük egyforma.
*/

let testArray = [1, 5, 12, 24];
let otherTestArray = [8, 5, 121, 24];

const compareArrays = (a, b) => {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;

    //For each nem működött, hiszen ott csak a callbacket exiteli a return, talán flaggel megoldható ott is.
};
/*
	9.
	Írj függvényt, amely megkeresi egy tömb legnagyobb elemnét
*/

const getBiggest = (a) => {
    return(Math.max(...a))
}
console.log(getBiggest(testArray))