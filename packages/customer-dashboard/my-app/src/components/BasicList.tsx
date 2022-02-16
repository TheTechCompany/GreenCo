import React from "react";
import { List } from "grommet";

export const BasicList = () => (
  <List
  primaryKey="name"
  secondaryKey="percent"
  data={[
    { name: 'Alan', percent: 20 },
    { name: 'Bryan', percent: 30 },
    { name: 'Chris', percent: 40 },
    { name: 'Eric', percent: 80 },
  ]}
/>
);

