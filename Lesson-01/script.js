// Lesson 01 - Introduction to JSON Syntax

// 1. insert missing-javascript here








// 2. Convert the object into a JSON string
const jsonString = JSON.stringify(user, null, 2);

// 3. Display the JSON string in the browser
const output = document.getElementById("json-output");
output.textContent = jsonString;

// 4. Log the result to the console too
console.log("JSON Output:\n", jsonString);



