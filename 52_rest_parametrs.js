// Rest parametr => while passing arguements using spread operator 
// rest Parameters(all left) are included in an array


function myFunc(a,b,...c){
    console.log(a,b,c)
}

myFunc(1,2,3,4,5,6);