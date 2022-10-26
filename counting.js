// count to ten 
// we need to specify
// where should we start counting?
// where is the FINISH line?
// what is STEP SIZE we should use?
    //    START       FINISH      STEP SIZE
// for ( let count = 1; count < 11; count += 1){

//     console.log(count)
// }

// CHALLENGE

// create a for loop that counts from 10 to 100 in step of 10
// use console.log to log out the numbers

// for (let i = 10; i <= 101; i = i+5){
    // console.log(i)
// }


// FOR LOOP AND ARRAYS

// let greeting = ["hey john,how are you doing",
// "how have you been doing with your family",
// "i am really missing your stay in club recently",
// "cool down and enjoy your holiday!"
// ]


// let newgreeting = "take care of your self" 

// greeting.push(newgreeting)

// console.log(greeting)

// greeting.pop()
// console.log(greeting)





 

// let cards =[7,3,9]

// for ( let i=0; i<cards.length; i +=1){

//     console.log(cards[i])
// }

// FOR, LOOP AND DOM
// let sentence = ["hello ","my ","name ","is ","per! "]

// for (let i = 0; i<sentence.length; i++){
//    document.getElementById("greetings").textContent += sentence[i]
// }

// let card = [1,2,3,4]

// let newcard = 5

// card.push(newcard)
// console.log(card)
// card.pop()
// console.log(card)


// RETURNING VALUES IN FUNCTION

// let player1time = 102
// let player2time = 107


// function racetime(){

// if (player1time < player2time){

//  return player1time
// }

// else if(player2time < player1time){

//     return player2time
// }

// else {

//     return (player1time)
// }
// }

// let race = racetime()
// console.log(racetime())



// CHALLENGE:write a function that return the total race time...
// call/invoke the function and store the returned value in a new variable....
// finally,log out the variable.

// let player1time = 102
// let player2time = 107

// function gettotalracetime(){

//     return player1time + player2time
// }

// console.log(gettotalracetime())



// GENERATING RANDOM NUMBERS USING MATH.RANDOM()

// let randomnumber = Math.random() * 6

// console.log(randomnumber)

// MATH.FLOOR

// let floorednumber = Math.floor(3.45632)
// console.log(floorednumber)

// USING MATH.RANDOM AND MATH.FLOOR TO CREATE A DICE

// let randomnumber = Math.floor(Math.random() * 7)
// console.log(randomnumber)


// try modify the expression so that we get a range from 1 to 6

// let randomnumber = Math.floor( Math.random()*6) + 1
// console.log(randomnumber)


// create a function, rolldice(), that returns a random number between 1 and 6

// let rolldice = Math.floor(Math.random()*6) + 1
// console.log(rolldice)



// create a function,rolldice(),that returns a random numberbtw 1 and 6

// function rolldice(){

//     let randomnumber = Math.floor(Math.random() * 6) + 1
//     return randomnumber
// }

// console.log(rolldice())


//The  LOGICAL AND OPERATOR


// let hascompletedcourse = true
// let givescertificate = true

// if(hascompletedcourse===true && givescertificate===true){

// generatecertificate()
// }

// function generatecertificate(){

//     console.log("generate certificate.....")
// }

// CHALLENGE
// create an if statement that checks that both variable are false

// let hassolvedchallenge = false
// let hashintsleft = false

// if (hassolvedchallenge === false && hashintsleft === false){

//     showsolution()
// }
// function showsolution(){

//     console.log("show solution....")
// }



// let hassolvedchallenge = false
// let hashintsleft = false

// if (hassolvedchallenge== false && hashintsleft==false){

    // showsolution()
// }
// function showsolution(){

    // console.log("show solution.....")
// }




















// THE LOGICAL OR OPERATOR

// let hascompletedcourse = false
// let givescertificate = true

// if(hascompletedcourse===false||  givescertificate===true){

// generatecertificate()
// }

// function generatecertificate(){

//     console.log("generate certificate.....")

// }

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true


// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups ===true){

//     reccomendmovie()
// }

// function reccomendmovie(){

//     console.log("hey, check out this new film we think you will like!")
// }




//  INTRO TO OBJECT

// let course = {
//     title: "learn css grid for free",

//     lessons: 16,

//     creator: "per harald borgen",

//     lenght: 63,

//     level: 2,
//     isfree: true,
//     tags:["html","css"]
// }

// console.log(course.creator)




// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation


// let airbnb = {

//     founder : "andre shark",

//     age : 53,

//     goodcustomerservice : true,

//     patner: [ "cocacola", "nike"],

//     sayhello: function(){

//         console.log("victor")

//     }}
// method are when function are attached to object

// airbnb.sayhello()

// console.log(airbnb.founder)



// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works


// let myself= {

//     name: "victor",
//     age: 75,
//     country: "nigeria",
//  intro: function(){

//         console.log(myself.name + " is " + myself.age + " years old and lives in "   +  myself.country  )

//  }}

//  myself.intro()



// IF ELSE


// let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable



// let sum = 12

// if (sum < 6){

// console.log("free")
// }

// else if (sum < 18){

//     console.log("child discount")
// }

// else if (sum < 27){

//     console.log("student discount")
// }

// else if (sum < 67){

//     console.log("full price")
// }

// else {

//     console.log("senior citizen discount")
// }


// LOOPS AND ARRAYS

let countries = ["china","india","USA","indonisia","pakistan"]

for (let i = 0; i = countries.length; i++){

    console.log(countries[i])
}



















// let age = 56


// if (age < 6){
//     console.log("free")
// }
// else if (age < 18){
//     console.log("child discount")
// }
// else if (age < 27){
//     console.log("student discount")
// }
// else if (age < 67){
//     console.log("full price")
// }
// else{
//     console.log("senior citizen discount")
// }


























































































































