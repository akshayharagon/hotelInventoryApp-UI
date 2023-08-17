// synchronous vs asynchronous programming


// JS itself is synchronous programming language until integrating with async and wait

// setTimeout(functionName, time_in_milli_seconds)

// by applying setTimeout() function(given as 1st arg) will execute after the delay(given as 2nd arg)

console.log('start')
setTimeout(()=>{
    console.log('inside setTimeout')
}, 1000)
console.log('end')

// here using setTimeout is making the program asynchronous
// setTimeout is provided by browser not by JS
// so it will be executed by browser only with given delay, until that JS executes rest code
// callback functions by browser will wait in callback queue, event loop will let them enter into callstack
// eventhough delay is 0 sec, callback queue from browser has to wait till JS finishes executing its whole code in callstack

// setTimeout() always returns id which will be unique for each setTimeout and will be handled by browser
// we can use clearTimeout(id) to exclude setTimeout callback
