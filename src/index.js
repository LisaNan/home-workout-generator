function displayWorkoutPlan(response) {
  new Typewriter("#workout-plan", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "⚡",
  });
}

function createWorkout(event) {
  event.preventDefault();

  let muscleGroup = document.querySelector("#muscle-group");
  console.log(muscleGroup.value);
  let apiKey = "beac6ctb368bo560b6dfbc1164f16438";
  let prompt = `Create a home workout plan of two rounds of 15 minutes with a maximum of 7 exercises per round, no equipment needed and focusing only on strength exercises and only targeting the ${muscleGroup.value}muscles.`;
  let context = `You are a skilled AI assistant that has been trained as a physiotherapist and personal trainer. You are specialised in creating workout plans targeting only the requested musclegroup. Be short and to the point, whilst giving enough explanation for people to be able to follow along without extra research. Display your answer first giving a short summary of things to take into account and be mindfull of when executing these exercises, then listing the exercises with explanation and amount of time spent per exercise. Provide your answer following basic HTML structure without headers. Wrap the exercise names in a strong element. Make sure to have two br elements after the summary and one br element after every exercise.
  Example:
    Make sure to have the proper form and perform the movements in a controlled manner. Focus on your breathing, exhale during the exertion phase and inhale during the relaxation phase. Keep your core engaged and your back straight. 
    1. bodyweight squats (2 min): explanation
    2. reverse lunges (1 min): explanation
    3. side lunges (2 min): explanation
    Take 2 minutes of rest and start the second round`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayWorkoutPlan);

  let workoutPlan = document.querySelector("#workout-plan");
  workoutPlan.innerHTML = "Your workout plan is being created... 🤩";
}

let workoutFormElement = document.querySelector("#workout-creater-form");
workoutFormElement.addEventListener("submit", createWorkout);
