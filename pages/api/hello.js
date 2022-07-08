const sdk = require('api')('@mailerliteapi/v2#3vxhg2kkw1s00g2');


async function postSubscriber(email) {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'X-MailerLite-ApiDocs': 'true',
      'Content-Type': 'application/json',
      'X-MailerLite-ApiKey': process.env.X_Mailer_Lite_ApiKey
    },
    body: JSON.stringify({ email: email })
  };
  try {
    const response = await fetch('https://api.mailerlite.com/api/v2/subscribers', options);
    return await response.json()
  } catch (error) {
    return await error.json()
  }
}

export default async function handler(req, res) {
  const responce = await postSubscriber(req.body.email)
  res.status(200).json(responce)
}
