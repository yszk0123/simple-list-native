import { Container, Content, Text } from 'native-base';
import React from 'react';
import { NavigationComponent } from 'types/ApplicationType';

interface Props {}

export const SettingsScreen: NavigationComponent<Props> = () => {
  return (
    <Container>
      <Content>
        <Text>Settings</Text>
      </Content>
    </Container>
  );
};

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
