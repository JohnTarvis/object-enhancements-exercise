/*write an es2015 version*/

function createInstructor(firstName,lastName){
  return {
    firstName,
    lastName,
  }
}

var favoriteNumber = 42;
var instructor = {
  fistName: "Colt",
  [favoriteNumber]:"That is my favorite!",
}

var instructor = {
  firstName: "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return this.firstName + " says bye!";  
  }
}

function createAnimal(species,verb,noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}
