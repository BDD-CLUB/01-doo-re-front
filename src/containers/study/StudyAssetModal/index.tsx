import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { BiFile } from 'react-icons/bi';

import ActionModal from '@/components/Modal/ActionModal';
import colors from '@/theme/foundations/colors';

import { StudyAssetModalProps } from './types';

const StudyAssetModal = ({ isOpen, setIsModalOpen, title, content, type }: StudyAssetModalProps) => {
  return (
    <ActionModal
      isOpen={isOpen}
      onClose={() => setIsModalOpen(false)}
      title={`[ ${title} ]`}
      subButtonText="삭제"
      mainButtonText="수정"
      onSubButtonClick={() => setIsModalOpen(false)}
      onMainButtonClick={() => setIsModalOpen(false)}
    >
      <Flex gap={4}>
        <Box w={3 / 5} p={4} textColor="white" bgColor={colors.orange_dark} rounded="2xl">
          <Text textStyle="bold_sm">{content}</Text>
        </Box>
        <Flex justify="space-between" direction="column" w={2 / 5} p={4} bgColor={colors.orange_light} rounded="2xl">
          <Flex textStyle="bold_sm" justify="space-between">
            <Text> 작성자</Text>
            <Text> 김철수 </Text>
          </Flex>
          <Flex textStyle="bold_sm" justify="space-between">
            <Text> 공개범위</Text>
            <Text> 전체공개 </Text>
          </Flex>
        </Flex>
      </Flex>
      <Text textStyle="bold_md" mt={8}>
        첨부파일
      </Text>
      <Box className="scroll" overflowY="auto" maxH={72}>
        <Flex direction="column">
          {type === 'image' && (
            <Image
              alt="img"
              rounded="2xl"
              src="https://plus.unsplash.com/premium_photo-1664110691129-ca0f4fbe8533?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          )}
          {type === 'file' && (
            <Flex textStyle="bold_sm" w="full" p={2} textColor="white" bgColor={colors.orange_light} rounded="2xl">
              <BiFile color="white" width={4} />
              파일이 첨부됩니다
            </Flex>
          )}
          {type === 'link' && <Box>링크가 공유됩니다</Box>}
        </Flex>
      </Box>
    </ActionModal>
  );
};
export default StudyAssetModal;
