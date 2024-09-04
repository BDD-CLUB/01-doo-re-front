'use client';

import { Box, Flex, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { BiFile, BiLink } from 'react-icons/bi';

import { deleteDocument, getDocument } from '@/app/api/document';
import IconBox from '@/components/IconBox';
import ActionModal from '@/components/Modal/ActionModal';
import S3_URL from '@/constants/s3Url';
import CreateDocumentModal from '@/containers/study/CreateDocumentModal';
import { useGetFetchWithToken, useMutateWithToken } from '@/hooks/useFetchWithToken';
import colors from '@/theme/foundations/colors';
import { DocumentDetail } from '@/types';

import { DocumentModalProps } from './types';

const DocumentModal = ({ id, isOpen, setIsDocsModalOpen, setReload }: DocumentModalProps) => {
  const [createDocsModalOpen, setIsCreateDocsModalOpen] = useState<boolean>(false);

  const document: DocumentDetail = useGetFetchWithToken(getDocument, [id]);
  const deleteDocs = useMutateWithToken(deleteDocument);
  const onDelete = () => {
    deleteDocs(id).then(() => {
      setIsDocsModalOpen(false);
      setReload((prev: boolean) => !prev);
      // Todo : delete document 후에 페이지 리로드 필요
    });
  };

  const EditDocs = () => {
    setIsDocsModalOpen(false);
    setIsCreateDocsModalOpen(false);
    setReload((prev: boolean) => !prev);
  };

  return (
    <ActionModal
      isOpen={isOpen}
      onClose={() => setIsDocsModalOpen(false)}
      title={`[ ${document?.title} ]`}
      subButtonText="삭제"
      mainButtonText="수정"
      onSubButtonClick={() => onDelete()}
      onMainButtonClick={() => setIsCreateDocsModalOpen(true)}
    >
      <Flex textStyle="bold_md" gap="4">
        <Box w={3 / 5} p="4" textColor="white" bgColor={colors.orange_dark} rounded="2xl">
          <Text>{document?.description}</Text>
        </Box>
        <Flex justify="space-between" direction="column" w={2 / 5} p="4" bgColor={colors.orange_light} rounded="2xl">
          <Flex justify="space-between">
            <Text> 작성자</Text>
            <Text> {document?.uploaderName} </Text>
          </Flex>
          <Flex justify="space-between">
            <Text> 공개범위</Text>
            <Text> {document?.accessType === 'ALL' ? '전체 공개' : '팀 공개'} </Text>
          </Flex>
        </Flex>
      </Flex>
      <Text textStyle="bold_xl" mt="8">
        첨부파일
      </Text>
      <Box className="scroll" overflowY="auto" maxH="72" mt="4">
        <Flex direction="column" gap="2">
          {document?.type === 'IMAGE' &&
            document?.files.map((data) => (
              <Link key={data.url} href={S3_URL(data.url)} download>
                <Image alt={data.id.toString()} id={data.id.toString()} rounded="2xl" src={S3_URL(data.url)} />
              </Link>
            ))}
          {document?.type === 'DOCUMENT' &&
            document?.files.map((data) => (
              <Link key={data.url} href={S3_URL(data.url)} download id={data.id.toString()}>
                <IconBox
                  // leftIcon={data.type === 'pdf' ? <BiFile size={30} /> : <BsFolder2Open size={30} />}
                  leftIcon={<BiFile size={30} />}
                  content={data.url.toString()}
                />
              </Link>
            ))}
          {document?.type === 'URL' &&
            document.files.map((data) => (
              <Link key={data.url} href={data.url}>
                <IconBox leftIcon={<BiLink size="30" />} content={data.url} />
              </Link>
            ))}
        </Flex>
      </Box>
      <CreateDocumentModal isOpen={createDocsModalOpen} onClose={EditDocs} categoryData={document} category="update" />
    </ActionModal>
  );
};
export default DocumentModal;
