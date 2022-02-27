import React from "react";
import { Form, FormField, TextInput, Box, Button, Image, Text } from "grommet";
import { Hide, View } from "grommet-icons";

const username = "exampleUser";
const emailAddress = "exampleEmail";

export const ChangePassword = () => {
  const [value, setValue] = React.useState({});
  return (
    <Box flex background="black" align="center" justify="center">
      <Box
        border={{ color: "white", size: "small" }}
        round="medium"
        align="center"
        justify="center"
        width="large"
        height="medium"
      >
        <Box pad="small">
          <Text size="xlarge" alignSelf="center" textAlign="end">
            Old Password
          </Text>
          <TextInput
            id="pass-input-id"
            name="password"
            type="password"
            textAlign="center"
          />
        </Box>
        <Box pad="small">
          <Text size="xlarge" alignSelf="center" textAlign="end">
            New Password
          </Text>
          <TextInput
            id="pass-input-id"
            name="password"
            type="password"
            textAlign="center"
          />
        </Box>
        <Box pad="small">
          <Text size="xlarge" alignSelf="center" textAlign="end">
            Re-enter Password
          </Text>
          <TextInput
            id="pass-input-id"
            name="reEnterPassword"
            type="password"
            textAlign="center"
          />
        </Box>
        <Box direction="row" gap="medium" margin="small">
          <Button
            type="submit"
            label="Confrim"
            color="white"
            href="/dashboard"
          />
        </Box>
        <Box
          direction="row"
          justify="between"
          width="medium"
          margin={{ top: "medium", bottom: "none" }}
        ></Box>
      </Box>
    </Box>
  );
};
