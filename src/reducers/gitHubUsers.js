
const intialState = {
    usersList: [],
    activeIndex: 0,
    selectedUser: {}
}
export default function gitHubUsers(state = intialState, action) {
    switch (action.type) {
        case 'SEARCH__GIT_HUB_USERS_DONE':
            return Object.assign({}, state, { usersList: action.usersList });
        case 'SELECT__GIT_HUB_USERS_DONE':
            return Object.assign({}, state, { selectedUser: action.selectedUser, activeIndex: action.activeIndex });
        default:
            return state;
    }
}