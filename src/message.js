const { createSlice } = require("@reduxjs/toolkit")

const initialState = {}

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setMessage: (state, action) => {
            return {

                message: action.payload.message,
                isError: action.payload.isError

            }
        },
        clearMessage: () => {
            return { message: '', isError: null }
        }
    }
})

const { reducer, action } = messageSlice
export const { setMessage, clearMessage } = action
export default reducer