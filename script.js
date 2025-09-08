gsap.registerPlugin("scrollTrigger");

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