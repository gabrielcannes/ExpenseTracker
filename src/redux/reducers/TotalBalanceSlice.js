import { createSlice } from '@reduxjs/toolkit'

const totalBalanceSlice = createSlice({
    name: 'totalBalance',
    initialState: {
        value: 0,
    },
    reducers: {
        incrementByAmount(state, action) {
            state.value += action.payload
        },
        decrementByAmount(state, action) {
            state.value += action.payload
        },
    },
})

export const {incrementByAmount, decrementByAmount} = totalBalanceSlice.actions
export default totalBalanceSlice.reducer