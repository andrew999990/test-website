function sendMessage() {
  const userInput = document.getElementById('userInput');
  const chatMessages = document.getElementById('chatMessages');

  if (userInput.value.trim() === '') return; // Prevent empty messages

  // Create and display user message
  const userMessage = document.createElement('p');
  userMessage.classList.add('user-message');
  userMessage.textContent = userInput.value;
  chatMessages.appendChild(userMessage);

  // Simple bot response with a small delay
  setTimeout(() => {
    const botMessage = document.createElement('p');
    botMessage.classList.add('bot-message');
    
    // Sample dynamic response based on user input
    let botResponse = "I'm a bot, but I'm here to chat!";
    if (userInput.value.toLowerCase().includes('hello')) {
      botResponse = "Hello! How can I help you today?";
    } else if (userInput.value.toLowerCase().includes('bye')) {
      botResponse = "Goodbye! Have a great day!";
    }
    
    botMessage.textContent = botResponse;
    chatMessages.appendChild(botMessage);

    // Scroll to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000); // Simulate a slight delay for the bot response

  // Clear input field and refocus
  userInput.value = '';
  userInput.focus(); // Refocus input field
}
