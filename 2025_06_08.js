// A visszaadás helyet console.log-ban jeleztem mindenhol mi lenne a kimenetel, igy sokkal egyszerűbb volt a testelés node-al.

//1 Négyzet vagy terület számolás

function getTerület (a, b) {
    console.log(`A négyzet vagy téglalap területe:  ${a * b}` );
}
//getTerület(4, 6)

const terulet = (a, b) => a * b;
 
//2 Kör Kerület számolás

function getKörKerület(r){
    let p = Math.PI;
    console.log(`A kör területe: ${r * 2 * p}`);
}

const kerulet = (r) =>Math.floor( r * 2 * (Math.PI));
//console.log(kerulet(5))
 
//3 Páros, Páratlan check

function checkPáros(a, b){
    let c = a + b;
    if(c % 2 === 0){
        console.log('A számpár összege páros!');
    } else{console.log('A számpár összege nem páros!')}
}

const paros = (a, b) => (a + b) % 2 == 0;
//console.log(paros(2, 4))

//4 15 check

function fifteenCheck(a, b) {
    if(a === 15 || b === 15 || a + b === 15 || a - b === 15 || b - a === 15){
        console.log('Ez az eset igaz eredményt ad a tizenötös ellenőrzésre!');
    } else{console.log('Ez az eset hamis eredményt adna a tizenötös ellenőrzésre!')}
}

const tizenot = (a, b) => a == 15 || b == 15 || Math.abs(a - b) == 15 || a + b == 15;
//console.log(tizenot(12, 27))


//5 Előjelek egyeznek-e check

function elojelCheck(a, b){
    if( ( a >= 0 && b >= 0 ) || ( a <= 0 && b <= 0 ) ){
        console.log('Ez a két szám azonos előjellel rendelkezik');
    } else{console.log('Ez a két szám nem azonos előjellel rendelkezik')}
}

const elojel = (a, b) => a * b >= 0;
//console.log(elojel(-5, -16))

//6 Szám többszöröse-e egy másiknak

function tobbszorosCheck(a){
    for(let i = 2; i < a; i++){
        if (a % i === 0){
            console.log(`Az ${a} szám többszöröse a következő számnak: ${i}`);
            return
        }
    }
    if(!resultFound){
        console.log("Nem találtam osztót");
    }
}
tobbszorosCheck(57142)
const tobbszoros = (a, b) => b % a == 0;

//console.log(tobbszoros(4, 6))

//7 legnagyobb szám kiválasztása 


function legnagyobbSzam(a, b, c){
    if(a > b && a > b){
        console.log(`A legnagyobb szám ${a}`);
    } else if (b > a && b > c){
        console.log(`A legnagyobb szám ${b}`);
    } else{console.log(`A legnagyobb szám ${c}`)}
}
const legnagyobb = (a, b, c) => {
    let myArray = [a, b ,c];
    myArray.sort((a, b) => a - b);
    return myArray[2]
}


//8 Három szám, utolsó számjegy egyezik-e

function egyezikCheck(a, b ,c){
    let aString = a.toString();
    let bString = b.toString();
    let cString = c.toString();

    let aSliced = aString.slice(aString.length - 1);
    let bSliced = bString.slice(bString.length - 1);
    let cSliced = cString.slice(cString.length - 1);

    if(aSliced === bSliced && aSliced === cSliced){
        console.log('Ennek a három számnak egyezik az utolsó számjegye!');
    } else{ console.log('Ennek a három számnak nem egyezik az utolsó számjegye!')} 
}

//egyezikCheck(123133, 56122, 5123);


//9 Egy adott szám egy adott intervallumba tartozik-e

function intervallumCheck(a){
    if (a >= 0 && a <= 10){
        console.log('Ez a szám 0 és 10 között van');
    } else{console.log('Ez a szám az intervallumon kivülre esik')};
}



const intervallum = (a, b, c) => a >= b && a <= c;



//10 Szögtipus check

function szogtipusCheck(a) {
    switch(true){
        case (a >= 0 && a < 90):
            console.log('Hegyesszög');
            break;
        case (a === 90):
            console.log('Derégszög');
            break;
        case (a > 90 && a < 180):
            console.log('Tompaszög');
            break;
        case (a === 180):
            console.log('Egyenes szög');
            break;
        default:
            console.log('Nem szög')
    }
}
//szogtipusCheck(280);


//11 Pontszám check

function pontszamCheck(a){
    switch (true){
        case(a >= 50 && a < 75):
            console.log('Elégséges');
            break;
        case(a >= 75 && a < 90):
            console.log('Jó');
            break;
        case (a >= 90 && a < 100):
            console.log('Kiválló');
            break;
        case (a === 100):
            console.log('Tökéletes');
            break;
        case (a < 50):
            console.log('Elégtelen');
            break
        default: console.log('Nem értelmezhető eredmény')         
    }
}

//12 két szám hasonló-e check ahol c az osztó

function hasonloCheck(a, b, c){
    if((a % c === 0 && b % c === 0) || (a % c != 0 && b % c != 0)){
        console.log('A két szám hasonló')
    } else{console.log('A két szám nem hasonló')}
}

//hasonlóCheck(3, 5, 2)

