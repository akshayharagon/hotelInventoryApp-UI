// forEach, map, filter, reduce
// forEach takes callback as an input

// index can be used as an covention for any iterable

const numbers = [4, 5, 3, 2, 4, 5];
const users = [{
    name: 'akshay',
    age: 25
},
{
    name: 'sanket',
    age: 23
},
]

function myFunc(index, number){
    console.log(`index is ${index}, and number is ${number}`);
}

numbers.forEach(function(index, digit){
    console.log(`index is  ${digit}, and number is ${index}`);
});

users.forEach((user)=>{
    console.log(user.name)
})

users.forEach((user, index,)=>{
    console.log(index, user.name)
})