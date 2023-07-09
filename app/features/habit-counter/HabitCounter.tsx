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
      <View 
      style={[styles.rightPanel, habit.isQuitting ? styles.quitting : styles.notQuitting]}>
        <Pressable style={styles.streakButton} onPress={() => dispatch(increment({name: habit.name}))}>
          <Text style={styles.streak}>
            {habit.streak}
          </Text>
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
    width: "94%",
    height: 80,
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
    width: "calc(100% - 125px)",
  },
  rightPanel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 75,
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
  streakButton : {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  quitting: {
    backgroundColor: "#C31712",
  },
  notQuitting: {
    backgroundColor: "#71A29E",
  },
});
