const user = {
    name: "Ryan",
    lastname: "Ray",
    nickname: "Ray123",
    age: 20,
    hobbies: ["run", "code", "eat"],
    addres:{
        street: "a123 Main St",
        city: "New York"
    },
    married: true, 
    greet(){
        return "Hello World"
    }, 
    something(){
        return
    }
}

const friends = [
    {
        name: "Joe", nickname: "Joe123"
    },
    {
        name: "Marcos", nickname: "Marcos123"
    },
    {
        name: "Juan", nickname: "Juan123"
    },
    {
        name: "Jose", nickname: "Jose123"
    },
]

user.friends = friends

let output = ""
for (let i = 0; i < friends.length; i++){
    output = output + `<li>${friends[i].name} - ${friends[i].nickname}</li>`

}

fetch("/user.json")
    .then(res =>{
        return res.json()
    })
    .then(data =>{
        document.getElementById("people").innerHTML = `<h1> ${data.name} ${data.lastname}</h1>`
    })




// console.log(JSON.stringify(user))





let postsElements = ""


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res =>{
        return res.json()
    })
    .then( data =>{
        for ( let i = 0; i < data.length; i++){
            postsElements += `<li>${data[i].userId} - ${data[i].title}</li>`
        }
        document.getElementById("posts").innerHTML = postsElements
    })

    
