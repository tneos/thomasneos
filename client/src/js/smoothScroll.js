let projectsLink = document.getElementById("projects-link");
let projectsSection = document.getElementById("projects");

// projectsLink.addEventListener("click", e => {
//   e.preventDefault();
//   let scrollContainer = projectsSection;
//   do {
//     //find scroll container
//     scrollContainer = scrollContainer.parentNode;
//     if (!scrollContainer) return;
//     scrollContainer.scrollTop += 1;
//   } while (scrollContainer.scrollTop == 0);

//   let targetY = 0;
//   do {
//     //find the top of target relatively to the container
//     if (projectsSection == scrollContainer) break;
//     targetY += projectsSection.offsetTop;
//   } while ((projectsSection = projectsSection.offsetParent));

//   scroll = function (c, a, b, i) {
//     i++;
//     if (i > 30) return;
//     c.scrollTop = a + ((b - a) / 30) * i;
//     setTimeout(function () {
//       scroll(c, a, b, i);
//     }, 20);
//   };
//   // start scrolling
//   scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
//});

// const smoothScroll = e => {
//   e.preventDefault();

//   projectsSection.scrollIntoView();
// };
