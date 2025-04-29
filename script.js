function menu() {
  const menu = document.querySelector(".menu");
  const close = document.querySelector(".close-icon");
  const sidebar = document.querySelector(".sidebar");

  menu.addEventListener("click", function () {
    sidebar.style.transform = "translateX(0)";
  });

  close.addEventListener("click", function () {
    sidebar.style.transform = "translateX(100%)";
  });
}
menu();


function pageText() {
  const pageText = document.querySelector(".page1-text");

gsap.from(pageText, {
  duration: 1,
  delay: 0.2,
  opacity: 0,
  y: -50,
  ease: "power1.out",
})
}
pageText();


function aboutText() {
  const aboutText = document.querySelector(".about-page1-text");
const aboutTexth1 = document.querySelector(".about-page1-text h1");
const aboutTextp = document.querySelector(".about-page1-text p");

gsap.from(aboutText, {
  duration: 0.5,
  delay: 0.2,
  opacity: 0,
  y: -50,
  ease: "power1.out",
})

gsap.from(aboutTexth1, {
  duration: 0.8,
  delay: 0.5,
  opacity: 0,
  y: -50,
  ease: "power1.out",
})

gsap.from(aboutTextp, {
  duration: 0.8,
  delay: 0.8,
  opacity: 0,
  y: 50,
  ease: "power1.out",
})
}
aboutText();

function slider() {
  document.addEventListener("DOMContentLoaded", () => {
    const sliderTrack = document.querySelector(".slide");
    const cards = document.querySelectorAll(".slide .card");
    const prevBtn = document.querySelector(".slider-btns .prev");
    const nextBtn = document.querySelector(".slider-btns .next");

    let currentIndex = 0;

    const totalCards = cards.length;

    function updateSliderPosition() {
      if (totalCards === 0) {
        console.warn("No testimonial cards found.");
        return;
      }

      const cardWidth = cards[0].offsetWidth;

      const transformValue = -currentIndex * cardWidth;

      sliderTrack.style.transform = `translateX(${transformValue}px)`;

      prevBtn.disabled = currentIndex === 0;

      nextBtn.disabled = currentIndex === totalCards - 1;
    }

    nextBtn.addEventListener("click", () => {
      if (currentIndex < totalCards - 1) {
        currentIndex++;

        updateSliderPosition();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;

        updateSliderPosition();
      }
    });

    window.addEventListener("resize", updateSliderPosition);

    updateSliderPosition();
  });
}
slider();

