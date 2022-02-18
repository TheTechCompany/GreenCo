import React from "react";
import { Form, FormField, TextInput, Box, Button, Image, Text } from "grommet";
import { Hide, View } from "grommet-icons";

// NEED TO FIGURE OUT HOW TO CENTER THE HEADING ETC

export const LoginForm = () => {
  const [value, setValue] = React.useState({});
  return (
    <Box
      flex
      background="black"
      align="center"
      justify="center"
    >
      <Image height="28vh" src="/assets/sl1_logo.png" margin="medium" />

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

            <TextInput id="text-input-id" name="name"  />
          </Box>
          <Box>
            <Text size="xlarge" alignSelf="center" textAlign="end">
              Password
            </Text>
            <TextInput
              id="pass-input-id"
              name="password"
              type="password"
            />
          </Box>
          <Box direction="row" gap="medium">
            <Button
              type="submit"
              label="Submit"
              color="white"
              href="/dashboard"
            />
          </Box>
        <Box
          direction="row"
          justify="between"
          width="medium"
          margin={{ top: "medium", bottom: "none" }}
        >
          <Button label="New account sign up" color="black" fill="horizontal" />
          <Button
            label="I have forgotten my password"
            color="black"
            fill="horizontal"
          />
        </Box>
      </Box>
    </Box>
  );
};
