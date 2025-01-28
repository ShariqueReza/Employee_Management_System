// Function to check if an element is in viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event
function handleScroll() {
    var elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(function(element) {
        if (isInViewport(element)) {
            element.classList.add('animate');
        }
    });
}

// Event listener for scroll event
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();
