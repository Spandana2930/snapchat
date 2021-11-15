import { USER_SIGNUP } from "../type";
const initialState = {
    userSignedUp : []
}

export default function reducer(state = initialState,action){
    switch (action.type){
    case USER_SIGNUP:
        return{
            userSignedUp:action.payload
        }
        default:
            return state
    }
} 