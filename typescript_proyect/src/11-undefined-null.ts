(() =>{
//let myNumber: number = undefined;
//let myString: string = null;
let myNull = null;
let myUndefined: undefined = undefined;

let myNumber: number | null = null;

let myString: string | undefined = undefined;


function hi(name: string | null){
let hello = 'hola';
if(name){
  hello+= 'name';
}else{
  hello += 'nobody';
}
console.log(hello)
}

function hiV2(name: string | null){
  let hello = 'hola';
  hello += name?.toLowerCase() || 'nobody';
  console.log(hello);
}

hi('¿nicolas');
hi(null);

hiV2('¿nicolas');
hiV2(null);

})();
