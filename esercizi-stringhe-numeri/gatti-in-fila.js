/*
  Gatti in fila
  Scrivi un programma che prenda in input:
    - Un numero totale di gatti
    - Il numero dei gatti presenti in ogni fila
  Restituisca in output:
   - Il numero di file risultanti
   - Nel caso l'ultima fila risulti incompleta, il numero di gatti mancanti
  Esempio
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4
  Hint: Se vuoi usare l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su) ma utilizza Math.ceil (arrotonda sempre all'intero superiore).
  http://www.imparareaprogrammare.it
*/

var cats = 10;
var inline = 3;

var numberline = Math.ceil(cats/inline);//10/3=3.3 > Math.ceil(arrotonda all'intero successivo)>4
var missingcats = (inline*numberline)-cats;//3*4=12 12-gatti tot.(10)= 2 gatti mancanti
console.log(`${cats} gatti sono divisi in ${numberline} file che hanno ognuna ${inline} gatti. Anche se nell'ultima fila mancano ${missingcats} gatti`);
