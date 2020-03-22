// question 1
var name = "anders"


// question 2
var person = {
    name: "anders",
    age: "22"
};


// question 3
var outOfStock= true;

if(outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}


// question 4
var numbers = ["1", "2", "3", "4", "5"];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

// question 5
for(var i = 15; i <= 25; i++) {
    console.log(i);
}


// question 6
for(var i = 5; i < 20; i++) {
    console.log(i);
}


// question 7
var persons = [
    // first item
    {
        name: "Kim Andre",
        age: 21,
        boy: true
    },
    // second item
    {
        name: "Gunnvei",
        age: 76,
        boy: false
    }
];

for(var i = 0; i < persons.length; i++) {
    console.log(persons[i].age);
    console.log(persons[i].boy);
}

// question 8
function whatIDontLike(word) {
    console.log("I don't like " + word);
}

whatIDontLike("tomatoes");


// question 9
function names(firstName, lastName) {
    var fullName = firstName + lastName;
    console.log(fullName)
}
names("Egil", "Thuen")


// question 10
var emptyArray = [age(22)];
function age(number) {
    console.log("My age is " + number);
} 