import { View, Text, StyleSheet, Pressable } from "react-native";
import { useAppDispatch } from "../../store/store";
import { HabitCounterModel, increment } from "./habitCounterSlice";

type HabitCounterProps = {
  habit: HabitCounterModel;
};

export default function HabitCounter(props: HabitCounterProps) {
  const dispatch = useAppDispatch();
  const habit = props.habit;

  return (
    <View style={styles.container}>
      {habit.emoji ? <View style={styles.leftPanel}>
        <Text style={styles.emoji}>{habit.emoji}</Text>
      </View> : null}
      <View style={styles.centerPanel}>
        <Text style={styles.habitName}>{habit.name}</Text>
      </View>
      <View style={[styles.rightPanel, habit.isQuitting ? styles.quitting : styles.notQuitting]}>
        <Text style={styles.streak} onPress={() => dispatch(increment({name: habit.name}))}>
          {habit.streak}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "94%",
    height: 70,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    marginTop: 20,
    fontWeight: "bold",
    color: "#242426",
    fontFamily: "Inter",
  },
  emoji: {
    fontSize: 30,
  },
  habitName: {
    fontSize: 20,
    textAlign: "left",
  },
  leftPanel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 50,
  },
  centerPanel: {
    textAlign: "left",
    paddingLeft: 10,
    paddingRight: 10,
    width: "calc(100% - 100px)",
  },
  rightPanel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 50,
    height: "100%",
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    boxShadow: "-4px 0px 10px 3px rgba(0, 0, 0, 0.25)"
  },
  streak: {
    fontSize: 20,
    fontWeight: "bold",
  },
  quitting: {
    backgroundColor: "#C31712",
  },
  notQuitting: {
    backgroundColor: "#71A29E",
  },
});
