import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";

export default function Layout() {
  return (
	<Tabs
	screenOptions={{
	headerShown: false,
	}}>
		<Tabs.Screen name="index" options={{title: "Home", tabBarIcon: () => <FontAwesome5 name="home" size={24} color="black" />}} />
		<Tabs.Screen name="habits" options={{title: "My Habits", headerShown: false, tabBarLabel: "My Habits", tabBarIcon: () => <FontAwesome5 name="list-ul" size={24} color="black" />}} />
		<Tabs.Screen name="notifications" options={{title: "Notifications", headerShown: false, tabBarLabel: "Notifications", tabBarIcon: () => <FontAwesome5 name="bell" size={24} color="black" />}} />
	</Tabs>
  );
}