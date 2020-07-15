/*
Összegzés algoritmusa

összeg = 0
CIKLIS AMÍG van még ADDIG
    szám= következő elem
        összeg = összeg + szám
CIKLUS VÉGE
*/
let numericArray = [1, 3, 2, 5, 4, 7 ,6 ,9];
for (let i = 0; i < numericArray.length; i++) {
let sum += numericArray[i];
}
console.log("Sum: ", sum);
/*
Számlálás algoritmusa:

db = 0
CIKLUS AMIÍG van még szám, ADDIG
    szám = a következő elem
    HA igaz a feltétel a számra, AKKOR
        db = db+1
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

/*
Szélső érték keresés algoritmus:

legnagyobb = első elem
CIKLUS AMIÍG van még szám ADDIG
    szám = következő szám
    HA szám > legnagyobb, AKKOR
    legnagyobb = szám
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

/*
ELdöntés algoritmusa:

találat = HAMIS
CIKLUS AMÍG van elem ÉS NEM találat
    szám = következő elem
    HA IGAZ  a feltétel, AKKOR
        találat = IGAZ
    FELTÉTEL VÉGE
CIKLUS VÉGE