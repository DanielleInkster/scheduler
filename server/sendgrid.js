const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'danielle.inkster@gmail.com', // Change to your recipient
  from: 'MyFakeBusinessAcct@gmail.com', // Change to your verified sender
  subject: 'Your Appointment Request with MyFakeBusiness',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent');
  })
  .catch((error) => {
    console.error(error);
  });
