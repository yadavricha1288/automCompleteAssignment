export default class fetchRequests {
    static fetchUsersList(queryString) {
        return fetch('https://api.github.com/search/users?q=' + queryString).then(data => {
            return data.json();
        }).catch(error => {
            return error;
        });
    }
}