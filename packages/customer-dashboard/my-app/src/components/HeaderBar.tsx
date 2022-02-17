import React from "react";
import { Text, Image, Header, Button, Grommet } from "grommet";

export const HeaderBar = () => (
  <Header
    background="#000000"
    margin="none"
    pad={{ horizontal: "small", vertical: "medium" }}
    elevation="small"
    justify="between"
    height="15vh"
  >
    <Image height="28vh" src="/assets/sl1_logo.png" />
    <Button
      color="white"
      label="Login"
      hoverIndicator
      alignSelf="center"
      href="/login"
    />
  </Header>
);
