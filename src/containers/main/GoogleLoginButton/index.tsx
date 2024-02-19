import { Image, Button, Box } from '@chakra-ui/react';

const isLogin = true;

const GoogleLoginButton = () => {
  if (isLogin) {
    return <Box h="16" />;
  }
  return (
    <Button
      justifyContent="start"
      w="fit-content"
      h="16"
      p="0"
      _hover={{ opacity: '0.8' }}
      _active={{ opacity: '0.8' }}
      bgColor="transparent"
    >
      <Image h="100%" alt="google_sign_in" src="/images/google_sign_in.png" />
    </Button>
  );
};

export default GoogleLoginButton;
