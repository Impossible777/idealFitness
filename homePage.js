import loadPage from "./createWorkoutFunctions";


function loadHomePage() {

const content = document.querySelector('#content');

//Home Welcome
const homeWelcomeContent = document.createElement('div');
homeWelcomeContent.classList.add('homeWelcomeContent');
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


content.appendChild(homeWelcomeContent);
homeWelcomeContent.appendChild(homeWelcome);
homeWelcomeContent.appendChild(userSelection);
homeWelcomeContent.appendChild(michaelButton);
homeWelcomeContent.appendChild(beccaButton);
homeWelcomeContent.appendChild(chrisButton);
michaelButton.textContent = 'Michael';
beccaButton.textContent = 'Becca';
chrisButton.textContent = 'Chris';

//Event Listeners
michaelButton.addEventListener('click', () => {
    loadPage();
    homeWelcomeContent.remove();
    homeWelcome.remove();
    userSelection.remove();
    michaelButton.remove();
    beccaButton.remove();
    chrisButton.remove();
});

beccaButton.addEventListener('click', () => {
    loadPage();
    homeWelcome.remove();
    userSelection.remove();
    michaelButton.remove();
    beccaButton.remove();
    chrisButton.remove();
});

chrisButton.addEventListener('click', () => {
    loadPage();
    homeWelcome.remove();
    userSelection.remove();
    michaelButton.remove();
    beccaButton.remove();
    chrisButton.remove();
});


test();
const currentOrigin = window.location.origin;
console.log(currentOrigin);



}

export default loadHomePage;
