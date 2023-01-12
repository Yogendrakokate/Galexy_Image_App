import {applyMiddleware,combineReducers,legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { reducer as Appreducer } from "./Appreducer/reducer"
import { reducer as Authreducer } from "./Authreducer/reducer"

const rootreducer= combineReducers({Appreducer,Authreducer})

export const store = legacy_createStore(rootreducer,applyMiddleware(thunk))