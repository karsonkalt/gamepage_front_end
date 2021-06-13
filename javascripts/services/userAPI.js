const getTopUsers = () => {
    fetch(root + "/users")
        .then(resp => resp.json())
        .then(json => {
            addAllTopUserDivs(json)
        })
}