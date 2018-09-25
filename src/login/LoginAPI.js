export class LoginAPI {

    user_database = [
        {
            "id": 1,
            "name": "Jamal",
            "surname": "Jones",
            "email": "jamal.jones@email.com",
            "password": "jamal123",
            "roles": ["COOPERATIVA"]
        },
        {
            "id": 2,
            "name": "Joe",
            "surname": "Smith",
            "email": "joe.smith@email.com",
            "password": "joel123",
            "roles": ["MOTORISTA"]
        }
    ]

    login(user) {
        return this.user_database.find(u => (u.email == user.email) && (u.password == user.password))
    }

    getUser(user) {
        return this.user_database.filter(u => (u.email == user.email) && (u.password == user.password))[0];
    }

}