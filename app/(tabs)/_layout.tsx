import { Stack, Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
	<SafeAreaProvider>
		<Tabs
		screenOptions={{
		headerShown: false,
		}}>
			<Tabs.Screen name="home" options={{title: "Home", tabBarIcon: () => <FontAwesome5 name="home" size={24} color="black" />}} />
			<Tabs.Screen name="habits" options={{title: "My Habits", tabBarLabel: "My Habits", tabBarIcon: () => <FontAwesome5 name="list-ul" size={24} color="black" />}} />
			<Tabs.Screen name="notifications" options={{title: "Notifications", tabBarLabel: "Notifications", tabBarIcon: () => <FontAwesome5 name="bell" size={24} color="black" />}} />
		</Tabs>
	</SafeAreaProvider>
  );
}