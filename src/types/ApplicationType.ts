import React from 'react';

interface NavigationOptions {
  title: string;
}

export interface NavigationComponent<Props>
  extends React.FunctionComponent<Props> {
  navigationOptions: NavigationOptions;
}
