import React from 'react';
import { List } from '../features/List';
import { NavigationComponent } from '../types/ApplicationType';

interface Props {}

export const ListScreen: NavigationComponent<Props> = () => {
  return <List />;
};

ListScreen.navigationOptions = {
  title: 'List',
};
