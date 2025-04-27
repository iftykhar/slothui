// Select all feature text boxes
const featureBoxes = document.querySelectorAll('.feature-q-text-box');

// Loop through each box and add a click event
featureBoxes.forEach(box => {
    box.addEventListener('click', function() {
        // Remove active class from all boxes
        featureBoxes.forEach(b => b.classList.remove('active-feature'));

        // Add active class to the clicked one
        this.classList.add('active-feature');
    });
});
// Loop through each box and add mouse event listeners
featureBoxes.forEach(box => {
    box.addEventListener('mouseover', function() {
        // Remove active class from all boxes
        featureBoxes.forEach(b => b.classList.remove('active-feature'));
        
        // Add active class to the hovered one
        this.classList.add('active-feature');
    });
});