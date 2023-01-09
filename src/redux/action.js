import {types} from "./types";

export function getUserAction (users) {
    return {
        type: types.GET_USER,
        payload: users
    }
}

export function getExodusAction (user) {
    return {
        type: types.EXODUS_USER,
        payload: user
    }
}

export function fetchUserAction () {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data = await response.json()

        dispatch(getUserAction(data))
    }
}

export function fetchExodusUserAction (id) {
    return async function (dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        dispatch(getExodusAction(data))
    }
}