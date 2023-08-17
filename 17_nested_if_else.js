// let akshay = prompt("hi");

// prompt receives value as string 

let winningNumber = 5;
let guessNumber = +prompt("Guess the Number")

if(winningNumber === guessNumber){
    confirm("Yes you guessed correct number")
    console.log("Yes you guessed correct number")
}else{
    // console.log("Wrong guess")
    if(guessNumber < winningNumber){
        alert('guessed number is less than winning no')
        console.log("guessed number is less than winning no")
    }else {
        alert('guessed no is more than winning no')
        console.log('guessed no is more than winning no')
    }

}