import { View, Text, StyleSheet, Pressable } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { HabitCounterModel, increment } from "./habitCounterSlice";
import { FontAwesome5 } from "@expo/vector-icons";
import globalStyles from "../../utils/globalStyles";

type HabitCounterProps = {
  habit: HabitCounterModel;
};

export default function HabitCounter(props: HabitCounterProps) {
  const dispatch = useAppDispatch();
  const habit = props.habit;
  const getBackgroundColor = () => {
    if (habit.value < 5) {
      return "#87CEEB";
    } else if (habit.value < 10) {
      return "#FFD700";
    } else if (habit.value < 15) {
      return "#FFA500";
    } else if (habit.value < 20) {
      return "#FF4500";
    } else if (habit.value < 30) {
      return "#53D2EA";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textGroup}>
        <Text style={styles.text}>{habit.name}</Text>
      </View>
      <View style={styles.buttonGroup}>
        {/*TODO: Isbad ikonlara etki etmeli (renk, tip vs.) */}
        <Pressable style={[styles.button, {backgroundColor: getBackgroundColor()}]}
        onPress={() => dispatch(increment({name: habit.name}))}>
          <Text style={styles.count}>{habit?.value}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 26,
    paddingVertical: 18,
    width: "85%",
    backgroundColor: "#fbe89e",
    borderWidth: 2,
    borderRadius: 11,
  },
  textGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
  },
  text: {
    fontSize: 20,
    color: "#333333",
  },
  count: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
  },
  // A curved button that looks like a pill
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 14,
    width: 80,
    borderRadius: 13,
    backgroundColor: "#87CEEB",
    borderWidth: 2,
    borderColor: "#333333",
  }
});
