import { View, Text, StyleSheet, Pressable } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { HabitCounterModel, decrement, increment } from "./habitCounterSlice";
import { FontAwesome5 } from "@expo/vector-icons";

type HabitCounterProps = {
  habit: HabitCounterModel;
};

export default function HabitCounter(props: HabitCounterProps) {
  const dispatch = useAppDispatch();
  const habit = props.habit

  return (
    <View style={styles.container}>
      <View style={styles.textGroup}>
        <Text style={styles.text}>{habit.name}</Text>
      </View>
      <View style={styles.buttonGroup}>
        {/*TODO: Isbad ikonlara etki etmeli (renk, tip vs.) */}
        <Pressable style={habit?.value === 0 ? styles.disabledButton : {}}
        onPress={() => dispatch(decrement({name: habit.name}))}><FontAwesome5 name="minus" size={24} color="#4CAF50" /></Pressable>
        <Text style={styles.count}>{habit?.value}</Text>
        <Pressable onPress={() => dispatch(increment({name: habit.name}))}><FontAwesome5 name="plus" size={24} color="#4CAF50" /></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    padding: 16,
    width: "85%",
    backgroundColor: "#87CEEB",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 10,
  },
  textGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 100,
  },
  disabledButton: {
    opacity: 0.5,
  },
  text: {
    fontSize: 20,
    color: "#333333",
  },
  emoji: {
    fontSize: 30,
    marginRight: 10,
  },
  count: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    position: "absolute",
    right: 40,
  },
});
