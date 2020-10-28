// Day1 Exercise
// Question2 Print Even & Odd
for (let i = 0; i <= 15; i++){
	if (i%2){
  	console.log(i+' is even');
  }
  else{
  	console.log(i+' is odd');
  }
}

// Question3 Sum parameters
function sum(){
	console.log(arguments.length);
	let sum = 0;
  let i = 0;
  while(i < arguments.length){
  	sum += arguments[i]
    i++
  }
  return sum
}

// Question4 Delete property
function delRollno(obj){
	console.log(obj);

	delete obj.rollno;

	console.log(obj);
	return obj;

}

// Question5 length of the object
function objLength(obj) {
	let list = Object.keys(obj);
	console.log(list);
	var property;
	let count = 0;
	for (property in list){
		count+=1
	}
	return count
}

// Question6 sort an array of objects
function sortObject(Arr) {
  return Arr.sort((a, b) => {
    if (a.libraryID < b.libraryID) {
      return 1;
    }
    if (a.libraryID > b.libraryID) {
      return -1;
    }
    return 0;
  })
}



//Day2 Exercise 
// Question1 Calculator constructor
function Calculator() {
  this.firstNum = 0
  this.secondNum = 0
  this.read = function read() {
    this.firstNum = Number(prompt("Please enter First number:", ""));
    this.secondNum = Number(prompt("Please enter Second number:", ""));
  }
  this.sum = function sum() {
    return this.firstNum + this.secondNum
  }
  this.mul = function mul() {
    return this.firstNum * this.secondNum
  }
}

// Question2 Hero constructor

function Hero(name, occupation) {
  this.name = name
  this.occupation = occupation
}

Hero.prototype.whoAreYou = function(){
	return "My name is " + this.name + " and I am a " + this.occupation
}

var hero1 = new Hero("Michaelangello", "Ninja")

console.log(hero1.whoAreYou())