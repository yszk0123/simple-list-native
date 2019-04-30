import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationComponent } from 'types/ApplicationType';

interface Props {}

export const DummyScreen: NavigationComponent<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Dummy</Text>
    </View>
  );
};

DummyScreen.navigationOptions = {
  title: 'Dummy',
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
