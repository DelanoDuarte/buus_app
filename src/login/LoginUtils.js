export class LoginUtil {

    isUserLoggedIn() {
        let user = JSON.parse(window.localStorage.getItem('user'))
        console.log(user)
        if (user)
            return true;
    }

    hasRole(role) {
        let user = JSON.parse(window.localStorage.getItem('user'))
        return user.roles.indexOf(role) > -1
    }

}