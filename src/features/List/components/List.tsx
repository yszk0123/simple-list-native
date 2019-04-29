import React from 'react';
import { Button, Text, View } from 'react-native';
import { useActions } from 'typeless';
import { getListState, ListActions, useModule } from '../ListInterface';

type Props = {};

export const List: React.FunctionComponent<Props> = () => {
  useModule();

  const { increment, decrement } = useActions(ListActions);
  const { loading, count } = getListState.useState();

  return (
    <View>
      <Text>count = {count}</Text>
      <Text>loading = {loading}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};
