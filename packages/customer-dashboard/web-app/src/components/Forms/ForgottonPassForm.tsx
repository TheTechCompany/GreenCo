import React from "react";
import { Form, FormField, TextInput, Box, Button, Image, Text } from "grommet";
import { Hide, View } from "grommet-icons";

export const ForgottenPassForm = () => {
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
          Please enter your email address
        </Text>

        <TextInput id="text-input-id" name="name" textAlign="center" />
      </Box>
      <Box direction="row" gap="medium" margin="small">
        <Button
          type="submit"
          label="Reset Password"
          color="white"
          href="/login"
        />
      </Box>
    </Box>
  );
};
