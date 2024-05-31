(()=>{
  let myDynamicVar: any;
  myDynamicVar = 190;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = ``;

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 122;
  const rto = (<number>myDynamicVar).toFixed();
  console.log(rto);


})();
