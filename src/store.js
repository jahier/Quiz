import { configureStore, combineReducers } from '@reduxjs/toolkit';
import  fetchApiData  from './slices/userSlice';
const reducers = combineReducers({
    user: fetchApiData,
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