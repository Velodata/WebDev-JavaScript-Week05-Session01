// Lesson 04 - Loading External JSON with fetch()

// 1. Fetch the external data.json file
fetch("data.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        // 2. Display the data on the page
        const output = document.getElementById("json-output");
        let html = "<ul>";
        data.forEach(item => {
            html += `<li>${item.firstName} (${item.age} years old)</li>`;
        });
        html += "</ul>";
        output.innerHTML = html;
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    });