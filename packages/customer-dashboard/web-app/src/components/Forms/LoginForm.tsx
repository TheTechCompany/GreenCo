import React, { useState } from "react";
import { Form, FormField, TextInput, Box, Button, Image, Text } from "grommet";
import { Hide, View } from "grommet-icons";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate()

  const [ username, setUsername ] = useState<string>('')
  const [ password, setPassword ] = useState<string>('')
  
  const signIn = () => {
    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: username,
        password: password
      })
    }).then((d) => {
      return d.json()
    }).then((result) => {
      localStorage.setItem('token', result.token);
      console.log({result})
    })
    // console.log({
    //   username,
    //   password
    // })
  }

  return (
    <Box
      border={{ color: "white", size: "small" }}
      round="medium"
      justify="center"
      height="medium"
    >
      <Box gap="small" justify="between" pad={{horizontal: 'small'}}>
        <Box >
          <Text size="xlarge" alignSelf="center" textAlign="center">
            Username
          </Text>

          <TextInput 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            id="text-input-id" 
            name="name" 
            textAlign="center" />
        </Box>
        <Box>
          <Text size="xlarge" alignSelf="center" textAlign="end">
            Password
          </Text>
          <TextInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="pass-input-id"
            name="password"
            type="password"
            textAlign="center"
          />
        </Box>
      </Box>
      <Box direction="row" justify="end" gap="medium" margin="small">
        <Button hoverIndicator label="Submit" color="white" onClick={signIn} />
      </Box>
      <Box
        direction="row"
        justify="center"
        width="medium"
        margin={{ top: "medium", bottom: "none" }}
      >
        {/* <Button
          label="New account sign up"
          color="black"
          fill="horizontal"

          href="/login/signup"
        /> */}
        <Box align="center" direction="row" justify="center">
          <Button
            label="Forgot password?"
            color="black"
            onClick={() => navigate('/account-recovery')}
            
          />
        </Box>
        
      </Box>
    </Box>
  );
};
