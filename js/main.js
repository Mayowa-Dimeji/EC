document.addEventListener("DOMContentLoaded", function () {
  const dynamicContent = document.getElementById("dynamicContent");
  const loaderContainer = document.getElementById("loader-container");
  const loader = document.getElementById("loader");
  const animatedText = document.getElementById("animatedText");
  const text = "We’re all ears!";
  let index = 0;
  let isTyping = true;

  // Typing Effect
  function typeEffect() {
    if (isTyping && index < text.length) {
      animatedText.textContent = text.slice(0, ++index);
      setTimeout(typeEffect, 150);
    } else if (!isTyping && index > 0) {
      animatedText.textContent = text.slice(0, --index);
      setTimeout(typeEffect, 100);
    } else {
      isTyping = !isTyping;
      setTimeout(typeEffect, 500);
    }
  }

  typeEffect();

  // Loader Functions
  function showLoader() {
    if (loader) loader.style.display = "flex";
  }

  function hideLoader() {
    if (loader) loader.style.display = "none";
  }

  // Countdown Logic
  function startCountdown(duration, callback) {
    let countdown = duration;
    const countdownElement = document.getElementById("countdown");

    const interval = setInterval(() => {
      if (countdownElement) {
        countdownElement.textContent = `Redirecting in ${countdown} seconds...`;
      }

      countdown--;

      if (countdown == 0) {
        clearInterval(interval);
        if (typeof callback === "function") callback();
      }
    }, 1000);
  }

  // Show Thank-You Content
  function showThankYou(fullName, rating, message, gif) {
    dynamicContent.classList.add("slide-out");
    setTimeout(() => {
      dynamicContent.innerHTML = `
        <div class="thank-you-content text-center">
          <h2>Thank You, ${fullName.split(" ")[0]}!</h2>
          <img src="${gif}" alt="Thank You GIF" class="img-fluid mb-3">
          <p>${message}</p>
          <p id="countdown">Redirecting in 5 seconds...</p>
          
        <div id="loader" class="loader"></div>
  
        </div>
      `;
      dynamicContent.classList.remove("slide-out");
      dynamicContent.classList.add("slide-in");

      showLoader();
      startCountdown(4, () => {
        hideLoader();
        location.reload(); // Redirect to intro
      });
    }, 500);
  }

  // Initialize Stars
  function initializeStars() {
    const starsContainer = document.querySelector(".rating-stars");
    starsContainer.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
      const starContainer = document.createElement("div");
      starContainer.className = "star-container text-center";

      const label = document.createElement("span");
      label.className = "label d-block";
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

    let ratingInput = document.getElementById("rating");
    if (!ratingInput) {
      ratingInput = document.createElement("input");
      ratingInput.type = "hidden";
      ratingInput.id = "rating";
      ratingInput.name = "rating";
      document.getElementById("rateForm").appendChild(ratingInput);
    }
    ratingInput.value = value;
  }

  // Submit Button Logic
  function initializeSubmitButton() {
    document.getElementById("submitBtn").addEventListener("click", function () {
      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const rating = document.getElementById("rating")?.value;

      if (!fullName || !email || !rating) {
        alert(
          "Please fill out all fields and select a rating before submitting."
        );
        return;
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
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

      showThankYou(fullName, rating, messages[rating], gifMap[rating]);
    });
  }

  initializeStars();
  initializeSubmitButton();
});
