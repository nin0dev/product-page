const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll('#mobileMenu a');

function openMenu() {
  if (mobileMenu) {
    mobileMenu.classList.add("active");
    document.body.style.overflow = 'hidden';
    document.body.classList.add('menu-open');
  }
}

function closeMenu() {
  if (mobileMenu) {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = '';
    document.body.classList.remove('menu-open');
  }
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    if (mobileMenu.classList.contains("active")) {
      closeMenu();
    } else {
      openMenu();
    }
  });
}
if (mobileLinks) {
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
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

gsap.fromTo(".block", { opacity: 0 }, { opacity: 1, duration: 1.5 });
gsap.fromTo(".tablet-img", { y: 25, opacity: 0.35 }, { y: 0, opacity: 1, delay: 0.1, duration: 1 });

gsap.fromTo(".partners", { opacity: 0 }, { opacity: 1, duration: 2, scrollTrigger: { trigger: ".partners-logos" } });
gsap.fromTo(".benefits", { opacity: 0 }, { opacity: 1, duration: 2, scrollTrigger: { trigger: ".benefits" } });
gsap.fromTo(".benefit-col", { opacity: 0 }, { opacity: 1, duration: 1.5, stagger: 0.1, scrollTrigger: { trigger: ".benefit-col" } });
gsap.fromTo(".benefits-img", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1, scrollTrigger: { trigger: ".benefits-img" } });
gsap.fromTo(".numbered-spec", { opacity: 0, x: -150 }, { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: ".discover" } });
gsap.fromTo(".discover-btn", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1, scrollTrigger: { trigger: ".discover-btn" } });
gsap.fromTo(".discover-img", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1, scrollTrigger: { trigger: ".discover-img" } });
gsap.fromTo(".contact", { opacity: 0 }, { opacity: 1, duration: 2, scrollTrigger: { trigger: ".discover-img" } });