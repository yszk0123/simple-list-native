import { AppLoading, Asset, Font, Icon } from 'expo';
import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  skipLoadingScreen?: boolean;
}

export const Loader: React.FunctionComponent<Props> = ({
  children,
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
    return <View style={styles.container}>{children}</View>;
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
    }),
  ]);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
