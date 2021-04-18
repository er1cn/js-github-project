//Become familiar with the REST API
//Calls should include header
//Accept: application/vnd.github.v3+json
//Spend 10 mins trying out to out the api then search on Google
//tool:postman-service-enters url-sends back what the response looks like
//create a function that takes in a value and searches the github for that name
//add event listener to my submit button
//take the value of the input box

//

// const userList = document.getElementById('user-list')
// const repoList = document.getElementById('repos-list')

// function fetchGithubByValue(value){
//     fetch(`https://api.github.com/search/users?q=${value}`, {
//         headers: {
//             "Accept" : "application/vnd.github.v3+json"
//         }
//     })
//     .then(res => res.json())
//     .then(json => json.items.forEach((user) => {
//         // appendLi(createLi(user))
//         let newLi = document.createElement("li");
//         newLi.innerHTML = user.login;
//         document.getElementById("user-list").appendChild(newLi);
//         let newLi2 = document.createElement("li");
//         newLi2.innerHTML = user.avatar
//         document.getElementById("repos-list").appendChild(newLi2);
//     }))
// }
// const submitBtn = document.getElementById('submit-button')
// const searchBox = document.getElementById('search')
// submitBtn.addEventListener('click',(e) => {
//     e.preventDefault()
//     fetchGithubByValue(searchBox.value)
// })

var user;
document.addEventListener('submit',(event)=> {
user = document.getElementById('search').value 

alert(user);
event.preventDefault();

return fetch("https://api.github.com/search/users?q=" +user)
    .then(resp => resp.json())
    .then(json => {
         for (const product of json.items) {

            let newLi = document.createElement("li");
            newLi.innerHTML = product.login;
            document.getElementById("user-list").appendChild(newLi);
            let newLi2 = document.createElement("li");
            newLi2.innerHTML = product.avatar_url;
            document.getElementById("repos-list").appendChild(newLi2);

         }

    })

})