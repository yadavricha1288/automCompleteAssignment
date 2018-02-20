import { call, put } from "redux-saga/effects";
import fetchRequests from '../api/fetch';

export function* searchGitHubUsers(action) {
    let results = {};
    if (action.query === '') {
        results.items = [];
    } else {
        results = yield call(fetchRequests.fetchUsersList, action.query);
    }
    yield put({
        type: 'SEARCH__GIT_HUB_USERS_DONE',
        usersList: results.items,
    });
}

export function* selectGitHubUser(action) {
    yield put({
        type: 'SELECT__GIT_HUB_USERS_DONE',
        activeIndex: action.activeIndex,
        selectedUser: action.selectedUser
    });
}