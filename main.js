const speakerBox = document.querySelector(".speaker");
const messageBox = document.querySelector(".message");
let counter = 0;

let messages = [
  { speaker: "🐻", message: "Beth ydy'r enw?" },
  { speaker: "🕚", message: "Faint o'r gloch ydy hi? Un ar ddeg o'r gloch." },
  { speaker: "🐰", message: "Ga i siarad ag arth, os gwelwch yn dda?" },
  { speaker: "🌙", message: "Noswaith dda, arth" }
];

function getRandomMessage(messages) {
  let numberOfMessages = messages.length;
  let id = Math.floor(Math.random() * numberOfMessages);
  try {
    return messages[id];
  } catch (error) {
    return messages[numberOfMessages - 1];
  }
}

function setContent(messages, speakerBox, messageBox) {
  nextMessage = getRandomMessage(messages);
  speakerBox.textContent = nextMessage.speaker;
  messageBox.textContent = nextMessage.message;
}

function onAnimationEnd() {
  speakerBox.classList.remove("animation");
  messageBox.classList.remove("animation");
  setContent(messages, speakerBox, messageBox);
  window.setTimeout(() => {
    speakerBox.classList.add("animation");
  }, 100);
  window.setTimeout(() => {
    messageBox.classList.add("animation");
  }, 500);
}

messageBox.addEventListener("animationend", onAnimationEnd);

setContent(messages, speakerBox, messageBox);
speakerBox.classList.add("animation");
window.setTimeout(() => {
  messageBox.classList.add("animation");
}, 500);
