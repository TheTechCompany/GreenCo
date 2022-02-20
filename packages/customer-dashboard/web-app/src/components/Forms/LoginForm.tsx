import React from "react";
import { Form, FormField, TextInput, Box, Button, Image, Text } from "grommet";
import { Hide, View } from "grommet-icons";

export const LoginForm = () => {
  const [value, setValue] = React.useState({});
  return (
    <Box
      border={{ color: "white", size: "small" }}
      round="medium"
      align="center"
      justify="center"
      width="large"
      height="medium"
    >
      <Box>
        <Text size="xlarge" alignSelf="center" textAlign="center">
          Username
        </Text>

        <TextInput id="text-input-id" name="name" textAlign="center" />
      </Box>
      <Box>
        <Text size="xlarge" alignSelf="center" textAlign="end">
          Password
        </Text>
        <TextInput
          id="pass-input-id"
          name="password"
          type="password"
          textAlign="center"
        />
      </Box>
      <Box direction="row" gap="medium" margin="small">
        <Button type="submit" label="Submit" color="white" href="/dashboard" />
      </Box>
      <Box
        direction="row"
        justify="between"
        width="medium"
        margin={{ top: "medium", bottom: "none" }}
      >
        <Button
          label="New account sign up"
          color="black"
          fill="horizontal"
          href="/login/signup"
        />
        <Button
          label="I have forgotten my password"
          color="black"
          fill="horizontal"
          href="/login/resetpassword"
        />
      </Box>
    </Box>
  );
};
