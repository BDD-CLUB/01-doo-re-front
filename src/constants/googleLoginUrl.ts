const GOOGLE_LOGIN_URL =
  'https://accounts.google.com/o/oauth2/v2/auth?' +
  `client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&` +
  `redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL}&` +
  `response_type=code&` +
  `scope=${process.env.NEXT_PUBLIC_GOOGLE_SCOPE}`;

export default GOOGLE_LOGIN_URL;
