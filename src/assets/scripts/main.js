// Javascript goes here
console.log('up to zero!');

const jobs = document.querySelectorAll('.hist-section h2');
jobs.forEach( job =>{
    job.addEventListener('click', () => {
        alert('clicked!');
        //use this to add accordion functionality
    });
});
