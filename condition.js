// if true hai tabhi execute hoga
// if else true ho ya false dono m conditin chlega
// if else if multiple condition check krne k liye use hota hai(ladder view)
// switch case multiple condition check krne k liye use hota hai

// if statement
let age = 20;
if (age >= 18) {
    document.write("<b>You are an adult.</b>");
}

// if else statement
let number = 10;
if (number % 2 === 0) {
    document.write("<b>Even number</b>");
} else {
    document.write("<b>Odd number</b>");
}

// if else if statement
let marks = 85;
if (marks >= 90) {
    document.write("<b>Grade A</b>");
}
else if (marks >= 80) {
    document.write("<b>Grade B</b>");
}
else if (marks >= 70) {
    document.write("<b>Grade C</b>");
}
else {
    document.write("<b>Grade D</b>");
}



// swtich case
let grade = 'A';
switch (grade) {
    case 'A':
        document.write("<b>Excellent</b>");
        break;
    case 'B':
        document.write("<b>Good</b>");
        break;
    case 'C':
        document.write("<b>Average</b>");
        break;
    default:
        document.write("<b>Invalid grade</b>");
}

