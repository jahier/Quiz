import { configureStore, combineReducers } from '@reduxjs/toolkit';
import  fetchApiData  from './slices/userSlice';
import auth from './slices/authSlice'
const reducers = combineReducers({
    user: fetchApiData,
    auth:auth
},)
const store = configureStore({

    reducer: reducers,  
      middleware: getDefaultMiddleware => {
        const middleware = getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        })
        return middleware
    }
})

export default store;