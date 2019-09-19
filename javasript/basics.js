// alert("Its loaded");
console.log("Hello World");
var name = "Bhaktij";
console.debug("Value is assigned to variable name");
console.log(name);
console.log("Hello", name);
console.log("Hello %s", name);
var age = 21;
console.log(typeof(name));
console.log(typeof(age));
var greet = "Hello";
var s = greet + " " + name;
console.log(s);
// IF ELSE
var marks = 31;
if(marks > 35) {
  console.log("Student is passed");
} else if(marks == 30) {
  console.log("Student is failed with %i", marks);
}
else {
  console.log("Student is failed");
}
switch (marks) {
  case 30:
    console.log("Student has scored", marks);
    break;
  default:
    console.log("By default is executed");
}
// FOR Loop
// for(var i=0; i<10; i++) {
//   console.log(i);
// }
var n = 0;
while (n < 10) {
  console.log(n);
  n++;
}
