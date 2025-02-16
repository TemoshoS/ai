document.getElementById("askAI").addEventListener("click", function () {
    let userInput = document.getElementById("userInput").value.trim();

    if (!userInput) {
        alert("Please enter a question!");
        return;
    }

    document.getElementById("aiResponse").innerText = "Thinking...";

    setTimeout(() => {
        let fakeResponses = [
            "AI is transforming industries by automating repetitive tasks.",
            "Machine learning is a subset of AI that allows computers to learn from data.",
            "AI is used in chatbots, self-driving cars, and healthcare.",
            "Ethical concerns in AI include bias, privacy, and job automation.",
            "AI can enhance cybersecurity by detecting threats in real-time.",
            "Deep learning is a powerful AI method inspired by the human brain."
        ];

        let randomResponse = fakeResponses[Math.floor(Math.random() * fakeResponses.length)];

        document.getElementById("aiResponse").innerText = randomResponse;
    }, 1500);
});
