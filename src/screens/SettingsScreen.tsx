import { ExpoConfigView } from '@expo/samples';
import React from 'react';
import { NavigationComponent } from 'types/ApplicationType';

type Props = {};

export const SettingsScreen: NavigationComponent<Props> = () => {
  return <ExpoConfigView />;
};

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
