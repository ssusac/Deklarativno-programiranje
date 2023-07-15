//funkcija MAP
function mapFunkcija(listaVrijednosti, callback) {
  const rezultat = [];
  for (const vrijednost of listaVrijednosti) {
    const vrijednostRezultat = callback(vrijednost);
    rezultat.push(vrijednostRezultat);
  }
  return rezultat;
}

// Primjer korištenja funkcije mapFunkcija za povećanje svakog broja u listi za 1
const rezultat1 = mapFunkcija([1, 2, 3], (v) => v + 1);
console.log('MAP-Primjer1.:'+ ' ' +rezultat1);

// Primjer korištenja funkcije mapFunkcija za mapiranje liste objekata u niz stringova koji sadrže ime i prezime svakog objekta
const listaObjekata = [
  { ime: "Sara", prezime: "Sušac" },
  { ime: "Pero", prezime: "Perić" },
];
const rezultat2 = mapFunkcija(listaObjekata, (obj) => `${obj.ime} ${obj.prezime}`);
console.log('MAP-Primjer2.:'+ ' ' +rezultat2);

/*-------------------------------------------------------------------------------------*/

//Funkcija PIPE
function pipeFunkcija(...callbacks) {
  return function (incijalnaListaVrijednosti) {
    let vrijednost = incijalnaListaVrijednosti;
    for (const callback of callbacks) {
      vrijednost = callback(vrijednost);
    }
    return vrijednost;
  };
}

// Funkcija zbrajanje prima listu vrijednosti i vraća novu listu koja sadrži zbroj svakog elementa s njegovim dupliciranim vrijednostima.
function zbrajanje(listaVrijednosti) {
  let rezultat = [];
  for (const broj of listaVrijednosti) {
    rezultat.push(broj + broj);
  }
  return rezultat;
}

// Funkcija množenje prima listu vrijednosti i vraća novu listu koja sadrži kvadrirane vrijednosti svakog elementa.
function množenje(listaVrijednosti) {
  let rezultat = [];
  for (const broj of listaVrijednosti) {
    rezultat.push(broj * broj);
  }
  return rezultat;
}

// Primjer korištenja pipeFunkcije za zbrajanje i množenje liste [1, 2, 3].
const rezultat3 = pipeFunkcija(zbrajanje, množenje)([1, 2, 3]);
console.log('PIPE-Primjer1.:'+ ' ' +rezultat3);

// Funkcija za konverziju svih slova u velika slova
const pretvorbaSlovaUVelika = (text) => text.toUpperCase();

// Funkcija za dodavanje razmaka između slova (uključujući razmake)
const dodajRazmakIzmeduSlova = (text) => text.split('').map((char) => char + '-').join('');

//funkcija koja na mjesto razmaka stavlja . 
const zamjenaRazmakaSaTockom = (text) => text.replace(/\s/g, '.');

// Primjer korištenja pipeFunkcije za pretvorbu slova u Velika, dodavanja razmaka i zamjenu razmaka točkom
const rezultat4 = pipeFunkcija(pretvorbaSlovaUVelika, dodajRazmakIzmeduSlova, zamjenaRazmakaSaTockom)('Test pipe funkcije');
console.log('PIPE-Primjer2.:'+ ' ' +rezultat4);

/*----------------------------------------------------------------------------------------------------------------------*/

//funkcija REDUCE
function reduceFunkcija (incijalnaListaVrijednosti, callback, početnaVrijendost){
  let acc = početnaVrijendost
  for (const vrijednost of incijalnaListaVrijednosti){
    acc =callback(acc,vrijednost)
  }
  return acc
}

//Funkcija provjerava parnost brojeva te vraća rezultat u obliku modificirane liste koja sadrži samo parne brojeve
const rezultat5 = reduceFunkcija([1,2,3,4], (acc,val) => {
  if(val % 2 ===0) {
    acc.push(val);
  }
  return acc;
}, [] );
console.log('REDUCE-Primjer1.:'+ ' ' +rezultat5);

// Funkcija koja spaja sve stringove iz liste u jedan string
function spojiStringove(acc, val) {
  return acc + val;
}

// Lista vrijednosti
const listaStringova = ["Prikaz", " ", "rada"," ", "funkcije"," ",  "reduce","."];

// Korištenje reduceFn za spajanje stringova
const rezultat6 = reduceFunkcija(listaStringova, spojiStringove, "");
console.log('REDUCE-Primjer2.:'+ ' ' +rezultat6);





