import { Box, Flex, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { BiFile, BiLink } from 'react-icons/bi';
import { BsFolder2Open } from 'react-icons/bs';

import IconBox from '@/components/IconBox';
import ActionModal from '@/components/Modal/ActionModal';
import documentFileData from '@/mocks/documentFileData';
import documentImgData from '@/mocks/documentImgData';
import documentLinkData from '@/mocks/documentLinkData';
import colors from '@/theme/foundations/colors';

import { DocumentModalProps } from './types';

const DocumentModal = ({ isOpen, setIsModalOpen, title, description, type }: DocumentModalProps) => {
  const linkData = documentLinkData;
  const imgData = documentImgData;
  const fileData = documentFileData;
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
      <Flex textStyle="bold_md" gap="4">
        <Box w={3 / 5} p="4" textColor="white" bgColor={colors.orange_dark} rounded="2xl">
          <Text>{description}</Text>
        </Box>
        <Flex justify="space-between" direction="column" w={2 / 5} p="4" bgColor={colors.orange_light} rounded="2xl">
          <Flex justify="space-between">
            <Text> 작성자</Text>
            <Text> 김철수 </Text>
          </Flex>
          <Flex justify="space-between">
            <Text> 공개범위</Text>
            <Text> 전체 </Text>
          </Flex>
        </Flex>
      </Flex>
      <Text textStyle="bold_xl" mt="8">
        첨부파일
      </Text>
      <Box className="scroll" overflowY="auto" maxH="72" mt="4">
        <Flex direction="column" gap="2">
          {type === 'image' &&
            imgData.map((data) => (
              <Link key={data.url} href={data.url} download>
                <Image alt={data.name} id={data.id.toString()} rounded="2xl" src={data.url} />{' '}
              </Link>
            ))}
          {type === 'file' &&
            fileData.map((data) => (
              <Link key={data.url} href={data.url} download id={data.id.toString()}>
                <IconBox
                  leftIcon={data.type === 'pdf' ? <BiFile size={30} /> : <BsFolder2Open size={30} />}
                  content={data.name}
                />
              </Link>
            ))}
          {type === 'link' &&
            linkData.map((data) => (
              <Link key={data.url} href={data.url}>
                <IconBox leftIcon={<BiLink size="30" />} content={data.name} />
              </Link>
            ))}
        </Flex>
      </Box>
    </ActionModal>
  );
};
export default DocumentModal;
