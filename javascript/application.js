console.log("👋 Hello from JavaScript to Batch #1565!");

// Object
const student = {
    // Keys & Values in Ruby & JS
    // :symbol => Ruby
    // :symbols are uniq, while strings are not
    // 👇🏻 JS only has strings, this is a string
    firstName: "Marcus",
    lastName: "Meier"
}

// p in Ruby is == console.log in JS
console.log(student.firstName)
console.log(student["lastName"])

student["lastName"] = "Müller";
console.log(student)

// emmas_family = ["Nadja", "Max"]
// OUTDATED var emmas_family = ["Nadja", "Max"]
const emmas_family = ["Nadja", "Max"]
let sum = 1

// A Method looks in Ruby
// def greeting(name)
//     puts "hello #{name} ✨"
// end

// Calling a method
// p greeting("emma")

// Functions
// OUTDATED
// function sayHi(name) {
//     return `Hi, ${name}!`;
// }

// Arrow Function
// const functionName = () => {};
// (parameter) => {}

const sayHello = (name) => {
    return `Hello, ${name}!`;
}

const functionName = (param) => {
    // console.log(param)
    return `hello ${param}`;
};

// Calling a function in JS
functionName("Emma")

// JS & Ruby in Objects & Hashes
// {
//     'name' => "emma"
//     'name2' => "pedro"
// }

// Anonymous functions: A function w/o a name 👻

// () => {
//   // SOMETHING SMART
// }

const capitalize = (word) => {
    const firstLetter = word[0].toUpperCase();
    const restOfWord = word.substring(1).toLowerCase();
    return firstLetter + restOfWord
};

// snake_case >> Ruby
// method_name

// lowerCamelCase >> JS

// UpperCamelCase
// class ModelName
// end


// .capitalize

const capitalizeName = (name) => {
    const firstLetter = name[0].toUpperCase();
    const restOfLetters = name.substring(1);
    return firstLetter + restOfLetters;
};

// players.insertAdjacentHTML("beforeEnd", "<li>Pedro</li>");
// players.insertAdjecentHTML("beforeend", "<li>Tarik</li>")



