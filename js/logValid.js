document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateLoginForm();
});

function validateLoginForm() {
    let isValid = true;

    // login
    const login = document.getElementById('login').value;
    const loginError = document.getElementById('loginError');
    const loginRegex = /^[a-zA-Zа-яА-Я]$/;
    if (!login) {
        loginError.textContent = 'Логин обязателен для заполнения.';
        isValid = false;
    } else {
        loginError.textContent = '';
    }

    // password
    const pass = document.getElementById('pass').value;
    const passError = document.getElementById('passError');
    if (!pass) {
        passError.textContent = 'Пароль обязателен для заполнения.';
        isValid = false;
    } else {
        passError.textContent = '';
    }

    if (isValid) {
        console.log('Форма успешно отправлена!');
    }
}