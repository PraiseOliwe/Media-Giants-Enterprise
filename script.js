// Section reveal on scroll (fade-in/slide-in)
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const reveal = () => {
        const trigger = window.innerHeight * 0.85;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < trigger) {
                section.classList.add('visible');
            }
        });
    };
    reveal();
    window.addEventListener('scroll', reveal);
});

// Animated scroll indicator
document.addEventListener('DOMContentLoaded', function() {
    // Create scroll indicator
    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.innerHTML = `
        <svg class="arrow" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" stroke="#EF8354" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
    document.body.appendChild(indicator);

    // Hide indicator at bottom
    function toggleIndicator() {
        const scrollY = window.scrollY || window.pageYOffset;
        const windowH = window.innerHeight;
        const docH = document.documentElement.scrollHeight;
        if (scrollY + windowH >= docH - 10) {
            indicator.classList.add('hide');
        } else {
            indicator.classList.remove('hide');
        }
    }
    toggleIndicator();
    window.addEventListener('scroll', toggleIndicator);
});

// Add animated SVG icons to service cards (example)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.service-card').forEach((card, idx) => {
        // Only add if not already present
        if (!card.querySelector('.animated-icon')) {
            const icon = document.createElement('span');
            icon.className = 'animated-icon';
            // Alternate animation for demo
            icon.classList.add(idx % 2 === 0 ? 'pulse' : 'rotate');
            icon.innerHTML = `
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="12" stroke="#EF8354" stroke-width="3" fill="none"/>
                    <path d="M16 10v6l4 2" stroke="#2D3142" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
            icon.style.marginRight = "10px";
            card.prepend(icon);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Make logo clickable to go to home page
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});
