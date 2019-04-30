import {
  Button,
  Container,
  Content,
  List as UIList,
  ListItem,
  Text,
} from 'native-base';
import React from 'react';
import { useActions } from 'typeless';
import { getListState, ListActions, useModule } from '../ListInterface';
import '../ListModule';

interface Props {}

export const List: React.FunctionComponent<Props> = () => {
  useModule();

  const { increment, decrement } = useActions(ListActions);
  const { loading, count } = getListState.useState() || {
    loading: false,
    count: 0,
  };

  return (
    <Container>
      <Content>
        <UIList>
          <ListItem>
            <Text>count = {count}</Text>
          </ListItem>
          <ListItem>
            <Text>loading = {String(loading)}</Text>
          </ListItem>
          <ListItem>
            <Button vertical onPress={increment}>
              <Text>Increment</Text>
            </Button>
          </ListItem>
          <ListItem>
            <Button vertical onPress={decrement}>
              <Text>Decrement</Text>
            </Button>
          </ListItem>
        </UIList>
      </Content>
    </Container>
  );
};
