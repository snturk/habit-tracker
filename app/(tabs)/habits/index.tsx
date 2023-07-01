import { View, StyleSheet } from "react-native";
import HabitCounter from "../../features/habit-counter/HabitCounter";
import { store, useAppSelector } from "../../store/store";
import CreateHabitForm from "../../features/habit-counter/CreateHabitForm";

export default function HabitsScreen() {
	const habits = useAppSelector((state) => state.habitCounters.counters);
  return (
	<View style={styles.container}>
		<CreateHabitForm />
		{habits.length > 0 && habits.map((habit) => (
			<HabitCounter key={habit.name} habit={habit} />
		))}
	</View>
  );
}

const styles = StyleSheet.create({
	  container: {
			marginTop: 50,
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'column',
		},
});