import { TabBarIcon } from 'components/TabBarIcon';
import React from 'react';
import { Platform } from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import {
  DummyScreen as HomeScreen,
  DummyScreen as SettingsScreen,
} from 'screens/DummyScreen';
import { ListScreen } from 'screens/ListScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const ListStack = createStackNavigator({
  List: ListScreen,
});

ListStack.navigationOptions = {
  tabBarLabel: 'List',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export const MainTabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    ListStack,
    SettingsStack,
  },
  {
    initialRouteName: 'ListStack',
  },
);
