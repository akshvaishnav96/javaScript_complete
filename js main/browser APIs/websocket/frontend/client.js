socket = io("http://localhost:3000");

const form = document.getElementById("form");
const messageInput = document.getElementById("input");
const messageContainer = document.querySelector(".main");
const audio = new Audio("ting.mp3");

const append = (message, position) => {
  const msgelem = document.createElement("div");
  const para = document.createElement("p");
  para.innerText = message;
  msgelem.appendChild(para);
  msgelem.classList.add("msg");
  msgelem.classList.add(position);
  messageContainer.append(msgelem);

  if (position == "left") {
    audio.play();
  }
};

const name = prompt("Enter your name to join");
socket.emit("new-user-connect", name);

socket.on("user-joined", (name) => {
  append(`${name} joined the chat`, "right");
});

socket.on("receive", (data) => {
  append(`${data.name}: ${data.message}`, "left");
});

socket.on("left", (name) => {
  append(`${name} left the chat`, "right");
});

form.addEventListener("submit", (elem) => {
  elem.preventDefault();
  const message = messageInput.value;
  append(`You: ${message}`, "right");
  socket.emit("send", message);
  messageInput.value = "";
});
