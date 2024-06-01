document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.visibility = "visible";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const items = document.querySelectorAll('.fade-in-item');
    items.forEach(item => observer.observe(item));
});
