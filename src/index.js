function createWorkout(event) {
  event.preventDefault();

  new Typewriter("#workout-plan", {
    strings:
      "Short summary of things to take into account when focussing on this muscle(group) and list of exercises with explanation on how to perform them and number of reps/time",
    autoStart: true,
    delay: 1,
    cursor: "⚡",
  });
}

let workoutFormElement = document.querySelector("#workout-creater-form");
workoutFormElement.addEventListener("submit", createWorkout);
