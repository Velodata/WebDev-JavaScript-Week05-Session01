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
        // 2. insert missing-javascript here

        




        
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    });