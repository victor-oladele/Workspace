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



let firstcard = 10
let secondcard = 11

cardss = [firstcard, secondcard]

let sum = firstcard + secondcard
// let allcard = firstcard + " " + secondcard





function startgame(){

   document.getElementById("card").textContent = "card:" + cardss[0] + " " + cardss[1] 

   // for (let i = 0; i < cardss.lenght; i++ ){
      // document.getElementById("card").textContent += cardss[i] + " "
   // }
   document.getElementById("sum").textContent = "sum:" + sum

   

   
   
   
   if (sum <= 20){
      
      message = "do you still want another card?"
   }
   else if (sum === 21){
      
      message = " whohoo! you have won a black card!"
   }
   
   else {
      
      message ="you are out of the game!"
   }
   
   
   document.getElementById("paragraph").textContent = message
   console.log(message)

 


}

function newgame(){

   // console.log("draw a new card from the deck!")

   let card = 10
   sum += card

   // push the card to the card array

   cardss.push(card)
   console.log(cardss)

// document.getElementById("card").textContent = sum = ""

   startgame()
   console.log("draw a new card from the deck!")

}










































































































































