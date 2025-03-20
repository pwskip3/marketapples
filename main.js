document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.neon-text', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power2.out'
    });

    gsap.from('.neon-subtext', {
        opacity: 0,
        y: 30,
        duration: 1.5,
        delay: 0.5,
        ease: 'power2.out'
    });

    gsap.from('.neon-button', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 1,
        ease: 'back.out(1.7)'
    });

    gsap.to('.feature-card', {
        scrollTrigger: {
            trigger: '.features',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out'
    });
});
