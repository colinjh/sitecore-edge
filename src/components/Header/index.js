import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Header = (props) => (
  <div>
    <p>Header Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default Header;
