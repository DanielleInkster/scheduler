import React from 'react';
import { Typography } from '@material-ui/core';
import 'fontsource-roboto';

export default function Intro() {
  return (
    <div>
      <Typography variant="h5">
        <h2>Welcome to MyFakeBusiness.com.</h2>
        <h4> We're a fake business, and you can be too!</h4>
        Want to learn more? Book an appointment for an info session with one of our many fake
        experts to guide you on your journey.
      </Typography>
    </div>
  );
}
