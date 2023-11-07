let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1

document.getElementById("main-title").textContent = "Welcome to DOM Toretto's Website!"

  // Part 2

document.body.style.backgroundColor = "lightblue"

  // Part 3

  document.getElementById("favorite-things").getElementsByTagName("li")[5].textContent = ""

  // Part 4

  document.querySelector(".special-title").style.fontSize = "2rem";

  // Part 5

  document.getElementById("past-races").getElementsByTagName("li")[3].textContent = ""

  // Part 6

  let pastRaces = document.getElementById("past-races")
  let newLi = document.createElement("li")
  newLi.appendChild(document.createTextNode("Atlanta"))
  pastRaces.appendChild(newLi)

  // Part 7

let newBlogPostDiv = document.createElement('div');
newBlogPostDiv.className = 'blog-post purple';

const h2Element = document.createElement('h1');
const h2Text = document.createTextNode('Atlanta');
h2Element.appendChild(h2Text);

const pElement = document.createElement('p');
const pText = document.createTextNode('WHY ARE THERE ZOMBIES HERE?? (WALKING DEAD REFERENCE ANYONE?)');
pElement.appendChild(pText);

newBlogPostDiv.appendChild(h2Element);
newBlogPostDiv.appendChild(pElement);

document.querySelector(".main").appendChild(newBlogPostDiv);


  // Part 8

  document.querySelector("#quote-title").addEventListener("click", randomQuote())

  // Part 9


    let blogPostDiv = document.querySelectorAll('.blog-post');

  blogPostDiv.forEach((evt) => {
    evt.addEventListener('mouseout', () => {
      evt.className = 'blog-post purple';
    });
    evt.addEventListener('mouseenter', () => {
      evt.className = 'blog-post red';
    });
  });

})
