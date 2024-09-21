const form = document.querySelector('.form-container');
const inputs = form.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.add('focused');
    });
    input.addEventListener('blur', () => {
        input.classList.remove('focused');
    });
});