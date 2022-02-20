import React from "react";
import { Form, FormField, TextInput, Box, Button, Image, Text } from "grommet";
import { Outlet } from "react-router-dom";

export const LoginPage = () => {
  const [value, setValue] = React.useState({});
  return (
    <Box flex background="black" align="center" justify="center">
      <Image height="28vh" src="/assets/sl1_logo.png" margin="medium" />

      <Outlet />
    </Box>
  );
};
