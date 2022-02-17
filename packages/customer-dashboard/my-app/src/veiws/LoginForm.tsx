import React from "react";
import { Form, FormField, TextInput, Box, Button } from "grommet";
import { Hide, View } from 'grommet-icons';


export const LoginForm =   
    () => {
        const [value, setValue] = React.useState({});
        return (
          <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={({ value }) => {}}
            color="black"
          >
            <FormField name="name" htmlFor="text-input-id" label="Name">
              <TextInput id="text-input-id" name="name" />
            </FormField>
            <FormField name="Password" htmlFor="text-input-id" label="Password">
            <TextInput id="pass-input-id" name="password" type="password"/>
            </FormField>
        
            <Box direction="row" gap="medium">
              <Button type="submit" primary label="Submit" color="black"/>
              <Button type="reset" label="Reset" color="black" />
            </Box>
          </Form>
        );
        }
