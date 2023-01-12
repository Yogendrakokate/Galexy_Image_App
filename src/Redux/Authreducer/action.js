import * as types from "./actionTypes"
import axios from "axios"
const loginrequest = () => {
    return {
        type:types.LOGIN_REQUEST
    }
}
const loginsuccess = (payload) => {
    return {
        type: types.LOGIN_SUCCESS,
        payload
    }
}
const loginfail = () => {
    return {
        type:types.LOGIN_FAILURE
    }
}

const login = (payload) => (dispatch) => {
    dispatch(loginrequest())
    return axios.post("https://reqres.in/api/login",payload).then((r) => {
        dispatch(loginsuccess(r.data.token))
    }).catch((e) => {
        dispatch(loginfail())
    })
}

export {login}