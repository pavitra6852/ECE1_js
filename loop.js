// let count;
// document.write("starting loop"+ "<br/");
// for(count = 0; count < 10; count++) {
//     document.write("Current count:"+ count);
//     document.write("<br/>");
// }
// document.write("Loop ended");

//for in loop
const person = {
    fname: "ajay",
    lnamr: "singh",
    age: 25
};
for(let key in person) {
    document.write(key + ": " + person[key]);
    document.write("<br/>");
}