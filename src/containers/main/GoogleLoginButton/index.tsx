import { Image, Button, Box } from '@chakra-ui/react';
import { useAtomValue } from 'jotai';

import { userAtom } from '@/atom';

const GOOGLE_LOGIN_URL =
  'https://accounts.google.com/o/oauth2/v2/auth?' +
  `client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&` +
  `redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL}&` +
  `response_type=code&` +
  `scope=${process.env.NEXT_PUBLIC_GOOGLE_SCOPE}`;

const GoogleLoginButton = () => {
  const user = useAtomValue(userAtom);

  if (user.isLogin) {
    return <Box h={{ base: '8', lg: '10', '2xl': '14' }} />;
  }
  return (
    <Button
      as="a"
      justifyContent="start"
      w="fit-content"
      h={{ base: '8', lg: '10', '2xl': '14' }}
      p="0"
      _hover={{ opacity: '0.8' }}
      _active={{ opacity: '0.8' }}
      bgColor="transparent"
      href={GOOGLE_LOGIN_URL}
    >
      <Image h="100%" alt="google_sign_in" src="/images/google_sign_in.png" />
    </Button>
  );
};

export default GoogleLoginButton;
