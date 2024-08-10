const projects = [
    {
        title: "Project 1",
        image: "https://via.placeholder.com/300",
        description: "This is a description of Project 1."
    },
    {
        title: "Project 2",
        image: "https://via.placeholder.com/300",
        description: "This is a description of Project 2."
    },
    {
        title: "Project 3",
        image: "https://via.placeholder.com/300",
        description: "This is a description of Project 3."
    },
    {
        title: "Project 4",
        image: "https://via.placeholder.com/300",
        description: "This is a description of Project 4."
    },
    {
        title: "Project 4",
        image: "https://via.placeholder.com/300",
        description: "This is a description of Project 4."
    },
    {
        title: "Project 4",
        image: "https://via.placeholder.com/300",
        description: "This is a description of Project 4."
    },
    {
        title: "Project 4",
        image: "https://via.placeholder.com/300",
        description: "This is a description of Project 4."
    },

];

function displayProjects() {
    const projectsContainer = document.getElementById("projects");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";

        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h2 class="project-title">${project.title}</h2>
                <p class="project-description">${project.description}</p>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
}

// Initialize the projects display
document.addEventListener("DOMContentLoaded", displayProjects);
