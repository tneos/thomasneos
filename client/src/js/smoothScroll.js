let projectsLink = document.getElementById("projects-link");
let projectsSection = document.getElementById("projects");

let aboutMeBtn = document.getElementById("contact-link");
let contactSection = document.getElementById("contact");

const scrollDown = (link, section) => {
  link.addEventListener("click", e => {
    e.preventDefault();
    section.scrollIntoView();
  });
};

scrollDown(projectsLink, projectsSection);
scrollDown(aboutMeBtn, contactSection);
