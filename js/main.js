document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");
  const dynamicContent = document.getElementById("dynamicContent");
  const textElement = document.getElementById("animatedText");
  const text = textElement ? textElement.textContent : "";
  let index = 0;

  // Typing Effect
  function typeEffect() {
    if (index < text.length) {
      textElement.textContent = text.slice(0, ++index);
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(deleteEffect, 2000);
    }
  }

  function deleteEffect() {
    if (index > 0) {
      textElement.textContent = text.slice(0, --index);
      setTimeout(deleteEffect, 50);
    } else {
      setTimeout(typeEffect, 1000);
    }
  }

  if (textElement) {
    typeEffect();
  }

  // Initialize Stars
  function initializeStars() {
    const starsContainer = document.querySelector(".rating-stars");
    starsContainer.innerHTML = ""; // Clear existing stars if any

    for (let i = 1; i <= 5; i++) {
      const starContainer = document.createElement("div");
      starContainer.className = "star-container text-center";

      const label = document.createElement("span");
      label.className = "label";
      label.textContent = i;

      const star = document.createElement("span");
      star.className = "star";
      star.setAttribute("data-value", i);
      star.innerHTML = "&#9733;"; // Unicode for a star

      // Add hover and click events
      star.addEventListener("mouseover", () => highlightStars(i));
      star.addEventListener("click", () => selectStar(i));

      starContainer.appendChild(label);
      starContainer.appendChild(star);
      starsContainer.appendChild(starContainer);
    }
  }

  function highlightStars(value) {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      if (star.getAttribute("data-value") <= value) {
        star.classList.add("highlighted");
      } else {
        star.classList.remove("highlighted");
      }
    });
  }

  function selectStar(value) {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star) => {
      if (star.getAttribute("data-value") <= value) {
        star.classList.add("selected");
      } else {
        star.classList.remove("selected");
      }
    });
  }

  document.getElementById("submitBtn").addEventListener("click", function () {
    const fullName = document.getElementById("fullName").value.trim();
    const ratingInput = document.getElementById("rating");
    const rating = ratingInput ? ratingInput.value : "";

    if (!fullName || !rating) {
      alert(
        "Please fill out all fields and select a rating before submitting."
      );
      return;
    }

    const messages = {
      1: "Sorry to hear it was awful. We'll do better next time!",
      2: "We appreciate your honesty. Thank you for your feedback.",
      3: "Thanks for rating us okay! We'll aim to make it awesome next time.",
      4: "Great to hear you enjoyed it! Thanks for your feedback.",
      5: "Awesome! We're thrilled you had a great experience!",
    };

    const gifMap = {
      1: "img/awful.gif",
      2: "img/bad.gif",
      3: "img/okay.gif",
      4: "img/good.gif",
      5: "img/awesome.gif",
    };

    const ratingCategories = {
      1: "Awful",
      2: "Bad",
      3: "Okay",
      4: "Great",
      5: "Awesome",
    };

    const thankYouContent = `
      <div class="container text-center">
        <h2>Thank You, ${fullName.split(" ")[0]}!</h2>
        <img src="${gifMap[rating]}" alt="Thank You GIF" class="img-fluid">
        <p>${messages[rating]}</p>
        <p>Rating: ${rating} - ${ratingCategories[rating]}</p>
        <p id="countdown">Redirecting in 5 seconds...</p>
      </div>
    `;

    dynamicContent.innerHTML = thankYouContent;

    let countdown = 5;
    const countdownElement = document.getElementById("countdown");

    const interval = setInterval(() => {
      countdown--;
      countdownElement.textContent = `Redirecting in ${countdown} seconds...`;
      if (countdown === 0) {
        clearInterval(interval);

        dynamicContent.innerHTML = `
          <p id="animatedText" class="display-5 fw-bold">We’re all ears! How was it for you? Rate us from 1 (awful) to 5 (awesome).</p>
          <form id="rateForm" class="mt-4">
            <div class="mb-3">
              <label for="fullName" class="form-label">Full Name</label>
              <input type="text" id="fullName" name="fullName" class="form-control" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" name="email" class="form-control" required>
            </div>
            <div class="rating-stars d-flex justify-content-center gap-3">
              <!-- Stars dynamically re-initialized -->
            </div>
            <button id="submitBtn" type="button" class="btn btn-gradient mt-4">Submit Your Rating</button>
          </form>
        `;
        initializeStars();
      }
    }, 1000);
  });

  initializeStars(); // Initialize stars on load
});
