// Scroll animations
document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    }

    // Get all elements that need animations
    const animatedSections = document.querySelectorAll('.page');
    const animatedHeadings = document.querySelectorAll('.headings, .stack')
    const animatedImage = document.querySelector('.project-image');
    const animatedLeftContent = document.querySelectorAll('.left-content');
    const animatedRightContent = document.querySelectorAll('.right-content');

    // Combine all animated elements
    const allAnimatedElements = [
        ...animatedSections,
        ...animatedHeadings,
        animatedImage,
        ...animatedLeftContent,
        ...animatedRightContent
    ];

    // Function to check elements and play animations
    function checkAnimations() {
        allAnimatedElements.forEach(element => {
            if (isInViewport(element) && element.style.animationPlayState !== 'running') {
                element.style.animationPlayState = 'running';
            }
        });
    }

    // Initial check
    checkAnimations();

    // Check on scroll
    window.addEventListener('scroll', checkAnimations);
});