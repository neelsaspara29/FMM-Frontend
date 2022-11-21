import { configureStore } from '@reduxjs/toolkit'
import persistStore from 'redux-persist/es/persistStore';
import { artistloginReducer } from './Auth/ArtistAuth/reducer'
import { usersignupreducer } from './Auth/UserAuth/reducer';
import { applyfilterreducer } from './Filter/reducer';


const store = configureStore({
    reducer: {
        artistloginReducer,
        applyfilterreducer,
        usersignupreducer
    },
})
export const persistor = persistStore(store);
export default store;
