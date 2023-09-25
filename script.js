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

  const galleryButtons = document.getElementById("gallery-buttons");

  galleryButtons.addEventListener("mouseenter", function() {
    console.log("Mouse entered"); // for debugging
    this.style.opacity = 1;
  });

  galleryButtons.addEventListener("mouseleave", function() {
    console.log("Mouse left"); // for debugging
    this.style.opacity = 0;
  });
});


// Gallery
// Функция для заполнения галереи изображениями
function fillGallery(type) {
const galleryContainer = document.getElementById('gallery-container');
galleryContainer.innerHTML = ''; // Очищаем предыдущую галерею

let images = [];

if (type === 'anime') {
  images = ['img/anime/genshin1.jpg','img/anime/genshin2.png','img/anime/kurisu1.jpg','img/anime/yuuki1.jpg']; // Пути к аниме-изображениям
} else if (type === 'nature') {
  images = ['nature1.jpg', 'nature2.jpg', 'nature3.jpg']; // Пути к природным изображениям
}

images.forEach(img => {
  const imgElement = document.createElement('img');
  imgElement.src = img; // Устанавливаем путь к изображению
  imgElement.classList.add('gallery-image'); // Добавляем CSS-класс для стилизации
  galleryContainer.appendChild(imgElement); // Добавляем изображение в контейнер
});
}
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function showGallery(type) {
modal.style.display = "block";
fillGallery(type);  // Здесь вызываем функцию для заполнения галереи
}

span.onclick = function() {
modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
}

// Добавление функциональности "лупы"
document.addEventListener("DOMContentLoaded", function() {
const galleryContainer = document.getElementById('gallery-container');
galleryContainer.addEventListener("click", function(event) {
  if (event.target.tagName.toLowerCase() === 'img') {
    openZoomModal(event.target.src);
  }
});
});

// Открытие модального окна для увеличенного изображения
function openZoomModal(imageSrc) {
const zoomModal = document.getElementById('zoomModal');
const zoomedImage = document.getElementById('zoomedImage');
const zoomClose = document.querySelector('.zoom-close');

zoomModal.style.display = "block";
zoomedImage.src = imageSrc;

zoomClose.onclick = function() {
  zoomModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == zoomModal) {
    zoomModal.style.display = "none";
  }
};
}