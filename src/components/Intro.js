import React from 'react';
import { Typography } from '@material-ui/core';
import 'fontsource-roboto';

export default function Intro() {
  return (
    <div>
      <Typography variant="h5">
        <h2>Welcome to MyFakeBusiness.com</h2>
        <img
          src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png"
          alt="generic person icon"
          width="200vw"
          height="200vh"
        ></img>
        <h4> We&apos;re a fake business and you can be too!</h4>
        Want to learn more about creating your own fake business? We&apos;d love to help you out.
        Request an appointment with one of our many fake experts to pitch us your best ideas.
      </Typography>
    </div>
  );
}
