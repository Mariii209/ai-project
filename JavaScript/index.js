function displayAnswer(response) {
  let aiReply = response.data.answer;
  let userInput = document.querySelector("#question-bar");
  let answerElement = document.querySelector("#answer");

  answerElement.innerHTML = ""; // Reset

  updateChatHistory(userInput.value, aiReply);

  userInput.value = "";

  answerElement.classList.remove("blink");
}

function searchingAnswer(event) {
  event.preventDefault();

  let userInput = document.querySelector("#question-bar");
  console.log(userInput.value);

  let apiKey = "7f30420fc505ct92a4f1o960ab77843b";
  let prompt = `Answer the user's question: ${userInput.value}`;
  let context = `You're a helpful and friendly general AI assistant. Respond using only HTML, in no more than 4 lines. Keep it simple and conversational—no headings or prompts. End the response with "Talk-i-Bot AI" inside a <strong> element. Don’t ask the user for input. Follow instructions exactly.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let processingDisplay = document.querySelector(".answer");
  processingDisplay.innerHTML = `Processing...`;

  axios.get(apiUrl).then(displayAnswer);
}

let formElement = document.querySelector("form");
formElement.addEventListener("submit", searchingAnswer);

let chatHistory = [];

function updateChatHistory(userQuestion, aiResponse) {
  let chatHistoryElement = document.querySelector("#chat-history");

  // Create a new chat entry
  let chatEntry = document.createElement("div");
  chatEntry.classList.add("chat-entry");

  // User's question
  let userDiv = document.createElement("div");
  userDiv.classList.add("user");
  userDiv.textContent = `You: ${userQuestion}`;
  chatEntry.appendChild(userDiv);

  // AI's animated answer
  let aiDiv = document.createElement("div");
  aiDiv.classList.add("ai");
  chatEntry.appendChild(aiDiv);

  // Add the chat entry to the history before animation
  chatHistoryElement.appendChild(chatEntry);

  // Typewriter animation inside history
  new Typewriter(aiDiv, {
    strings: aiResponse,
    autoStart: true,
    cursor: null,
    delay: 10,
  });

  // Scroll to bottom
  chatHistoryElement.scrollTop = chatHistoryElement.scrollHeight;
}
