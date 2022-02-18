import React from "react";
import { List, Box } from "grommet";

// PROBABLY NOT GOING TO USE THIS ANYMORE

export const BasicList = () => (
  <Box background="brand">
    <List
      primaryKey="name"
      secondaryKey="percent"
      data={[
        { name: "Alan", percent: 20 },
        { name: "Bryan", percent: 30 },
        { name: "Chris", percent: 40 },
        { name: "Eric", percent: 80 },
      ]}
    />
  </Box>
);
