"use strict";

const cardsList = [];

(function fillCardsList() {
   for (let i = 1; i <= 30; i++) {
      cardsList.push({
         id: i,
         name: `Image ${i}`,
         url: "test_images/image4.jpg",
      });
   }
})();

let currentImageIndex = -1;
let displayedCount = 3;
let isLoading = false;
let isResizing = false;

//DOM-elements
const imageName = document.getElementById("image-name");
const imageFile = document.getElementById("image-file");
const imagesListContainer = document.querySelector(".images-list-container");
const uploadButton = document.querySelector(".upload-button");
const form = document.querySelector(".form");
const card = document.querySelector(".card");
const imagePreviewContainer = document.querySelector(
   ".image-preview-container"
);
const imagePreview = document.querySelector(".image-preview");
const closeButton = document.querySelector(".close-button");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const upButton = document.querySelector(".up-button");
const cardCoords = document.querySelector(".card-coords");
const resizeBar = document.querySelector(".resize-bar");
const main = document.querySelector(".main");
const imagesList = document.querySelector(".images-list");

const createCardLayout = (imageUrl, text) => {
   return `
      <article class="card" draggable="true">
         <img class="card-image" src="${imageUrl}" alt="${text}">
         <p class="card-text">${text}</p>
      </article>
   `;
};

function renderCards(cardsList) {
   imagesListContainer.innerHTML = "";

   cardsList.forEach((card) => {
      const cardLayout = createCardLayout(card.url, card.name);
      imagesListContainer.insertAdjacentHTML("afterbegin", cardLayout);
   });

   const allCards = document.querySelectorAll(".card");

   allCards.forEach((card) => {
      card.addEventListener("click", (event) => {
         handleCardClick(event.currentTarget);
      });

      //drag-n-drop
      card.draggable = true;

      card.addEventListener("dragstart", (event) => {
         event.dataTransfer.setData("text", "card");
         if (cardCoords) {
            cardCoords.style.display = "block";
         }

         card.classList.add("dragging");
      });

      card.addEventListener("drag", (event) => {
         if (cardCoords) {
            cardCoords.textContent = `X:${event.clientX} Y:${event.clientY}`;
         }
      });

      card.addEventListener("dragend", () => {
         if (cardCoords) {
            cardCoords.style.display = "none";
         }

         card.classList.remove("dragging");
      });
   });
}

function handleCardClick(card) {
   const allCards = document.querySelectorAll(".card");
   allCards.forEach((card) => card.classList.remove("active"));

   card.classList.add("active");

   imagePreviewContainer.innerHTML = "";

   const cardCopy = card.cloneNode(true);
   cardCopy.classList.remove("active");
   imagePreviewContainer.appendChild(cardCopy);

   prevButton.setAttribute("style", "display: inline;");
   nextButton.setAttribute("style", "display: inline;");

   const clickedIndex = Array.from(allCards).indexOf(card);
   currentImageIndex = clickedIndex;
}

function handleImageUpload() {
   const inputText = imageName.value;
   const file = imageFile.files[0];

   if (!inputText || !file) {
      alert("all fields must be filled");
      return;
   }

   const imageUrl = URL.createObjectURL(file);
   cardsList.push({ id: cardsList.length, name: inputText, url: imageUrl });

   renderCards(cardsList);

   form.reset();
}

function handleCloseButton() {
   imagePreviewContainer.innerHTML = "";

   prevButton.removeAttribute("style");
   nextButton.removeAttribute("style");

   const allCards = document.querySelectorAll(".card");
   allCards.forEach((card) => card.classList.remove("active"));
}

function handlePrevButton() {
   if (currentImageIndex <= 0) {
      handleCloseButton();
      return;
   }

   currentImageIndex--;
   showImageByIndex(currentImageIndex);
}

function handleNextButton() {
   if (currentImageIndex >= cardsList.length - 1) {
      handleCloseButton();
      return;
   }

   currentImageIndex++;
   showImageByIndex(currentImageIndex);
}

