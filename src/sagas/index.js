import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import {searchGitHubUsers, selectGitHubUser } from './gitHubUsers'
// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'SEARCH__GIT_HUB_USERS', searchGitHubUsers),
    fork(takeLatest, 'SELECT__GIT_HUB_USERS', selectGitHubUser)
  ];
}
