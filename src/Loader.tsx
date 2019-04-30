import { AppNavigator } from 'navigation/AppNavigator';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';

type Props = {
  skipLoadingScreen?: boolean;
};

export const Loader: React.FunctionComponent<Props> = ({
  skipLoadingScreen,
}) => {
  const [isLoadingComplete] = useState(true);

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
