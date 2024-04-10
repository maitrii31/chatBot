function getBotResponse(input)
{
    if (input == "rock"){
        return "paper";
    }
    else if(input =="paper"){
        return "scissors";
    }
    else if(input == "scissors"){
        return "rock";
    }

    if (input == "Hello"){
        return "Hello there";
    }
    else if(input == "goodbye"){
        return "Talk to you later";
    }
    else {
        return "Try asking something else";
    }
};

const defaultResponses = [
    "I'm sorry, I didn't understand that. Can you please rephrase your question?",
    "I'm not sure how to respond to that. Can you please try again?",
    "I'm having trouble understanding your question. Can you please clarify?",
    "I'm not sure what you're asking. Can you please provide more context?",
    "I'm not able to respond to that. Can you please try a different question?"
  ];
  
  function getBotResponse(userText) {
    // Check if the user's input matches any of the expected inputs
    for (let i = 0; i < expectedInputs.length; i++) {
      if (userText.toLowerCase() === expectedInputs[i].toLowerCase()) {
        // Return the corresponding response
        return responses[i];
      }
    }
  
    // If no response is found, return a random default response
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }

  const expectedInputs = [
    "hello",
    "hi",
    "how are you",
    "what's up",
    "how can you help me",
    "need to ask you anything",
    "can I ask you something"
  ];
  
  const responses = [
    "Hello! How can I help you today?",
    "Hi there! What can I do for you?",
    "I'm doing well, thank you! How about you?",
    "Not much, just here to help you! How can I assist you today?",
    "I'm here to help you with any questions or concerns you have! What can I do for you?"
  ];
