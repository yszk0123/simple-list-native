import { Icon } from 'expo';
import React from 'react';
import { Color } from '../constants/Color';

type Props = {
  name: string;
  focused: boolean;
};

export const TabBarIcon: React.FunctionComponent<Props> = ({
  name,
  focused,
}) => {
  return (
    <Icon.Ionicons
      name={name}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Color.tabIconSelected : Color.tabIconDefault}
    />
  );
};
