const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")
const { Alert } = require("react-native")
const { default: reducer } = require("../message")

const signupSlice = createAsyncThunk('auth/signup', async () => {
    const response = await fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({
            firstName: FirstName
        })
    })

    if (response.status === 200 || 201) {
        let json = response.json()
        if (json.success) {

        }
        else {
            Alert.alert('user not successfully')
        }
    }
    else {
        Alert.alert('user not successfully')

    }
})

const initialState = { login: false, user: null }
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducer: {},
    extraReducers: {
        [signupSlice.fulfilled]: (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload
        },
        [signupSlice.rejected]: state => {
            state.isLoggedIn = false
            state.user = null
        },
    },
})

// const { reducer } = authSlice
export default authSlice.reducer;