// // function setEqualSquareHeights() {
//     const square1 = document.getElementById("square1");
//     const square2 = document.getElementById("square2");

//     // Reset heights to get natural height first
//     square1.style.height = "auto";
//     square2.style.height = "auto";

//     // Get the taller height
//     const maxHeight = Math.max(square1.offsetHeight, square2.offsetHeight);

//     // Set both squares to the taller height
//     square1.style.height = `${maxHeight}px`;
//     square2.style.height = `${maxHeight}px`;
// }  //

// // Run on page load and on window resize for responsiveness
// window.addEventListener("load", setEqualSquareHeights);
// window.addEventListener("resize", setEqualSquareHeights);

// function adjustProjectPosition() {
//     const welcomeSection = document.querySelector('.welcome');
//     const projectsSection = document.getElementById('projects');

//     if (welcomeSection && projectsSection) {
//         // Calculate the height of the welcome section
//         const welcomeHeight = welcomeSection.offsetHeight;

//         // Set the margin-top of the projects section to match the height of the welcome section
//         projectsSection.style.marginTop = `${welcomeHeight}px`;
//     }
// }

// // Run the function on page load and on resize to ensure responsiveness
// window.addEventListener('load', adjustProjectPosition);
// window.addEventListener('resize', adjustProjectPosition);
