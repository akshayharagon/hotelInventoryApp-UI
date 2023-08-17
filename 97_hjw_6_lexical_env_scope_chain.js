// lexical environment, scope chain 

// while code execution phase if varibales couldnot find in local env
// then it will search in its lexical env  
 
const lastName ='haragon';
const printName = function(){
    const firstName ='akshay';
    console.log(firstName);
    console.log(lastName);
}

printName();