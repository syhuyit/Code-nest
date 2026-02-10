document.querySelectorAll(".question").forEach((question) => {
  const answers = question.querySelectorAll("input[type='radio']");

  answers.forEach((answer) => {
    answer.addEventListener("change", () => {
      // reset trạng thái cũ
      answers.forEach((a) => {
        a.parentElement.classList.remove("correct", "wrong");
      });

      if (answer.dataset.correct === "true") {
        answer.parentElement.classList.add("correct");
      } else {
        answer.parentElement.classList.add("wrong");

        // hiện đáp án đúng
        answers.forEach((a) => {
          if (a.dataset.correct === "true") {
            a.parentElement.classList.add("correct");
          }
        });
      }
    });
  });
});

const form = document.querySelector(".quiz-form");
form.addEventListener("reset", () => {
  document.querySelectorAll(".question label").forEach((label) => {
    label.classList.remove("correct", "wrong");
  });
});
