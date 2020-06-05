// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

//string.split
//if a retur 4
// else if e return 3
// else if i return 1
// else if o return 0
// edge case lowercase issue
 const coded  = (string) => {
   let splitArray = string.split("")
    let codedArray = splitArray.map((value) => {
      if (value === "a") {
        return "4"
      }
      else if (value === "e") {
        return "3"
      }
      else if (value === "i") {
        return "1"
      }
      else if (value === "o" ) {
        return "0"
      }
      else {
        return value
      }
    })
    return codedArray.join("")
    }

console.log(coded(secretCodeWord1));
console.log(coded(secretCodeWord2));


// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const filterA = (array) => {
  return array.filter((value) => value.includes("A") || value.includes("a"))
}
console.log(filterA(arrayOfWords));


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

const pokerFace = (array) => {
  let sortedArray = array.sort((a, b) => a - b)
  if (sortedArray[0] === sortedArray[1] && sortedArray[0] === sortedArray[2] && sortedArray[3] === sortedArray[4] && sortedArray[0] !== sortedArray[3]) {
  return "You have a Full House"
    }
  else if (sortedArray[0] === sortedArray[1] && sortedArray[2] === sortedArray[3] && sortedArray[2] === sortedArray[4] && sortedArray[0] !== sortedArray[3]) {
    return "You have a Full House"
      }
  else{
    return "you do not have a Full House"
  }
}
console.log(pokerFace(hand1));
console.log(pokerFace(hand2));
console.log(pokerFace(hand3));
