// Extract query parameters from the URL
const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const skill = params.get("skill");

// Set the profile name and skill on the page
document.getElementById("profile-name").innerText = name || "Unknown Name";
document.getElementById("profile-skill").innerText = skill || "Unknown Skill";

// Optional: Set a default profile picture based on the name or skill
const profilePic = document.getElementById("profile-pic");
const description = document.getElementById("profile-description");

if (name === "Emily Clark") {
    profilePic.src = "images/emily-clark-profile.jpg";
    description.innerText = "Emily is a Python expert and loves teaching programming to beginners.";
} else if (name === "David Lee") {
    profilePic.src = "images/david-lee-profile.jpg";
    description.innerText = "David is passionate about JavaScript and has created several projects using JS.";
} else if (name === "Sophia Williams") {
    profilePic.src = "images/sophia-williams-profile.jpg";
    description.innerText = "Sophia is a web development guru specializing in HTML, CSS, and front-end technologies.";
} else {
    profilePic.src = "images/default-profile.png";
    description.innerText = "This is a generic profile.";
}
