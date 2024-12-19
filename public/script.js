const socket = io();

// Send a message when the button is clicked
document.getElementById("send-btn").addEventListener("click", () => {
  const message = document.getElementById("message-input").value;
  if (message) {
    socket.emit("chat message", message);
    document.getElementById("message-input").value = ""; // clear input
  }
});

// Display incoming messages
socket.on("chat message", (msg) => {
  const messagesDiv = document.getElementById("messages");
  const newMessage = document.createElement("p");
  newMessage.textContent = msg;
  messagesDiv.appendChild(newMessage);
  messagesDiv.scrollTop = messagesDiv.scrollHeight; // scroll to the bottom
});
