import signUpReducer from "./reducers"

import {configureStore} from '@reduxjs/toolkit'
export default configureStore({
    reducer:{
        signeduser : signUpReducer
    }
})