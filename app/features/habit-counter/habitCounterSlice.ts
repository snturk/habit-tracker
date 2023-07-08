import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface HabitCounterModel {
  streak: number;
  name: string;
  value: number;
  isQuitting: boolean;
  emoji?: string;
}

interface HabitCounterState {
	counters: HabitCounterModel[];
}

const initialState: HabitCounterState = {
	counters: [],
}

type AddHabitPayload = {
	name: string;
	isQuitting: boolean;
	emoji?: string;
}

type IncrementPayload = {
	name: string;
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addHabit: (state, { payload } : PayloadAction<AddHabitPayload>) => {
		let habit: HabitCounterModel = {
			streak: 0,
			name: payload.name,
			value: 0,
			isQuitting: payload.isQuitting,
			emoji: payload.emoji,
		};
		state.counters.push(habit);
	},
	increment: (state, { payload }: PayloadAction<IncrementPayload>) => {
		const { name } = payload;
		const counter = state.counters.find((counter) => counter.name === name);
		if (counter && counter.value >= 0) {
			counter.streak += 1;
			counter.value += 1;
		}
	}
  },
});

export const { addHabit, increment } = counterSlice.actions;

export default counterSlice.reducer;
