//arithmetic operators

const x = 10;
const y = 15;

const z = x + y;
console.log(z);

const m = x * y;
console.log(m);

const s = m - 50;
console.log(s);

const a = m / 3;
console.log(a);

console.log("value is : " + z);

//js data types

//numbers
var q = 10;

//string
var ha = "ammar";

//object 
var ob = {
    "name": "ammarramees",
    "age": 25,
    "salary": "10000"
}

var ab = {
    "date" : "25",
    "size" : 12
}

//undefined
var ty;

//boolean
var u = true;

//js functions

const number1 = 10;
const number2 = 20;

console.log(number1+number2);

var p = "heloooo";
const number3 = 45;
const number5 = 55;

console.log(number3 + number5);

//parameterised function
function getsum(x,y) {
    console.log("from method : " + (x+y));
}

getsum(25,74);

//normal function
function greet() {
    var today = new Date();
    console.log("today is = " + today);
}

greet();

greet();

function func1(a,b) {
    console.log(a + b);
}

func1("Good morning", " Ammar");

function getmultiply(x,y,z) {
    const answer = x * y * z;
    return answer;
}

const c = getmultiply(10,5,9);
console.log(c);

function seegreet() {
    document.getElementById("greet").innerHTML="good evening "
}

//new 
var age = 15;

function test(xy) {
    return ("Your age is, " + xy);
}

const xyz = test(age);
console.log(xyz); 


//another method
const getaname1 = function(c) {
    console.log(c);
}

getaname1("ammar");

const getsome1 = function (cy) {
    console.log(cy);
}

getsome1(123456);


//another 2
const getaddress = (k) => {
    console.log(k);
}

getaddress("Liyanage Road");

const getaddress2 = (vb) => {
    console.log(vb);
}

getaddress2("Dehiwala");



//flow controllers - if else
var cusage1 = 40;
var cusage2 = 25;

if (cusage1>26) {
    console.log("age ok");
}

if (cusage1 > 26 && cusage2 ==25) {
    console.log("age ok");
}

if (cusage1==39 | cusage2==25) {
    console.log("age ok");
}

//when && is used if the first statement is wrong it wont check the next statement
//when || is used if the first statement is correct it wont check the next statement

if (cusage1==39) {
    console.log("this is from if");
} 
else {
    console.log("this is from else");
}

if (cusage1==39) {
    console.log("this is from if");
} 
else if (cusage1==40 ) {
    console.log("this is from elseif");
}
else {
    console.log("this is from else");
}

//*********************** */
var username = "ammarramees";
var password = "amr123";

if (username == "ammarram" && password == "amr123") {
    console.log("login successful");
} 
else {
    console.log("login failed");
}

//flow controllers - switch case
var jb = 3;

switch (jb) {
    case 1:
        console.log("Output is 1");
        break;
    case 2:
        console.log("output is 2");
        break;
    case 3:
        console.log("output is 3");
        break     
    default:
        console.log("default");
        break;
}

var jn = "January"

switch (jn) {
    case "Jany":
        console.log("Output is 1");
        break;
    case "feb":
        console.log("output is 2");
        break;
    case "mar":
        console.log("output is 3");
        break     
    default:
        console.log("default");
        break;
}


//page alerts
function alertme() {
    alert("Helllo Ammar, this is a alert");
}

alertme();



//****** For Loop (++ is incriment and -- is decriment)

for (var i = 0; i < 10; i++) {
    console.log("This is a for loop" + i);
}

for (var i = 20; i > 0; i=i-2) {
    console.log("This is a for loop" + i);
}

//********* While Loop

var r = 5;
while (r<10) {
    console.log("This is while loop " + r);
    r=r+1;
}

//*********** DO While Loop

var w = 0;

do {
    console.log("this is do while loop " + w);
    w++;
} while (w<5);


//  Arrays

var am = "Ammar";
var aa = "Ramees";
var aaa = "Mohamed";
var aaaa = "Amr";

const names = ["Ammar", "Ramees", "Mohamed", "Amr"];

console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names);

const marks = [25.36, 44, 35.35, 45.789, 255];
var add = marks[0] + 25;
console.log(add);

for (var op = 0; op < names.length; op++) {
    console.log(names[op]);
}


// For Each
for (var fb of names) {
    console.log(fb);
}

for (var fv of marks) {
    console.log(fv);
}

for (var fn in marks) {
    console.log(fn);
}


// 2D Array
var twod = [[4, 5, 7], [24,03], [45,65]];
console.log(twod[0][2]);
console.log(twod[2][0]);


// OOP Object Oriented Programmming
const salaah = {
    "name" : "Salaah Ahamed",
    "email" : "slaaah",
    "salary" : 25000,
    "number" : 07764566456,
}

console.log(salaah);

// JSON

// Event handling and DOM manipulation (lec 7)

function btnclick(){
    console.log("button has been clicked");
}

function btnclick2() {
    var textfielddata = document.getElementById('btntest').value;
    console.log(textfielddata);
}

//var username = "ammarramees";
//var password = "amr123";
function logintest() {
    var loginun = document.getElementById('loginun').value;
    var loginpw = document.getElementById('loginpw').value;
    if (loginun==username & loginpw==password) {
        console.log("Login Successful");
    }
    else if (loginun==username & loginpw!=password) {
        console.log("Password is wrong");
    }
    else if (loginun!=username & loginpw==password) {
        console.log("User Name is wrong");
    }
    else {
        console.log("User Name and Password are wrong");
    }
}