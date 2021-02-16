// not in use

class Auth {
    constructor() {
        this.authenticated = false;
    }

    login() {
        this.authenticated = true
        cb(); // callback
    }

    logout() {
        this.authenticated = false
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();