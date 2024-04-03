import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { BiFile, BiLink } from 'react-icons/bi';

import IconBox from '@/components/IconBox';
import ActionModal from '@/components/Modal/ActionModal';
import studyAssetFileData from '@/mocks/studyAssetFileData';
import studyAssetImgData from '@/mocks/studyAssetImgData';
import studyAssetLinkData from '@/mocks/studyAssetLinkData';
import colors from '@/theme/foundations/colors';

import { StudyAssetModalProps } from './types';

const StudyAssetModal = ({ isOpen, setIsModalOpen, title, content, type }: StudyAssetModalProps) => {
  const linkData = studyAssetLinkData;
  const imgData = studyAssetImgData;
  const fileData = studyAssetFileData;
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
          <Text textStyle="bold_md">{content}</Text>
        </Box>
        <Flex justify="space-between" direction="column" w={2 / 5} p={4} bgColor={colors.orange_light} rounded="2xl">
          <Flex textStyle="bold_md" justify="space-between">
            <Text> 작성자</Text>
            <Text> 김철수 </Text>
          </Flex>
          <Flex textStyle="bold_md" justify="space-between">
            <Text> 공개범위</Text>
            <Text> 전체 </Text>
          </Flex>
        </Flex>
      </Flex>
      <Text textStyle="bold_xl" mt={8}>
        첨부파일
      </Text>
      <Box className="scroll" overflowY="auto" maxH={72}>
        <Flex direction="column" gap={2}>
          {type === 'image' && imgData.map((data) => <Image alt={data.name} rounded="2xl" src={data.url} />)}
          {type === 'file' && fileData.map((data) => <IconBox leftIcon={<BiFile size={20} />} content={data.name} />)}
          {type === 'link' && linkData.map((data) => <IconBox leftIcon={<BiLink size={20} />} content={data.name} />)}
        </Flex>
      </Box>
    </ActionModal>
  );
};
export default StudyAssetModal;
