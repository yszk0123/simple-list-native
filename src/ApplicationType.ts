import React from "react";

type NavigationOptions = {
  title: string;
};

export type NavigationComponent<Props> = React.FunctionComponent<Props> & {
  navigationOptions: NavigationOptions;
};
