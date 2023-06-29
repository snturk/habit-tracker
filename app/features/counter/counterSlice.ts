// Write the reducer function and export it
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

// Define a type for the slice state
interface CounterState {
	  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
	  value: 0,
}

export const counterSlice = createSlice({
	  name: 'counter',
	  initialState,
	  reducers: {
		    increment: (state) => {
			      state.value += 1
		    },
			decrement: (state) => {
				state.value -= 1
			}
	  }
})

export const { increment, decrement } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer