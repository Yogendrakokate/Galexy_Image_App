import * as types from "./actionTypes"

const initialdata = {
    data: [],
    isLoading: false,
    isError:false
}

const reducer = (state=initialdata,action) => {
    const { payload, type } = action 
    switch (type) {
        case types.GET_DATA_REQUEST: return { ...state, isLoading: true }
        case types.GET_DATA_SUCCESS: return { ...state, data: payload }
        case types.GET_DATA_FAILURE: return { ...state, isLoading: false, isError: true }
        default:return state
 }   
}

export {reducer}