// STRING
const a = "I";
const b = "am" ;
const c = "happy" ;
const abc = a + " " + b + " " + c ;
const abc2 = `${a} ${b} ${c}`
console.log (abc)
console.log (abc2)

// NUMBER
// INTERGER
// FLOAT

const num = 5;
const num2 = 9;

const sum = num + num2;
const product = num * num2;
const quotient = num2 / num;
const sqr = num ** 2; // num * num
const pwr3 = num ** 3 // num * num * num
const root2 = num2 ** (1/2);


console.log("--------- RESULTS-----------")
console.log({
    sum,
    product,
    quotient,
    sqr,
    pwr3,
    root2,
})

//ARRAY (an ITTERABLE)
const arr = [2, "obinna", "Nigeria", [9, "ten", [78]]];
const shoppingListMen = ["boxers", "singlets", "data", "pants", "shoes", "mummy's shoes"];
const shoppingListLadies = ["bags", "ear rings", "shoes", "perfume", "mack-up box"];

// how to access items in array?
console.log("----------ACCESSING ARRAY---------------")
console.log(shoppingListLadies[0]);
console.log(shoppingListMen[2]);

const perf = shoppingListLadies[3];
console.log(perf)


//length of array
console.log("------------length of array-----------")
console.log(shoppingListLadies.length);
console.log(shoppingListMen.length)

//SET
// Set is a kind "array" with unique items
console.log("------------set text-----------")
const unique_items = new Set([4, 4, 4, 4, 6, 8, 2, 2, 2, 2])
console.log ({unique_items})
// set is used for simple deduping


// DICTIONARY (OBJECT)
// KEY-VALUE PAIRS
// WE CREATE DICTIONARIES USING A CURLY BRACE

console.log("------------DICTIONARY-----------")
const contact_detials = {
    firstName: "Fabrice",
    lastName: "Obinna",
    email: "fabio@gmail.com",
    phoneNo: "+229-43674532",
    address: "C/482 Jericho, Country",
    country: "Benin Republic",
}


console.log(contact_detials.email); // console.log(contact_details["email"])
console.log(contact_detials["phoneNo"]) // console.log(contact_detials.phoneNo);