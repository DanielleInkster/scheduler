import React from 'react';
import {
  Typography,
  responsiveFontSizes,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core';
import 'fontsource-roboto';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const heading = 'Welcome to MyFakeBusiness';
const subHeading = 'We\'re a fake business and you can be too!'
const text =
  " Want to learn more about creating your own fake business? We'd love to help you out." +
  'Request an appointment with one of our many fake experts to pitch us your best ideas.';

export default function Intro() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Typography variant="h4" gutterBottom>
          <b>{heading}</b>
        </Typography>
        <img
          src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png"
          alt="generic person icon"
          width="200vw"
          height="200vh"
        ></img>
        <Typography variant="h5" gutterBottom>
          {subHeading}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {text}
        </Typography>
      </MuiThemeProvider>
    </div>
  );
}
