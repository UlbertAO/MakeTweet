import * as express from 'express';
const apiRouter = express.Router();

import axios from 'axios';
import OAuth from 'oauth-1.0a';

apiRouter.route('/tweet').post((req, res) => {
  const postContent = req.body?.text;
  // Twitter API credentials
  const apiKey = req.body?.apiKey;
  const apiSecretKey = req.body?.apiSecretKey;
  const accessToken = req.body?.accessToken;
  const accessTokenSecret = req.body?.accessTokenSecret;

  if (!apiKey || !apiSecretKey || !accessToken || !accessTokenSecret) {
    res.status(400).json({ message: 'payload not proper' });
    return;
  }
  // Create an OAuth object
  const oauth = new OAuth({
    consumer: { key: apiKey, secret: apiSecretKey },
    signature_method: 'HMAC-SHA1',
    hash_function(base_string, key) {
      return require('crypto')
        .createHmac('sha1', key)
        .update(base_string)
        .digest('base64');
    },
  });

  // Twitter API endpoint
  const apiUrl = 'https://api.twitter.com/2/tweets';

  // Example request parameters

  const params = {
    text: postContent,
  };

  // Generate the OAuth signature
  const requestData = {
    url: apiUrl,
    method: 'POST',
  };
  const authorization = oauth.authorize(requestData, {
    key: accessToken,
    secret: accessTokenSecret,
  });

  // Include the OAuth headers in the request
  const headers = oauth.toHeader(authorization);

  // Make the request using axios
  axios
    .post(apiUrl, params, {
      headers: {
        Authorization: headers.Authorization,
      },
    })
    .then((response) => {
      console.log('asd', response.data);
      res.json(response.data);
    })
    .catch((error) => {
      res.status(500);
      res.json({ message: 'Something went wrong' });
    });
});

export default apiRouter;
