function searchingAnswer(event) {
  event.preventDefault();

  new Typewriter("#answer", {
    strings: "The answer of your question",
    autoStart: true,
    cursor: null,
    delay: 50,
  });
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", searchingAnswer);
