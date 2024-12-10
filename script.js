document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const skillsToTeach = document.getElementById('skillsToTeach').value.split(',');
    const skillsToLearn = document.getElementById('skillsToLearn').value.split(',');

    // Store the user info (you can later connect this to the backend)
    const userData = {
        name,
        email,
        skillsToTeach,
        skillsToLearn
    };

    // For now, just display the user data as a "match"
    displayMatch(userData);
});

function displayMatch(userData) {
    const matchResults = document.getElementById('match-results');
    matchResults.innerHTML = `
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Email:</strong> ${userData.email}</p>
        <p><strong>Skills to Teach:</strong> ${userData.skillsToTeach.join(', ')}</p>
        <p><strong>Skills to Learn:</strong> ${userData.skillsToLearn.join(', ')}</p>
    `;
    document.getElementById('matches').style.display = 'block';
}


const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

