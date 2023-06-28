import { Stack, Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default () => {
	return (
		<SafeAreaProvider>
			<Stack screenOptions={{
				headerShown: false
			}}>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</SafeAreaProvider>
	);
};