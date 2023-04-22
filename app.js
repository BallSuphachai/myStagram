let password = '';

if (password === '') {
    console.log('Password is required');
}
else if(password.length >= 8 && password.length <= 12) {
    consolel.log('Password is valid');
}
else {
    console.log('Password is invalid')
}