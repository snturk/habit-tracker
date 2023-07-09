import { View, StyleSheet, Text } from "react-native";
import HabitCounter from "../../features/habit-counter/HabitCounter";
import { store, useAppSelector } from "../../store/store";
import CreateHabitForm from "../../features/habit-counter/CreateHabitModal";
import styles from "../../utils/globalStyles";
import CreateHabitButton from "../../features/habit-counter/CreateHabitButton";
import { useState } from "react";
import CreateHabitModal from "../../features/habit-counter/CreateHabitModal";

export default function HabitsScreen() {
	const habits = useAppSelector((state) => state.habitCounters.counters);
	const [showCreateModal, setShowCreateModal] = useState(false);
  return (
	<View style={styles.stdContainer}>
		<CreateHabitButton setShowForm={setShowCreateModal} />
		<Text style={localStyles.title}>You are on streak at <b>{habits.length} Habits</b></Text>
		<CreateHabitModal show={showCreateModal} setShow={setShowCreateModal} />
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