function showSnackbar(message, isSucces = true) {
    const snackbar = document.getElementById('snackbar');
    snackbar.textContent = message;
    snackbar.style.backgroundColor = isSucces ? '#4CAF50' : '#f44336';

    snackbar.className = 'show';

    setTimeout(() => {
        snackbar.className = snackbar.className.replace('show', '');
    }, 3000)
}


let singupForm = document.getElementById('singupForm');

if (singupForm) {
    singupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const cPassword = document.getElementById('confirmPassword').value.trim();

        if(!name || !email || !password || !cPassword) {
            showSnackbar("Please fill all the fields", false);
            return;
        }

        if(password != cPassword) {
            showSnackbar("Password does not match", false);
            return;
        }

        const user = {name, email, password};
        localStorage.setItem('user', JSON.stringify(user));
        showSnackbar("Registration successful", true);

        setTimeout(() => {window.location.href = "login.html"}, 1500)
    })
}