(()=> {
  type UserID = string | number | boolean;
  let userId: UserID;


  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'S';
  //shirtSize  = 'o';

  function greeting(userId: UserID, size: Sizes){
    if(typeof userId === 'string'){
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  greeting(111,'L');

})();
