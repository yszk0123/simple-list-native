import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  name: string;
  focused: boolean;
};

export const TabBarIcon: React.FunctionComponent<Props> = ({
  name,
  focused,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        ...(focused ? styles.focused : {}),
      }}
    >
      {name}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#fff',
  },
  focused: {
    backgroundColor: '#ccf',
  },
});
