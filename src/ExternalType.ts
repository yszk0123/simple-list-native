declare module 'expo';

declare module '@expo/samples';

declare module 'react-navigation' {
  interface NavigationContainer {
    navigationOptions: {
      tabBarLabel: string;
      tabBarIcon: React.FunctionComponent<{ focused: boolean }>;
    };
  }
}
