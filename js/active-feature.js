// Select all feature text boxes
const featureBoxes = document.querySelectorAll('.feature-q-text-box');


featureBoxes.forEach(box => {
    box.addEventListener('click', function() {
        
        featureBoxes.forEach(b => b.classList.remove('active-feature'));

        
        this.classList.add('active-feature');
    });
});

featureBoxes.forEach(box => {
    // Add a position relative to the box if not already set
    box.style.position = 'relative';
    
    // Create a blue vertical line element
    const verticalLine = document.createElement('div');
    verticalLine.style.cssText = `
        position: absolute;
        left: -3px;
        top: 0;
        width: 3px;
        height: 100%;
        background-color: blue;
        display: none;
    `;
    box.appendChild(verticalLine);

    box.addEventListener('mouseover', function() {
        // Hide all vertical lines
        featureBoxes.forEach(b => 
            b.querySelector('div').style.display = 'none'
        );
        // Show this vertical line
        verticalLine.style.display = 'block';
    });
});