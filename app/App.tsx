import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
// try explicit extension so TypeScript finds the file
import CourseListScreen from './screens/CourseListScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';
import WishlistScreen from './screens/WishlistScreen';

const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CourseStack() {
	// Stack for All Courses
	return (
		<Stack.Navigator initialRouteName="CourseList">
				<Stack.Screen
				name="CourseList"
				component={CourseListScreen}
				options={({ navigation }) => ({
					title: 'All Courses',
					headerLeft: () => (
						<TouchableOpacity
							onPress={() => {
								// navigation is Stack navigation -> parent is Tabs -> parent of Tabs is Drawer
								navigation.getParent()?.getParent()?.dispatch(DrawerActions.openDrawer());
							}}
							style={{ marginLeft: 12 }}
						>
							<Text style={{ fontSize: 20 }}>☰</Text>
						</TouchableOpacity>
					),
				})}
			/>
			<Stack.Screen
				name="CourseDetail"
				component={CourseDetailScreen}
				options={({ navigation, route }) => ({
					title: (route?.params as { title?: string } | undefined)?.title ?? 'Course Detail',
					headerLeft: () => (
						<TouchableOpacity
							onPress={() => {
								navigation.getParent()?.getParent()?.dispatch(DrawerActions.openDrawer());
							}}
							style={{ marginLeft: 12 }}
						>
							<Text style={{ fontSize: 20 }}>☰</Text>
						</TouchableOpacity>
					),
				})}
			/>
		</Stack.Navigator>
	);
}

function CoursesTabs() {
	return (
		<Tabs.Navigator initialRouteName="AllCourses">
			<Tabs.Screen
				name="AllCourses"
				component={CourseStack}
				options={{ headerShown: false, title: 'All Courses' }}
			/>
			<Tabs.Screen
				name="Wishlist"
				component={WishlistScreen}
				options={{
					title: 'My Wishlist',
					// show hamburger on the wishlist tab as well
					headerLeft: ({ tintColor }) => (
						<TouchableOpacity
							onPress={(e) => {
								/* Tabs screen headerLeft won't receive navigation directly here;
								   the screen component WishlistScreen will still show a header via NavigationContainer if needed.
								   Keep headerShown default so the WishlistScreen can show its own header if needed. */
							}}
							style={{ marginLeft: 12 }}
						>
							<Text style={{ fontSize: 20 }}>☰</Text>
						</TouchableOpacity>
					),
				}}
			/>
		</Tabs.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Courses">
				<Drawer.Screen name="Courses" component={CoursesTabs} />
				<Drawer.Screen name="My Profile" component={HomeScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
