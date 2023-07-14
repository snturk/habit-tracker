import { View, StyleSheet, Text } from "react-native";
import HabitCounter from "../../features/habit-counter/HabitCounter";
import { useAppSelector } from "../../store/store";
import styles from "../../utils/globalStyles";
import CreateHabitButton from "../../features/habit-counter/CreateHabitButton";
import { useState } from "react";
import CreateHabitModal from "../../features/habit-counter/CreateHabitModal";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HabitsScreen() {
	const habits = useAppSelector((state) => state.habitCounters.counters);
	const [showCreateModal, setShowCreateModal] = useState(false);
  return (
	<SafeAreaView style={styles.stdContainer}>
		<CreateHabitButton setShowForm={setShowCreateModal} />
		<Text style={localStyles.title}>You are on streak at {habits.length} Habits</Text>
		<CreateHabitModal show={showCreateModal} setShow={setShowCreateModal} />
		{habits.length > 0 && habits.map((habit) => (
			<HabitCounter key={habit.name} habit={habit} />
		))}
	</SafeAreaView>
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