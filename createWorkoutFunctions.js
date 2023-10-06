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

//Exerise Details
const numberOfSetsElement = document.createElement('div');
numberOfSetsElement.classList.add('Sets');
numberOfSetsElement.textContent = 'Sets';
const RPEElement = document.createElement('div');
RPEElement.classList.add('RPE');
RPEElement.textContent = 'RPE';
const REPElement = document.createElement('div');
REPElement.classList.add('REP');
REPElement.textContent = 'REP';

//





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
addExerciseDetails(squatElement);
addExerciseDetails(RDLElement);
addExerciseDetails(legExtensionElement);
addExerciseDetails(seatedCalfRaiseElement);
addExerciseDetails(legRaisesElement);

var editableTextElements = document.querySelectorAll('.editableText');
editableTextElements.forEach(function(editableText){


editableText.addEventListener("click", function() {
editableText.contentEditable = true;
editableText.focus();

editableText.addEventListener("blur", function(){
editableText.contentEditable = false;
})

})
});

var editWeightValue = document.querySelectorAll('.WeightValue');
editWeightValue.forEach(function(editableText){


editableText.addEventListener("click", function() {
editableText.contentEditable = true;
editableText.focus();

editableText.addEventListener("blur", function(){
editableText.contentEditable = false;
})

})
});


var elementsWithClassEditableText = document.getElementsByClassName('editableText');
elementsWithClassEditableText[0].textContent = '3-5';
elementsWithClassEditableText[1].textContent = '4-6';
elementsWithClassEditableText[2].textContent = '6-8';
elementsWithClassEditableText[3].textContent = '4-6';
elementsWithClassEditableText[4].textContent = '6-8';
var elementsWithClassRPEValue = document.getElementsByClassName('RPEValue');
elementsWithClassRPEValue[0].textContent = '8-9';
elementsWithClassRPEValue[1].textContent = '10';
elementsWithClassRPEValue[2].textContent = '10';
elementsWithClassRPEValue[3].textContent = '10';
elementsWithClassRPEValue[4].textContent = '10';
var elementsWithClassWeightValue = document.getElementsByClassName('WeightValue');
elementsWithClassWeightValue[0].textContent = 'lbs';
elementsWithClassWeightValue[1].textContent = 'lbs';
elementsWithClassWeightValue[2].textContent = 'lbs';
elementsWithClassWeightValue[3].textContent = 'lbs';
elementsWithClassWeightValue[4].textContent = 'lbs';
var elementsWithClassSetValue = document.getElementsByClassName('setValue');
elementsWithClassSetValue[0].textContent = '1';
elementsWithClassSetValue[1].textContent = '2';
elementsWithClassSetValue[2].textContent = '2';
elementsWithClassSetValue[3].textContent = '2';
elementsWithClassSetValue[4].textContent = '2';










}

function addExerciseDetails(workout) {
    const numberOfSetsElement = document.createElement('div');
    numberOfSetsElement.classList.add('Sets');
    numberOfSetsElement.textContent = 'Sets';
    const RPEElement = document.createElement('div');
    RPEElement.classList.add('RPE');
    RPEElement.textContent = 'RPE';    
    const RPEValue = document.createElement('div');
    RPEValue.classList.add('RPEValue');
    RPEElement.appendChild(RPEValue);
    const weightElement = document.createElement('div')
    weightElement.classList.add('weight');
    weightElement.textContent = 'Weight';
    const WeightValue = document.createElement('div');
    WeightValue.classList.add('WeightValue');
    weightElement.appendChild(WeightValue);
    const setValue = document.createElement('div');
    setValue.classList.add('setValue');
    numberOfSetsElement.appendChild(setValue);

    const REPElement = document.createElement('div');
    REPElement.classList.add('REP');
    REPElement.textContent = 'Reps';
    const editableTextDiv = document.createElement('div');
    editableTextDiv.classList = 'editableText';
    editableTextDiv.contentEditable = 'true';
    REPElement.appendChild(editableTextDiv);






    workout.appendChild(numberOfSetsElement);
    workout.appendChild(RPEElement);
    workout.appendChild(REPElement);
    workout.appendChild(weightElement);




}




    


export default loadPage;
