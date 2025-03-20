document.getElementById('waitlistForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    alert(`Boom! ${email}, you’re on the list! Expect epic updates and zero spam—pinky promise.`);
    e.target.reset();
});
