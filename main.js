// Waitlist Form Submission
document.getElementById('waitlistForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Yay! ${email} is on the waitlist! We’ll send you all the juicy updates! 🍎`);
    this.reset();
});
