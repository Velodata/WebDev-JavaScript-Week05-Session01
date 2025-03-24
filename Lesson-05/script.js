// Lesson 05 - Fetching from a Public API

// 1. Fetch a random cat fact from the Cat Facts API
fetch("https://catfact.ninja/fact")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        // 2. Display the cat fact in the browser
        const output = document.getElementById("json-output");
        output.innerHTML = `<p><strong>Cat Fact:</strong> ${data.fact}</p>`;
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
