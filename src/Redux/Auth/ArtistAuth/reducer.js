import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ARTIST_LOGIN } from "./action";


const initialState = {
    token: '',
    type: 'artist',
    username: ''
}
const configPersisit = {
    storage,
    key: 'userOfFMM-007',

}

export const artistloginReducer = persistReducer(configPersisit, (state = initialState, action) => {
    switch (action.type) {
        case ARTIST_LOGIN:
            const { token, type, username } = action.payload;
            return {
                ...state,
                token,
                username
            }


        default:
            return state;
            break;
    }

}) 