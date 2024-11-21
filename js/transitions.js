// function initializeStars() {
//   const starsContainer = document.querySelector(".rating-stars");
//   starsContainer.innerHTML = ""; // Clear existing stars if any

//   for (let i = 1; i <= 5; i++) {
//     const starContainer = document.createElement("div");
//     starContainer.className = "star-container text-center";

//     const label = document.createElement("span");
//     label.className = "label";
//     label.textContent = i;

//     const star = document.createElement("span");
//     star.className = "star";
//     star.setAttribute("data-value", i);
//     star.innerHTML = "&#9733;"; // Unicode for a star

//     // Add hover and click events
//     star.addEventListener("mouseover", () => highlightStars(i));
//     star.addEventListener("click", () => selectStar(i));

//     starContainer.appendChild(label);
//     starContainer.appendChild(star);
//     starsContainer.appendChild(starContainer);
//   }
// }

// function highlightStars(value) {
//   const stars = document.querySelectorAll(".star");
//   stars.forEach((star) => {
//     if (star.getAttribute("data-value") <= value) {
//       star.classList.add("highlighted");
//     } else {
//       star.classList.remove("highlighted");
//     }
//   });
// }

// function selectStar(value) {
//   const stars = document.querySelectorAll(".star");
//   stars.forEach((star) => {
//     if (star.getAttribute("data-value") <= value) {
//       star.classList.add("selected");
//     } else {
//       star.classList.remove("selected");
//     }
//   });
// }
