import { View, StyleSheet, Text } from "react-native";
import HabitCounter from "../../features/habit-counter/HabitCounter";
import { store, useAppSelector } from "../../store/store";
import CreateHabitForm from "../../features/habit-counter/CreateHabitForm";
import styles from "../../utils/globalStyles";

export default function HabitsScreen() {
	const habits = useAppSelector((state) => state.habitCounters.counters);
  return (
	<View style={styles.stdContainer}>
		<Text style={localStyles.title}>You are on streak at <b>{habits.length} Habits</b></Text>
		<CreateHabitForm />
		{habits.length > 0 && habits.map((habit) => (
			<HabitCounter key={habit.name} habit={habit} />
		))}
	</View>
  );
}

const localStyles = StyleSheet.create({
	title: {
		fontSize: 20,
		marginBottom: 20,
		marginTop: 20,
		color: "#FFFFFF",
	}
})