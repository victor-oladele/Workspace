// let firstcard = 15
// let secondcard = 10

// let sum = firstcard + secondcard

// if (sum < 21){
//     console.log("do you want to draw a new card?")
// }
// else if (sum === 21){
//     console.log("wohoo! you have gotten a black jack!")
// }
// else if (sum > 21) {
//     console.log("you are out of the game!")
// }

//  let age = 19

//  if (age < 21){

//     console.log("you cannot enter the club!")
//  }
//  else {
//     console.log("welcome!")
//  }

// let age = 100

// if (age < 100){

//    console.log ("not eligible")
// }
// else if ( age === 100){

//    console.log("here is your birthday card from the king!")
// }

// else { 
//    console.log("not eligible,you have already gotten one")
// }


// let firstcard = 10
// let secondcard = 15
// let sum = firstcard + secondcard




// function startgame(){
// if (sum <= 20){

//    message = "do you want to draw a new card?"
// }

// else if (sum == 21){
//    message = "wohoo! you have got blackjack!"
// }

// else  {

//    message = "you are out of the game!"
// }


// document.getElementById("message").textContent = message
// document.querySelector("#sum").textContent += sum 
// document.getElementById("card").textContent += firstcard + " : " +  secondcard

// console.log(message)
// }



let firstcard = 12
let secondcard = 12
let cardsum = firstcard + secondcard

function startgame(){

if (sum <= 21){

   message = "do you still want another card?"
}
else if (sum === 21){

   message = " whohoo! you have won a black card!"
}

else {

   message ="you are out of the game!"
}

document.getElementById("message").textContent = message
document.getElementById("sum").textContent += cardsum
document.getElementById("card").textContent += firstcard + " " + secondcard
console.log(message)


}














































































































































