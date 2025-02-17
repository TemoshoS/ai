let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

document.getElementById("nextBtn").addEventListener("click", function () {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
});

document.getElementById("prevBtn").addEventListener("click", function () {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
});

document.getElementById("chatIcon").addEventListener("click", function () {
    document.getElementById("chatBox").style.display = "flex";
});

document.getElementById("closeChat").addEventListener("click", function () {
    document.getElementById("chatBox").style.display = "none";
});

document.getElementById("sendChat").addEventListener("click", function () {
    let userInput = document.getElementById("chatInput").value.trim();
    let chatBody = document.querySelector(".chat-body");
    
    if (!userInput) {
        alert("Please enter a message!");
        return;
    }
    
    // Display user message
    let userMessage = document.createElement("p");
    userMessage.style.textAlign = "right";
    userMessage.style.color = "#20C997";
    userMessage.innerText = "You: " + userInput;
    chatBody.appendChild(userMessage);
    
    document.getElementById("chatInput").value = "";
    
    // Simulate AI response
    setTimeout(() => {
        let fakeResponses = [
            "AI helps automate repetitive tasks.",
            "Machine learning enables computers to learn from data.",
            "AI is used in chatbots, self-driving cars, and healthcare.",
            "AI raises ethical concerns, including bias and job automation.",
            "AI can improve cybersecurity by detecting threats."
        ];
        
        let randomResponse = fakeResponses[Math.floor(Math.random() * fakeResponses.length)];
        
        let aiMessage = document.createElement("p");
        aiMessage.style.textAlign = "left";
        aiMessage.style.color = "#333";
        aiMessage.innerText = "AI: " + randomResponse;
        chatBody.appendChild(aiMessage);
        
        chatBody.scrollTop = chatBody.scrollHeight; 
    }, 1500);
});
