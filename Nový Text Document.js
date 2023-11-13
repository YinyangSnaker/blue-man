let userName = prompt ("What your name")
let age = prompt("Please enter your age:");
if (age >= 18) {
    alert("Hello, " + userName + " You are 18 or higher");
    window.location.href = "Nový Text Document.html";
} else {
    alert("Hello, " + userName + " You are underage");
    window.location.href = "index.html";
} 