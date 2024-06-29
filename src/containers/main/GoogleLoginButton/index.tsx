import { Image, Button, Box } from '@chakra-ui/react';

import GOOGLE_LOGIN_URL from '@/constants/googleLoginUrl';
import useGetUser from '@/hooks/useGetUser';

const GoogleLoginButton = () => {
  const user = useGetUser();

  if (!user || user.isLogin) {
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
