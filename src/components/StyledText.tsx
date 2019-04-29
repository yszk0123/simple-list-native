import React from 'react';
import { Text } from 'react-native';

type Props = any;

export const MonoText: React.FunctionComponent<Props> = ({
  style,
  ...props
}) => {
  return <Text {...props} style={[style, { fontFamily: 'space-mono' }]} />;
};
