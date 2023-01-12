import axios from "axios"
import * as types from "./actionTypes"

const getdatarequest = () => {
    return {
        type:types.GET_DATA_REQUEST
    }
}

const getdatasuccess = (payload) => {
    return {
        type: types.GET_DATA_SUCCESS,
        payload
    }
}

const getdatafailuar = () => {
    return {
        type:types.GET_DATA_FAILURE
    }
}

export const getdata = (params) => (dispatch) => {
    dispatch(getdatarequest())
    return axios.get("https://api.unsplash.com/search/photos?client_id=NMw4vN5nbL-7aYxB0Q70LLcjv-M0EMBQxGHBEu_wgXw",params).then((r) => {
          
        dispatch(getdatasuccess(r.data.results))
    }).catch((e) => {
        dispatch(getdatafailuar())
        console.log(e)
    })
    }
