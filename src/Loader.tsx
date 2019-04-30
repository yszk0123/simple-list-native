import { AppLoading, Asset, Font, Icon } from 'expo';
import React, { useCallback, useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppNavigator } from './navigation/AppNavigator';

type Props = {
  skipLoadingScreen?: boolean;
};

export const Loader: React.FunctionComponent<Props> = ({
  skipLoadingScreen,
}) => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(true);

  const handleLoadingError = useCallback(error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  }, []);

  const handleFinishLoading = useCallback(() => {
    setIsLoadingComplete(true);
  }, []);

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
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

async function loadResourcesAsync() {
  return Promise.all([
    Asset.loadAsync([
      require('../assets/images/robot-dev.png'),
      require('../assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      // This is the font that we are using for our tab bar
      ...Icon.Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free
      // to remove this if you are not using it in your app
      'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
