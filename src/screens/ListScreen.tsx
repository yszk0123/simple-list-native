import { Container, Content } from 'native-base';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { List } from '../features/List';
import { NavigationComponent } from '../types/ApplicationType';

interface Props {}

export const ListScreen: NavigationComponent<Props> = () => {
  return (
    <Container>
      <Content>
        <Text>Hello</Text>
        <List />
      </Content>
    </Container>
  );
};

ListScreen.navigationOptions = {
  title: 'List',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
