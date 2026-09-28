const html = document.documentElement;
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const elementos = document.querySelectorAll<HTMLElement>(".reveal");

if (elementos.length > 0 && !prefersReducedMotion) {
  html.classList.add("js-reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  elementos.forEach((el) => observer.observe(el));
}