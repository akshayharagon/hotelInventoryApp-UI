const person ={
    name:'akshay',
    gender:'male',
    age:25
}

const getDetails = ({name, gender, age})=>{
    console.log(name, gender, age);
}

getDetails(person);