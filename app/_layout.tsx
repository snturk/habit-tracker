import { Slot, Stack } from 'expo-router';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import {store} from './store/store';

export default () => {
	var insets = useSafeAreaInsets();
	return (
		<Provider store={store}>
			<Stack screenOptions={{
				headerShown: false
			}}>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</Provider>
	);
};