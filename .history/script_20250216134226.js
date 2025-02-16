document.getElementById("askAI").addEventListener("click", function () {
    let userInput = document.getElementById("userInput").value;
    
    if (!userInput) {
        alert("Please enter a question!");
        return;
    }

    document.getElementById("aiResponse").innerText = "Thinking...";

    fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_OPENAI_API_KEY"
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: userInput,
            max_tokens: 100
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("aiResponse").innerText = data.choices[0].text.trim();
    })
    .catch(error => {
        document.getElementById("aiResponse").innerText = "Error fetching response!";
        console.error("Error:", error);
    });
});
