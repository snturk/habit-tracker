import { View, Text, SafeAreaView } from "react-native";
import { globalStyles } from "../utils/globalStyles";

export default function IndexScreen() {
	return (
		<SafeAreaView style={globalStyles.stdContainer}>
			<Text>Welcome to the app!</Text>
		</SafeAreaView>
	);
}