document.addEventListener("DOMContentLoaded", () => {
    // Skill progress values
    const skillProgress = {
        css: 50, // CSS percentage
        js: 40,  // JavaScript percentage
        git: 30, // Git percentage
    };

    // Update progress for each skill
    for (const skill in skillProgress) {
        const progressElement = document.getElementById(`${skill}-progress`);
        const labelElement = document.getElementById(`${skill}-label`);

        const value = skillProgress[skill];
        progressElement.style.width = `${value}%`;
        labelElement.textContent = `${value}% ${skill.toUpperCase()} `
        ;
    }
});


