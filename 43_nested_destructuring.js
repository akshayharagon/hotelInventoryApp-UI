const users=[
    {
        userId:1,
        name:'akshay',
        gender:'male'
    },
    {
        userId:2,
        name:'sanket',
        gender:'male'
    },
    {
        userId:3,
        name:'anita',
        gender:'female'
    }
]

const [user1, user2, user3]= users;
console.log(user1)

const [{name:user1Name}, , {gender}]= users;
console.log(user1Name)

