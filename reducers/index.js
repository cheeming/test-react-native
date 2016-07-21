import { combineReducers } from 'redux'

import page from './page.js'

// Each reducer here represents a state that you would like to manage
const testApp = combineReducers({
    page,
})

export default testApp
