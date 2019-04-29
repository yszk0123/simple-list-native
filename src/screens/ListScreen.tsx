import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationComponent } from 'src/ApplicationType';

interface Props {}

export const ListScreen: NavigationComponent<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

ListScreen.navigationOptions = {
  title: 'List',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
