// Optional: You can use JavaScript for additional form validation or dynamic behavior
document.getElementById('diet-form').addEventListener('submit', function(event) {
    // Example: Simple validation (this can be extended)
    let genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        alert('Please select your gender.');
        event.preventDefault();
    }
});
