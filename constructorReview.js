//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).
var Animal = function(species, name, legs, color, food) {
  this.species = species;
  this.name = name; 
  this.legs = legs;
  this.color = color; 
  this.food = food;
}


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender
var person  = function(name, age, height, gender) {
  var obj = {
  name: name,
  age: age, 
  height: height, 
  gender: gender,
}
return obj;

}


//Create a animal array and a person array.

animalArr = [];
personArr = [];


//Create two instances of Animal and push those into your animal array

 var elephant = new Animal('elephant', 'Sherlock', 4, 'gray', ['lettuce', 'fruits', 'nuts']);
 var lion = new Animal('lion', 'Ruby', 4, 'orange', ['meat', 'moreMeat']);

 animalArr.push(elephant, lion);
animalArr;

//Create two instances of person and push those into your person array.
var page = person('Page', 28, '5ft. 6in.', 'Female');
var cole = person('Cole', 24, '6ft.', 'Male');
 
personArr.push(page, cole);
personArr;


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  Animal.prototype.eat = function() {
    var random = this.food[Math.floor(Math.random() * this.food.length)];
    alert(this.name + ' ate ' + random);
  }

  elephant.eat();

//At this point, if we wanted to add something to every istance of person could we? 

  We can but it will only add to the future person not any past person 



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/