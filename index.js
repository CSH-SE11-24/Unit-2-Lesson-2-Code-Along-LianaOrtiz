// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.

let user = prompt("What's the day of the week?")
if (user === "Saturday" || user === "Sunday"){
  console.log("It's the weekend, yay!!")  
} else {
  console.log("It's a week day.... ew school")
} 



// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child, teen, adult, senior)
let age = prompt("What is your age?")
parseInt(age)
if (age <= 12){
  console.log("You are a child")
} else if (age <= 18){
  console.log("You are a teen")
}else{
  console.log("RIP you lived a good life")
}


// WHILE LOOPS
// Print 1 to 5
let i = 1
while (i <= 5){
  console.log(i)
  i++
}



// Print from a certain number to 1
let user2 = prompt("Enter a number")
user = parseInt(user)
while (user2 > 0){
  console.log(user)
  user2--
}



// Summing up to 5
let sum = 0 //We will be adding numbers to this variable
let counter = 1
while (counter <= 5){
  sum = counter + sum
  counter++
}
cosnoel.log("Sum of 1-5", sum)

// Using prompt
let mysteryStudent = "zyaire"
let user3 = prompt("Enter a students name")
while (mysteryStudent !== user3.toLowerCase()){
  //We have to resassign user to be the new valure
  user3 = prompt("Try again guess a different student")
}
console.log("NIce job")


