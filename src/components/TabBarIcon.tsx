import { Color } from 'constants/Color';
import { Icon } from 'expo';
import React from 'react';

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