function showImageByIndex(index) {
   const allCards = document.querySelectorAll(".card");

   allCards.forEach((card) => card.classList.remove("active"));

   if (allCards[index]) {
      allCards[index].classList.add("active");
   }

   imagePreviewContainer.innerHTML = "";

   if (allCards[index]) {
      const cardCopy = allCards[index].cloneNode(true);
      cardCopy.classList.remove("active");
      imagePreviewContainer.appendChild(cardCopy);
   }
}

//resizing logic
function startResize(e) {
   isResizing = true;

   document.addEventListener("mousemove", processResize);
   document.addEventListener("mouseup", stopResize);

   e.preventDefault();
}

// adaptive image list
function updateCardsColumns() {
   const listWidth = imagesList.offsetWidth;

   let columns = 0;

   if (listWidth < 500) {
      columns = 1;
   } else if (listWidth < 750) {
      columns = 2;
   } else {
      columns = 3;
   }

   imagesListContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
}

function processResize(e) {
   if (!isResizing) return;

   const mainRect = main.getBoundingClientRect();
   const mouseX = e.clientX - mainRect.left;

   const listPercent = (mouseX / mainRect.width) * 100;
   const previewPercent = 100 - listPercent - (10 / mainRect.width) * 100;

   if (listPercent < 30) return;
   if (previewPercent < 20) return;

   main.style.gridTemplateColumns = `${listPercent}% 10px ${previewPercent}%`;

   updateCardsColumns();
}

function stopResize() {
   isResizing = false;

   document.removeEventListener("mousemove", processResize);
   document.removeEventListener("mouseup", stopResize);
}

//Listeners
uploadButton.addEventListener("click", function (event) {
   event.preventDefault();
   handleImageUpload();
});

closeButton.addEventListener("click", handleCloseButton);
prevButton.addEventListener("click", handlePrevButton);
nextButton.addEventListener("click", handleNextButton);

document.addEventListener("keydown", function (event) {
   if (currentImageIndex === -1) return;

   if (event.key === "ArrowLeft") {
      handlePrevButton();
   } else if (event.key === "ArrowRight") {
      handleNextButton();
   }
});

upButton.addEventListener("click", () => {
   imagesListContainer.scrollTo({
      top: 0,
      behavior: "smooth",
   });
});

imagePreview.addEventListener("dragover", (event) => {
   event.preventDefault();
});

imagePreview.addEventListener("drop", (event) => {
   event.preventDefault();
   const data = event.dataTransfer.getData("text");

   if (data === "card") {
      const allCards = document.querySelectorAll(".card");
      const draggingCard = Array.from(allCards).find((card) =>
         card.classList.contains("dragging")
      );

      if (draggingCard) {
         handleCardClick(draggingCard);
      }
   }
});

resizeBar.addEventListener("mousedown", startResize);

const initialCards = cardsList.slice(0, 3);
renderCards(initialCards);

// element to observe
const scrollLimit = document.createElement("div");
scrollLimit.style.cssText = `
   height: 1px;
   width: 100%;
   background: transparent;
`;
imagesListContainer.appendChild(scrollLimit);

const observer = new IntersectionObserver(
   (entries) => {
      const entry = entries[0];

      if (
         entry.isIntersecting &&
         !isLoading &&
         displayedCount < cardsList.length
      ) {
         isLoading = true;

         const nextCards = cardsList.slice(displayedCount, displayedCount + 3);

         nextCards.forEach((card) => {
            const cardHTML = createCardLayout(card.url, card.name);
            scrollLimit.insertAdjacentHTML("beforebegin", cardHTML);
         });

         displayedCount += 3;

         // wait browser to render new cards
         setTimeout(() => {
            const allCards = imagesListContainer.querySelectorAll(".card");

            if (Array.from(allCards).length === cardsList.length) {
               upButton.setAttribute("style", "display: inline");
            }

            const newCards = Array.from(allCards).slice(-3);

            newCards.forEach((card) => {
               card.addEventListener("click", (event) => {
                  handleCardClick(event.currentTarget);
               });
            });

            isLoading = false;

            if (displayedCount >= cardsList.length) {
               scrollLimit.remove();
               observer.disconnect();
            }
         }, 0);
      }
   },
   {
      root: imagesListContainer,
      rootMargin: "0px",
      threshold: 1.0,
   }
);

observer.observe(scrollLimit);
