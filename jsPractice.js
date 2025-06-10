// A visszaadás helyet console.log-ban jeleztem mindenhol mi lenne a kimenetel, igy sokkal egyszerűbb volt a testelés node-al.

//1 Négyzet vagy terület számolás

function getTerület (a, b) {
    console.log(`A négyzet vagy téglalap területe:  ${a * b}` );
}
//getTerület(4, 6)


//2 Kör Kerület számolás

function getKörKerület(r){
    let p = Math.PI;
    console.log(`A kör területe: ${r * 2 * p}`);
}
//getKörKerület(4)


//3 Páros, Páratlan check

function checkPáros(a, b){
    let c = a + b;
    if(c % 2 === 0){
        console.log('A számpár összege páros!');
    } else{console.log('A számpár összege nem páros!')}
}
//checkPáros(2, 4)
//checkPáros(5, 6)


//4 15 check

function fifteenCheck(a, b) {
    if(a === 15 || b === 15 || a + b === 15 || a - b === 15 || b - a === 15){
        console.log('Ez az eset igaz eredményt ad a tizenötös ellenőrzésre!');
    } else{console.log('Ez az eset hamis eredményt adna a tizenötös ellenőrzésre!')}
}
//fifteenCheck(27, 15)


//5 Előjelek egyeznek-e check

function előjelCheck(a, b){
    if( ( a >= 0 && b >= 0 ) || ( a <= 0 && b <= 0 ) ){
        console.log('Ez a két szám azonos előjellel rendelkezik');
    } else{console.log('Ez a két szám nem azonos előjellel rendelkezik')}
}

//előjelCheck(5, 0)


//6 Szám többszöröse-e egy másiknak

function többszörösCheck(a){
    let resultFound = false;
    for(let i = 2; i < a; i++){
        if (a % i === 0){
            console.log(`Az ${a} szám többszöröse a következő számnak: ${i}`);
            resultFound = true;
            break;
        }
    }
    if(!resultFound){
        console.log("Nem találtam osztót");
    }
}
//többszörösCheck(12)


//7 legnagyobb szám kiválasztása 


function legnagyobbSzám(a, b, c){
    if(a > b && a > b){
        console.log(`A legnagyobb szám ${a}`);
    } else if (b > a && b > c){
        console.log(`A legnagyobb szám ${b}`);
    } else{console.log(`A legnagyobb szám ${c}`)}
}
//legnagyobbSzám(1, 1, 6)


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

//intervallumCheck(5)


//10 Szögtipus check

function szögtipusCheck(a) {
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
//szögtipusCheck(280);


//11 Pontszám check

function pontszámCheck(a){
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

function hasonlóCheck(a, b, c){
    if((a % c === 0 && b % c === 0) || (a % c != 0 && b % c != 0)){
        console.log('A két szám hasonló')
    } else{console.log('A két szám nem hasonló')}
}

//hasonlóCheck(3, 5, 2)

