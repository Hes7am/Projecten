const cards = getCards();
const people = getPeople();
let cardsHtml = "";
let peopleHtml = "";


/*****************
 * start hieronder
 */
 
  /**
    voorbeeld waarmee je 1 kaart kan toevoegen aan cardsHtml met een for loop
    Deze moet je in opdracht 1 en 2 verbouwen
  */
  for (let i = 0; i< cards.length; i++) {
    cardsHtml += `<div class="card-container">
    <div class="card">
      <h5 class="title">${ cards[i].title }</h5>
      <p>${ cards[i].text }</p>
    </div>
  </div>`;
  }

/**
 * Opdracht 1
 * zorg dat je de for loop zo ombouwd dat deze 1 kaart aan cardsHtml met de generateCardFunction
 * for(){
 * 	carsHtml += generateCard()
 * }
 */


/**
 * Opdracht 2
 * Zorg ervoor dat de generateCard functie een kaartje aanmaakt
 * terwijl hij gebruik maakt van de volgende functies: 
 * 	- generateCardTitle()
 *  - generateCardText()
 */

/**
 * Opdracht 3
 * Zorg dat je het zelfde doet wat je in opdracht 1 en 2 hebt gedaan
 * maar dan met de people array zie de png in de map van hoe deze eruit ziet.
 * 
 * 1. Je krijgt dan 1 forloop die over de people array loopt
 * 2. Deze forloop gebruikt steeds 1 functie generatePeopleCard(peopleInfo)
 * 3. De genereerpeopleCard gebruikt dan 4 andere functies om resultaat op te bouwen.
 */

  function generateCard(cardInfo) {
    return 

  }


  function generatePeopleCard(peopleInfo) {

  }

/*********************
 * don't touch below
 *********************



/**
 * function to generate a cardTitle
 */
  function generateCardTitle(title) {
    return `<h5 class="title">${title}</h5>`;
  }

/**
 * function to generate a cardImg
 */
function generateCardImg(imgLink) {
  return `<img class="img" src="${imgLink}" />`;
}

/**
 * function to generate a cardButton
 */
function generateCardButton(link = "#link", tekst = "Tekst") {
  return `<a class="button" href="${link}">${tekst}</a>`;
}

/**
 * function to generate a cardText.
 */
  function generateCardText(text) {
    return `<p class="text">${text}</p>`;
  }

/** 
 * vervang de inhoud van het element met idcards
 * met de inhoud van cardsHtml.
 */
document.getElementById("cards").innerHTML = cardsHtml;
document.getElementById("people").innerHTML = peopleHtml;


/**
 * functie die alle kaarten als een array terug geeft
 */
function getCards() {
  return [
    { "title": "Card1", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
    { "title": "Card2", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
    { "title": "Card3", "text": "wrong card" },
    { "title": "Card4", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
    { "title": "Card5", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
    { "title": "Card6", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
    { "title": "Card7", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
    { "title": "Card8", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
    { "title": "Card9", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
    { "title": "Card10", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
    { "title": "Card11", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem" },
    { "title": "Card12", "text": "Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut dolorem Quod sint culpa est numquam. Voluptas labore non accusantium quam non dicta quia. Non perspiciatis molestiae cumque. Accusamus commodi rem nam eaque ut doloremy" },
  ];
}

/**
 * functie die alle personen als een array terug geeft
 */
function getPeople() {
  return [
    { "img": "./icon.png", "title": "John Doe", "link": "#link1",  "linkText": "link1", "text": "Runs in weekends" },
    { "img": "./icon.png", "title": "John Doe", "link": "#link2",  "linkText": "link2", "text": "Swam and downed last week" },
    { "img": "./icon.png", "title": "Jane Doe", "link": "#link3",  "linkText": "link3", "text": "Painted her nails pink" },
    { "img": "./icon.png", "title": "Jane Doe", "link": "#link4",  "linkText": "link4", "text": "Did a cuddle workshop" },
    { "img": "./icon.png", "title": "John Doe", "link": "#link5",  "linkText": "link5", "text": "Loves cats" },
    { "img": "./icon.png", "title": "John Doe", "link": "#link6",  "linkText": "link6", "text": "Loves Dogs" },
    { "img": "./icon.png", "title": "Jane Doe", "link": "#link7",  "linkText": "link7", "text": "Ran a 0.001 mile before exaustion" },
    { "img": "./icon.png", "title": "Jane Doe", "link": "#link8",  "linkText": "link8", "text": "Is celebrating bike day" },
    { "img": "./icon.png", "title": "John Doe", "link": "#link9",  "linkText": "link9", "text": "Eats grass" },
    { "img": "./icon.png", "title": "John Doe", "link": "#link10", "linkText": "link10", "text": "Pets snakes" },
    { "img": "./icon.png", "title": "Jane Doe", "link": "#link11", "linkText": "link11", "text": "Eats naughty students" },
    { "img": "./icon.png", "title": "Jane Doe", "link": "#link12", "linkText": "link12", "text": "Climbs trees" },
  ];
}