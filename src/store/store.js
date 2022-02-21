import { createStore } from 'redux'
import {navRouter} from './reducers'
export const store = createStore(navRouter)