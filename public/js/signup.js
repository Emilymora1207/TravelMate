const signupFormHandler = async (event) => {
    event.preventDefault();

    console.log('click');

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    //if (username && email && password) {
    const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/search');
    } else {
        alert('Failed to sign up.');
    }
    //}
};

document
    .querySelector('#signup')
    .addEventListener('click', signupFormHandler);
