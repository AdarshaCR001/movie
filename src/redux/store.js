import {createStore, combineReducers} from 'redux'
import loginReducer from './login/LoginReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'

const rootReducer=combineReducers({
    login:loginReducer,
    iceCream:iceCreamReducer
})

const store=createStore(rootReducer)

export default store