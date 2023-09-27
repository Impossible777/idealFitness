var selectInput = document.getElementById("Workouts");
var addWorkout = document.getElementById("addWorkout");
var workoutInput = document.getElementById("workoutInput");


addWorkout.addEventListener("click", addWorkoutClick)

function addWorkoutClick () {
    var addWorkoutValue = workoutInput.value;
    selectInput.innerHTML = addWorkoutValue;
    workoutInput.value = ""
    


}

