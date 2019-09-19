// Spread Operator
let colors = ["Red", "Blue", "Green"];
console.log(colors);
let colors2 = [...colors, "Orange", "Yellow"]
console.log(colors2);
// Rest Operator
function printUser(name, age, ...n) {
  console.log("Name", name);
  console.log("Age", age);
  console.log(n);
}
printUser("John", 18, "IT", "TE");
// Arrow Function
// function add(x, y) {
//   return x + y;
// }
// let add = function(x, y) {
//   return x + y;
// }
let add = (x, y) => x + y;
console.log(add(10, 15));

// Class
class User {
  constructor(name ,age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log("Name", this.name);
    console.log("Age", this.age);
  }
}
let user = new User("John", 21);
user.print();
class Student extends User {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
}
let student = new Student("John", 21, 50);
student.print();
