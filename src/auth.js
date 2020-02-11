export function getAuthForm() {

    return `
    <form class="mui-form" id="auth-form">
    <div class="mui-textfield mui-textfield--float-label">
        <input type="email" class="email" required>
        <label for="email">Email</label>
    </div>
    <div class="mui-textfield mui-textfield--float-label">
        <input type="password" class="password" required>
        <label for="password">Пароль</label>
    </div>
    <button type="submit" class="mui-btn mui-btn--primary">Войти</button>
</form>
    `

}

export function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyDRIGF5lsWiNwDT0xzHigJereSmBGnUiqU';
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => data.idToken)
}