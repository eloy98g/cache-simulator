const code ='int suma = 0;for(int i=0; i < 10; i++){  suma = suma + suma;}';

// var result = code.split("");

// console.log(result);



let intRe = /int(.*?)\;/g;
let scRe = /;/g;

const array = [...code.matchAll(intRe)];
for(var i = 0; i<array.length; i++){
  console.log(array[i]);
}

/* FOR */
//si hay un FOR, los dos siguientes ; no los recoge
// let forRe = /for.*\{/;

//   var result = code.search(forRe);
  
//   console.log(result);
//   var matches = forRe.exec(code);