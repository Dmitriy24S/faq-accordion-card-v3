const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("show__text");
  });
});

// Box animation
const box = document.querySelector(".img__box-container");
const questionCard = document.querySelectorAll(".questions");
const moveBoxLeft = () => {
  box.style.left = "-579px";
};
const moveBoxRight = () => {
  box.style.left = "-543px";
};
// Box animation for dekstop view on page load
if (window.innerWidth > 1200) {
  questionCard.forEach((question) => {
    question.addEventListener("mouseover", moveBoxLeft);
    question.addEventListener("mouseleave", moveBoxRight);
  });
}
// Check for window resize and disable box animation for mobile view
window.addEventListener("resize", function () {
  if (window.innerWidth > 1200) {
    questionCard.forEach((question) => {
      question.addEventListener("mouseover", moveBoxLeft);
      question.addEventListener("mouseleave", moveBoxRight);
    });
  }
  if (window.innerWidth < 1200) {
    questionCard.forEach((question) => {
      question.removeEventListener("mouseover", moveBoxLeft);
      question.removeEventListener("mouseleave", moveBoxRight);
    });
  }
});
