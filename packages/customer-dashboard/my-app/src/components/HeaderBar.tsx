import React from "react";
import { Text, Image, Header, Button, Grommet } from "grommet";

export const HeaderBar = () => (
  <Header
    background="#000000"
    margin="none"
    pad={{horizontal: "small", vertical: 'medium'}}
    elevation="small"
    justify="between"
  >
    <Image height="28vh" src="/assets/sl1_logo.png" />
  </Header>
);

