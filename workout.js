const content = document.getElementById('content');
const squatElement = document.createElement('div');
squatElement.classList.add('workout');
const RDLElement = document.createElement('div');
RDLElement.classList.add('workout');
const legExtensionElement = document.createElement('div');
legExtensionElement.classList.add('workout');
const seatedCalfRaiseElement = document.createElement('div');
seatedCalfRaiseElement.classList.add('workout');
const legRaisesElement = document.createElement('div');
legRaisesElement.classList.add('workout');
const inputElement = document.createElement('input');

function loadPage() {

content.appendChild(squatElement);
content.appendChild(RDLElement);
content.appendChild(legExtensionElement);
content.appendChild(seatedCalfRaiseElement);
content.appendChild(legRaisesElement);  
squatElement.textContent = 'Squat';
RDLElement.textContent = 'Romanian Deadlift';
legExtensionElement.textContent = 'Leg Extension';
seatedCalfRaiseElement.textContent = 'Seated Calf Raise';
legRaisesElement.textContent = 'Leg Raises';


}

export default loadPage;
