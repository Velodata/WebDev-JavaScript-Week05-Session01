// Lesson 03 - Working with JSON Arrays

// 1. Define a JSON string that contains an array of users
const jsonString = `[
{ "firstName": "Anna", "lastName": "Taylor", "age": 24 },
{ "firstName": "Brian", "lastName": "Nguyen", "age": 31 },
{ "firstName": "Chloe", "lastName": "Smith", "age": 29 }  
 ]`;

// 2. Parse the JSON string into a JavaScript array
const users = JSON.parse(jsonString);

// 3. Select the output element
const output = document.getElementById("json-output");

// 4. Build HTML content using the parsed array
let html = "<h2>User List</h2><ul>";
users.forEach(user => {
    html += `<li>${user.firstName} ${user.lastName} (Age: ${user.age})</li>`;
});
html += "</ul>";

// 5. Inject the HTML into the DOM
output.innerHTML = html;

// 6. Log the array to the console
console.log("Users Array:", users);