// Javascript goes here
console.log('up to zero!');

//use this to add accordion
// const jobs = document.querySelectorAll('.hist-section h2');
// jobs.forEach( job =>{
//     job.addEventListener('click', () => {
//         const collapseSection = document.querySelector('.collapse');
//         collapseSection.classList.toggle('.active');


//     });
// });
var acc = document.getElementsByClassName("list-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    // if (panel.style.display === "block") {
    //   panel.style.display = "none";
    // } else {
    //   panel.style.display = "block";
    // }
    panel.style.display === "block" ? panel.style.display = "none" : panel.style.display = "block";
  });
}
