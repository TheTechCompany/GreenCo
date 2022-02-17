import React from "react";
import { List, Box } from "grommet";

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
