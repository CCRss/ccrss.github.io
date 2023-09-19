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

function toggleChat() {
    const chatBox = document.getElementById("chat-box");
    chatBox.classList.toggle("hidden");
}

document.getElementById("chat-input").addEventListener("keydown", async function(event) {
    if (event.keyCode === 13) { // Enter key
        const userText = event.target.value;
        event.target.value = '';
        const chatContent = document.getElementById("chat-content");
        chatContent.innerHTML += `<div>User: ${userText}</div>`;

        const dataToSend = {
            user: "username",
            message: userText,
            timestamp: new Date().toISOString()
        };

        const response = await fetch('saveChat.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });

        const result = await response.json();

        if (result.status === 'success') {
            const botReply = "Your message has been saved."; // Dummy reply
            chatContent.innerHTML += `<div>Bot: ${botReply}</div>`;
        } else {
            chatContent.innerHTML += `<div>Bot: Error saving message.</div>`;
        }
    }
});



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
