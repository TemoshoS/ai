let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

document.getElementById("next").addEventListener("click", function () {
    changeSlide(1);
});

document.getElementById("prev").addEventListener("click", function () {
    changeSlide(-1);
});

function changeSlide(direction) {
    slides[currentSlide].classList.remove("active");
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

// AI Fake Response
document.getElementById("askAI").addEventListener("click", function () {
    let userInput = document.getElementById("userInput").value.trim();
    
    if (!userInput) {
        alert("Please enter a question!");
        return;
    }

    document.getElementById("aiResponse").innerText = "Thinking...";

    setTimeout(() => {
        let fakeResponses = [
            "AI helps automate repetitive tasks.",
            "Machine learning enables computers to learn from data.",
            "AI is used in chatbots, self-driving cars, and healthcare.",
            "AI raises ethical concerns, including bias and job automation.",
            "AI can improve cybersecurity by detecting threats."
        ];

        let randomResponse = fakeResponses[Math.floor(Math.random() * fakeResponses.length)];

        document.getElementById("aiResponse").innerText = randomResponse;
    }, 1500);
});
