function login() {
    var username = document.getElementsByName('uname')[0].value;
    var password = document.getElementsByName('psw')[0].value;

    var users = {
        'user1': 'password1',
        'user2': 'password2',
        'user3': 'password2',
        'user4': 'password2',
        'user5': 'password2',
        'user6': 'password2',
        'user7': 'password2',
        'user8': 'password2',
        'user9': 'password2',
        'Aldrichmalijan@gmail.com': 'malijan',
        'Rhyza': 'CSS12A',
        'Wen-chan': 'password23',
        'Pablo': 'Karton',
        'Yasopp': 'male321',
        'admin1': 'adminpassword'
    };

    if (users.hasOwnProperty(username)) {
        if (users[username] === password) {
            alert('Login successful! Welcome ' + username);
            if (username.startsWith('admin')) {
                // Redirect to admin home
                window.location.href = 'admin-home.html';
            } else {
                // Redirect to user home and pass the username as a parameter
                window.location.href = 'user-home.html?username=' + encodeURIComponent(username);
            }
            return false; // Prevent form submission
        } else {
            alert('Incorrect password');
        }
    } else {
        alert('User not found');
    }

    return false; // Prevent form submission
}
