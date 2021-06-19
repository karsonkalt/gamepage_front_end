class UserAPI {
    static getTopUsers() {
        fetch(root + "/users")
            .then(resp => resp.json())
            .then(json => {
                User.addAllTopUserDivs(json)
        })
    }
}