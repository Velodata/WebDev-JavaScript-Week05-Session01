// Lesson 02 - Parsing JSON Strings

// 1. Define a JSON string (pretend it came from an API)
const jsonString = '{"firstName":"Charlie","lastName":"Brown","age":22,"isStudent":true}';

// 2. Parse the JSON string into a JavaScript object
const user = JSON.parse(jsonString);

// 3. Display the parsed data in the browser
const output = document.getElementById("json-output");
output.innerHTML = `
  <strong>Name:</strong> ${user.firstName} ${user.lastName} <br>
  <strong>Age:</strong> ${user.age} <br>
  <strong>Student:</strong> ${user.isStudent ? "Yes" : "No"}
`;

// 4. Also log to the console for debugging
console.log("Parsed User Object:", user);
