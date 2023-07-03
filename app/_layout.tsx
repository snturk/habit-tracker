import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import {store} from './store/store';
import { StyleSheet } from 'react-native';

export default () => {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<Stack screenOptions={{
					headerShown: false
				}}>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				</Stack>
			</SafeAreaProvider>
		</Provider>
	);
};