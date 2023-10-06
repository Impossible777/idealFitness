

function loadHomePage() {

const content = document.querySelector('#content');

//Home Welcome
const homeWelcome = document.createElement('div');
homeWelcome.classList.add('homeWelcome');
homeWelcome.textContent = 'Welcome to Ideal Fitness';

//User Selection
const userSelection = document.createElement('div');
userSelection.classList.add('userSelection');
userSelection.textContent = 'Please select a user';


//User Buttons
const michaelButton = document.createElement('button');
michaelButton.classList.add('Michael');
const beccaButton = document.createElement('button');
beccaButton.classList.add('Becca');
const chrisButton = document.createElement('button');
chrisButton.classList.add('Chris');



content.appendChild(homeWelcome);
content.appendChild(userSelection);
content.appendChild(michaelButton);
content.appendChild(beccaButton);
content.appendChild(chrisButton);
michaelButton.textContent = 'Michael';
beccaButton.textContent = 'Becca';
chrisButton.textContent = 'Chris';




}

export default loadHomePage;
