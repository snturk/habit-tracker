import { View, Text, SafeAreaView } from "react-native";
import { globalStyles } from "../utils/globalStyles";

export default function NotificationsScreen() {
  return (
	<SafeAreaView style={globalStyles.stdContainer}>
	  <Text>Notifications</Text>
	</SafeAreaView>
  );
}