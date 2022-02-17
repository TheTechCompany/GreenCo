import React from "react";
import { Form, FormField, TextInput, Box, Button, Image } from "grommet";
import { Hide, View } from "grommet-icons";

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
        pad="medium"
        align="center"
        justify="center"
        width="large"
        height="medium"
        alignContent="center"
      >
        <Form
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
          onReset={() => setValue({})}
          onSubmit={({ value }) => {}}
          color="black"
        >
          <FormField
            name="name"
            htmlFor="text-input-id"
            label="Name"
            alignSelf="center"
            alignContent="end"
            justify="center"
          >
            <TextInput id="text-input-id" name="name" textAlign="center" />
          </FormField>
          <FormField
            name="Password"
            htmlFor="text-input-id"
            label="Password"
            alignSelf="center"
            justify="center"
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
              primary
              label="Submit"
              color="black"
              href="/dashboard"
            />
            <Button type="reset" label="Reset" color="black" />
          </Box>
        </Form>
      </Box>
    </Box>
  );
};
