import { createSlice } from "@reduxjs/toolkit";

export interface HabitCounterModel {
  streak: number;
  name: string;
  value: number;
  isBad: boolean;
}

interface HabitCounterState {
	counters: HabitCounterModel[];
}

const initialState: HabitCounterState = {
	counters: [],
}


export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addHabit: (state, action) => {
		let habit: HabitCounterModel = {
			streak: 0,
			name: action.payload.name,
			value: 0,
			isBad: action.payload.isBad,
		};
		state.counters.push(habit);
	},
	increment: (state, action) => {
		const { name } = action.payload;
		const counter = state.counters.find((counter) => counter.name === name);
		if (counter) {
			counter.streak += 1;
			counter.value += 1;
		}
	},
	decrement: (state, action) => {
		const { name } = action.payload;
		const counter = state.counters.find((counter) => counter.name === name);
		if (counter) {
			counter.streak -= 1;
			counter.value -= 1;
		}
	},
  },
});

export const { addHabit, increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
