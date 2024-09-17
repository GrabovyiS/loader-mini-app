import testAssignmentLoader from "./test-assignment-loader.mjs";

const loaderContainer = document.querySelector(".loader-container");
const loader = testAssignmentLoader(loaderContainer, 50, {
  initialAnimated: true,
});

const valueInput = document.querySelector("#value");

valueInput.addEventListener("keydown", (e) => {
  if (e.key === "-" || e.key === "+") {
    e.preventDefault();
  }
});

valueInput.addEventListener("input", (e) => {
  if (e.target.value > 100) {
    e.target.value = 100;
  }
  if (e.target.value < 0) {
    e.target.value = 0;
  }

  loader.setValue(e.target.value);
});

const animateInput = document.querySelector("#animate");
animateInput.addEventListener("change", (e) => {
  loader.setAnimated(e.target.checked);
});

const hideInput = document.querySelector("#hide");
hideInput.addEventListener("change", (e) => {
  loader.setHidden(e.target.checked);
});
