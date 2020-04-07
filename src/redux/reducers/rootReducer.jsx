import {combineReducers} from 'redux'
import {BurgerReducer} from './BurgerReducer'

export const rootReducer=combineReducers({
    BurgerReducer: BurgerReducer
})

