const captureWebsite = require('capture-website');
const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const today = new Date();
const formattedDate = today.toLocaleDateString('en-GB');

(async () => {
  const data = await captureWebsite.buffer('https://coronavirus.data.gov.uk/', {
    height: 1120,
    launchOptions: {
      args: ['--no-sandbox'],
    },
  });

  const email = {
    to: process.env.RECIPIENT_EMAIL,
    from: process.env.SENDER_EMAIL,
    subject: `Covid dashboard update - ${formattedDate}`,
    attachments: [
      {
        content: data.toString('base64'),
        filename: 'screenshot.png',
        type: 'image/png',
        disposition: 'attachment',
        contentId: '<screenshot@covid.dashboard>',
      },
    ],
  };

  await sendgrid.send(email);
})();
