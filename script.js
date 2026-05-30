const body = document.body;
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");
const stage = document.querySelector("[data-parallax-stage]");
const machine = document.querySelector("[data-parallax-machine]");
const zrbot = document.querySelector(".zrbot-widget");
const zrbotToggle = document.querySelector("[data-zrbot-toggle]");
const links = [...document.querySelectorAll(".site-nav a")];
const sections = links
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);
let lastHash = window.location.hash;

toggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("nav-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

const scrollToTarget = (hash, updateHistory = true) => {
  const target = document.querySelector(hash);
  if (!target) return false;

  body.classList.remove("nav-open");
  toggle?.setAttribute("aria-expanded", "false");
  target.scrollIntoView({ behavior: "auto", block: "start" });
  if (updateHistory) history.pushState(null, "", hash);
  return true;
};

const scheduleScrollToHash = (hash) => {
  [0, 80, 260, 620].forEach((delay) => {
    window.setTimeout(() => scrollToTarget(hash, false), delay);
  });
};

[...document.querySelectorAll('a[href^="#"]')].forEach((link) => {
  link.addEventListener("click", (event) => {
    body.classList.remove("nav-open");
    toggle?.setAttribute("aria-expanded", "false");

    const hash = link.getAttribute("href");
    if (hash && hash.length > 1 && document.querySelector(hash)) {
      event.preventDefault();
      scrollToTarget(hash);
    }
  });
});

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  },
  {
    rootMargin: "-20% 0px -68% 0px",
    threshold: [0.1, 0.3, 0.6],
  },
);

sections.forEach((section) => observer.observe(section));
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

window.addEventListener("load", () => {
  if (window.location.hash) {
    scheduleScrollToHash(window.location.hash);
  }
});

window.addEventListener("hashchange", () => {
  lastHash = window.location.hash;
  if (window.location.hash) {
    scheduleScrollToHash(window.location.hash);
  }
});

window.setInterval(() => {
  if (window.location.hash && window.location.hash !== lastHash) {
    lastHash = window.location.hash;
    scheduleScrollToHash(window.location.hash);
  }
}, 150);

stage?.addEventListener("pointermove", (event) => {
  if (!machine) return;

  const rect = stage.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  machine.style.setProperty("--mx", `${x * 26}px`);
  machine.style.setProperty("--my", `${y * 18}px`);
});

stage?.addEventListener("pointerleave", () => {
  if (!machine) return;
  machine.style.setProperty("--mx", "0px");
  machine.style.setProperty("--my", "0px");
});

zrbotToggle?.addEventListener("click", () => {
  zrbot?.classList.toggle("is-open");
});
