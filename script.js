document.addEventListener("DOMContentLoaded", function() {
    const stickyMenu = document.getElementById("sticky-menu");

    stickyMenu.addEventListener("mouseenter", function() {
      console.log("Mouse entered"); // for debugging
      this.style.opacity = 1;
    });

    stickyMenu.addEventListener("mouseleave", function() {
      console.log("Mouse left"); // for debugging
      this.style.opacity = 0;
    });
});

// Chatbot functionality
function toggleChatbot() {
    var chatbotWindow = document.getElementById("chatbot-window");
    chatbotWindow.classList.toggle("show");
}
function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    saveMessage(userInput, "user");
    fetch('chatgpt3.5', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'userInput=' + encodeURIComponent(userInput)
    })
    .then(response => response.text())
    .then(data => {
        saveMessage(data, "bot");
    });
    document.getElementById("user-input").value = "";
}
function saveMessage(message, sender) {
    // Save the message in JSON or any other desired format
    var chatbotMessages = document.getElementById("chatbot-messages");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
}
function getChatGPT35Response() {
    fetch('chatgpt3.5')
        .then(response => response.text())
        .then(data => {
            saveMessage(data, "bot");
        });
}

// // Глубокие ссылки
// function navigateTo(sectionId) {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop,
//         behavior: "smooth",
//       });
//     }
//   }

//Sticky-menu
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".project-section");
    let found = false;
  
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        // Данный элемент видим, обновляем активную ссылку в меню
        const links = document.querySelectorAll("#sticky-menu a");
        links.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").substr(1) === section.id) {
            link.classList.add("active");
          }
        });
        found = true;
      }
      if (found) break;
    }
  });


  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a').forEach(anchor => {
      if (!anchor.closest('#sticky-menu')) {
        anchor.setAttribute('target', '_blank');
      }
    });
  });