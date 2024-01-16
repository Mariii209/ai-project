function displayAnswer(response) {
  new Typewriter("#answer", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 10,
  });
  let stopblinking = document.querySelector(".answer");
  stopblinking.classList.remove("blink");
}

function searchingAnswer(event) {
  event.preventDefault();

  let userInput = document.querySelector("#question-bar");
  console.log(userInput.value);

  let apiKey = "7f30420fc505ct92a4f1o960ab77843b";
  let prompt = `Generate a animal information that the user input ${userInput.value} `;
  let context = `You're a animal expert with so much knowledge about every animal in the world. Type everything in HTML format and only in 4 lines no more than four lines of code. No heading needed please. Add at the end of the response "SheCodes AI" inside a <strong> element. don't ask for users input. follow instrustions`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let processingDisplay = document.querySelector(".answer");
  processingDisplay.innerHTML = `Processing...`;

  axios.get(apiUrl).then(displayAnswer);
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", searchingAnswer);
