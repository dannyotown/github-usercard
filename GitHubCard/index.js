/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
let cardquery = document.querySelector('.cards')
function getRequest(username){
axios.get(`https://api.github.com/users/${username}`)
  .then((response)=>{
    var person = {
      pic:response.data.avatar_url,
      name: response.data.name,
      login:response.data.login,
      location:response.data.location,
      url:response.data.url,
      followers: response.data.followers,
      following: response.data.following,
      bio:response.data.bio
    }
    cardquery.appendChild(cardCreation(person));
  })
}
getRequest('dannyotown');

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];
followersArray.forEach((ele)=>{
  getRequest(ele);
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function cardCreation(person){
let card = document.createElement('div')
card.classList.add('card')

let img = document.createElement('img')
img.src = person.pic;
card.appendChild(img)

let cardInfo = document.createElement('div')
cardInfo.classList.add('card-info')
card.appendChild(cardInfo)

let h3  = document.createElement('h3')
h3.classList.add('name')
h3.textContent = person.name
cardInfo.appendChild(h3)

let para = document.createElement('p')
para.classList.add('username')
para.textContent = person.login
cardInfo.appendChild(para)

let location = document.createElement('p')
location.textContent = `Location: ${person.location}`
cardInfo.appendChild(location)

let prof = document.createElement('p')
prof.textContent = 'Profile:'
let alink = document.createElement('a')
alink.textContent = person.url;
prof.appendChild(alink)
cardInfo.appendChild(prof)

let followers = document.createElement('p')
followers.textContent = `Followers: ${person.followers}`
cardInfo.appendChild(followers)

let following = document.createElement('p')
following.textContent = `Following: ${person.following}`
cardInfo.appendChild(following)

let bio = document.createElement('p')
bio.textContent = `Bio: ${person.bio}`
cardInfo.appendChild(bio)
return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
