// Dark Mode Toggle Functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Check if dark mode preference exists in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Save the dark mode preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});

// Search Bar Functionality (This part is just a placeholder for future development)
const searchInput = document.getElementById('search');

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    const skills = document.querySelectorAll('.skill-box');
    
    skills.forEach(skill => {
        const skillText = skill.textContent.toLowerCase();
        if (skillText.includes(query)) {
            skill.style.display = 'block';
        } else {
            skill.style.display = 'none';
        }
    });
});
