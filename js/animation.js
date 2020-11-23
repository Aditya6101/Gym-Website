import gsap from "../node_modules/gsap/all.js";
import ScrollTrigger from "../node_modules/gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

gsap.from(".column__img", {
  scrollTrigger: {
    trigger: ".column__img",
    start: "center bottom",
  },
  scale: 0,
  opacity: 0,
  stagger: 0.3,
});
gsap.from(".column__heading,.column__p", {
  scrollTrigger: {
    trigger: ".column__img",
    start: "top center",
  },
  opacity: 0,
  y: 200,
  stagger: 0.3,
  delay: 0.1,
});
gsap.from(
  ".section--statics__div,.section--statics__h1,.section--statics__h3",
  {
    scrollTrigger: {
      trigger:
        ".section--statics__div,.section--statics__h1,.section--statics__h3",
      start: "top center",
    },
    opacity: 0,
    y: -200,
    stagger: 0.1,
    delay: 0.1,
  }
);
gsap.from(".card--2,.card--4", {
  scrollTrigger: {
    trigger: "card",
    start: "center center",
  },
  duration: 1,
  opacity: 0,
  x: 500,
  stagger: 0.3,
  delay: 0.3,
});
gsap.from(".card--1,.card--3", {
  scrollTrigger: {
    trigger: "card",
    start: "center center",
  },
  duration: 1,
  opacity: 0,
  x: -500,
  stagger: 0.3,
  delay: 0.3,
});
gsap.from(".mobile-img", {
  scrollTrigger: {
    trigger: "section--mobile__container",
    start: "top bottom",
  },
  duration: 1,
  opacity: 0,
  x: 200,
});
