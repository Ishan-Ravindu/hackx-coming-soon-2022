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
  const responce = await postSubscriber(JSON.parse(req.body).email)
  if (responce.error) {
    res.status(responce.error.code).json(responce)
  } else {
    res.status(200).json(responce)
  }
}
