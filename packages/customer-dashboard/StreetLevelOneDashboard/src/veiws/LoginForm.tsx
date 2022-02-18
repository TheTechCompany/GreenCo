import React from "react";
import { Form, FormField, TextInput, Box, Button, Image, Text } from "grommet";
import { Hide, View } from "grommet-icons";

// NEED TO FIGURE OUT HOW TO CENTER THE HEADING ETC

export const LoginForm = () => {
  const [value, setValue] = React.useState({});
  return (
    <Box
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
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
        <Form
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
          onReset={() => setValue({})}
          onSubmit={({ value }) => {}}
          color="black"
        >
          <Text size="xlarge" alignSelf="center" textAlign="center">
            Username
          </Text>
          <FormField
            name="name"
            htmlFor="text-input-id"
            alignSelf="center"
            alignContent="center"
            justify="center"
            textAlign="center"
          >
            <TextInput id="text-input-id" name="name" textAlign="center" />
          </FormField>
          <Text size="xlarge" alignSelf="center" textAlign="end">
            Password
          </Text>

          <FormField
            htmlFor="text-input-id"
            alignSelf="center"
            justify="center"
            textAlign="center"
          >
            <TextInput
              id="pass-input-id"
              name="password"
              type="password"
              textAlign="center"
            />
          </FormField>

          <Box direction="row" gap="medium">
            <Button
              type="submit"
              label="Submit"
              color="white"
              href="/dashboard"
            />
          </Box>
        </Form>
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
