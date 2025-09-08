const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuBtn = document.querySelector(".close-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    menuToggle.style.display = "none"; // hide burger
    document.body.style.overflow = 'hidden';
  });
}

if (closeMenuBtn && mobileMenu) {
  closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuToggle.style.display = "block"; // show burger again
    document.body.style.overflow = '';
  });
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    document.body.style.overflow = 'hidden';
  });
}

if (closeMenuBtn && mobileMenu) {
  closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = '';
  });
}

const mobileLinks = document.querySelectorAll('#mobileMenu a');
if (mobileLinks && mobileMenu) {
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".header-title", 
  { y: 50, opacity: 0 }, 
  { 
    y: 0, 
    opacity: 1, 
    duration: 2, 
    scrollTrigger: {
      trigger: ".header-title",
      start: "top 80%"
    } 
  }
);

gsap.fromTo(".header-title", 
  { y: 25, opacity: .35 }, 
  { 
    y: 0, 
    opacity: 1, 
    duration: 1, 
  }
);

gsap.fromTo(".block", 
    { opacity: 0 }, 
    { 
      opacity: 1, 
      duration: 1.5, 
    }
  );

gsap.fromTo(".tablet-img", 
    { y: 25, opacity: .35 }, 
    { 
      y: 0,
      delay: 0.1,
      opacity: 1, 
      duration: 1, 
    }
);

gsap.fromTo(".partners", 
    { opacity: 0 },
    { 
        duration: 2,
        opacity: 1,
        scrollTrigger: {
            trigger: ".partners-logos"
    } }
);

gsap.fromTo(".benefits", 
    { opacity: 0 },
    { 
        duration: 2,
        opacity: 1,
        scrollTrigger: {
            trigger: ".benefits"
    } }
);

gsap.fromTo(".benefit-col", 
  { opacity: 0 },
  { 
      duration: 1.5,
      stagger: .1,
      opacity: 1,
      scrollTrigger: {
          trigger: ".benefit-col"
  } }
);

gsap.fromTo(".benefits-img", 
    { opacity: 0, scale: .9 },
    { 
        scale: 1,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: ".benefits-img"
    } }
);

gsap.fromTo(".numbered-spec",
  { opacity: 0, x: -150 },
    { 
        duration: .8,
        x: 0,
        opacity: 1,
        stagger: .1,
        scrollTrigger: {
            trigger: ".discover"
    } }
)

gsap.fromTo(".discover-btn",
  { opacity: 0, scale: .9 },
    { 
        scale: 1,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: ".discover-btn"
    } }
)

gsap.fromTo(".discover-img",
  { opacity: 0, scale: .9 },
    { 
        scale: 1,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
            trigger: ".discover-img"
    } }
)

gsap.fromTo(".contact",
  { opacity: 0 },
    { 
        duration: 2,
        opacity: 1,
        scrollTrigger: {
            trigger: ".discover-img"
    } }
)