// Function to load project details
function loadProjectDetails(projectId) {
    const sourceElement = document.getElementById(`${projectId}-details`);
    const dynamicContent = document.getElementById("dynamic-content");

    if (sourceElement) {
        dynamicContent.innerHTML = sourceElement.innerHTML;
    } else {
        dynamicContent.innerHTML = 'Project details not found';
    }
}

// On document load
document.addEventListener("DOMContentLoaded", function() {
    // Getting project elements
    const project1 = document.getElementById("project1");
    const project2 = document.getElementById("project2");

    // Adding event listeners to load project details
    project1.addEventListener("click", function() {
        loadProjectDetails("project1");
    });
    
    project2.addEventListener("click", function() {
        loadProjectDetails("project2");
    });
});
