'use client';

import { Divider, Flex, Input, Text, Textarea, Button } from '@chakra-ui/react';
import { ChangeEvent, useRef, useState } from 'react';
import { BiFile, BiImage, BiTrash } from 'react-icons/bi';
import { BsLink45Deg } from 'react-icons/bs';

import IconBox from '@/components/IconBox';
import ActionModal from '@/components/Modal/ActionModal';
import StyledRadio from '@/components/StyledRadio';
import StyledRadioGroup from '@/components/StyledRadioGroup';
import color from '@/constants/color';
import { DocumentModalProps, DocumentType, DocumentList } from '@/containers/study/DocumentModal/type';

const DocumentBoxIcon = {
  img: <BiImage />,
  file: <BiFile />,
  url: <BsLink45Deg />,
};

const DocumentModal = ({ isOpen, onClose }: DocumentModalProps) => {
  const [doctype, setDocType] = useState<DocumentType>('img');
  const [docList, setDocList] = useState<DocumentList>({
    img: [],
    file: [],
    url: [],
  });
  const imgInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);

  const onConfirmButtonClick = () => {
    onClose();
  };

  const handleGetDoc = {
    img: (e: ChangeEvent<HTMLInputElement>) => {
      const imgs = Array.from(e.target.files || []);
      setDocList((prev) => ({
        ...prev,
        img: [
          ...prev.img,
          ...imgs.map((img) => ({
            name: img.name,
            content: img,
          })),
        ],
      }));
    },
    file: (e: ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      setDocList((prev) => ({
        ...prev,
        file: [
          ...prev.file,
          ...files.map((file) => ({
            name: file.name,
            content: file,
          })),
        ],
      }));
    },
    url: () => {
      if (urlInputRef.current?.value) {
        const url = urlInputRef.current.value;
        setDocList((prev) => ({
          ...prev,
          url: [
            ...prev.url,
            {
              name: url,
              content: url,
            },
          ],
        }));
        urlInputRef.current.value = '';
      }
    },
  };

  const handleAddDoc = {
    img: () => {
      imgInputRef.current?.click();
    },
    file: () => {
      fileInputRef.current?.click();
    },
    url: () => {
      handleGetDoc.url();
    },
  };

  const handleRemoveDoc = (index: number) => {
    setDocList((prev) => {
      const newList = { ...prev };
      newList[doctype] = newList[doctype].filter((_, idx) => idx !== index);
      return newList;
    });
  };

  return (
    <ActionModal
      isOpen={isOpen}
      size="xl"
      onClose={onClose}
      title="학습자료 등록"
      subButtonText="취소"
      onSubButtonClick={onClose}
      mainButtonText="등록"
      onMainButtonClick={onConfirmButtonClick}
    >
      <Flex direction="column" gap="4">
        <Text textStyle="bold_xl">학습자료 제목</Text>
        <Input placeholder="학습자료 제목을 입력해주세요." />
        <Text textStyle="bold_xl">학습자료 소개</Text>
        <Textarea placeholder="학습자료 소개를 입력해주세요." />
        <StyledRadioGroup title="파일 유형" value={doctype} onChange={(v) => setDocType(v as DocumentType)}>
          <StyledRadio value="img">이미지</StyledRadio>
          <StyledRadio value="file">파일</StyledRadio>
          <StyledRadio value="url">URL 링크</StyledRadio>
        </StyledRadioGroup>
        <Divider borderWidth="2px" borderColor={color.orange_dark} />
        <Flex justify="end" direction="row" gap="4" shrink="0">
          <Input
            ref={urlInputRef}
            flex="1"
            h="7"
            shadow="md"
            hidden={doctype !== 'url'}
            placeholder="URL 링크를 입력해주세요."
          />
          <Button w="28" h="7" shadow="md" onClick={() => handleAddDoc[doctype]()} variant="orange">
            추가하기
          </Button>
        </Flex>
        <input
          hidden
          type="file"
          multiple
          accept="image/jpg,image/png,image/jpeg,image/gif"
          ref={imgInputRef}
          onChange={handleGetDoc.img}
        />
        <input hidden type="file" multiple ref={fileInputRef} onChange={handleGetDoc.file} />
        <Flex direction="column" gap="4" overflow="scroll" maxH="52" shrink="0">
          {docList[doctype].map((doc, index) => (
            <IconBox
              key={`${doc}`}
              leftIcon={DocumentBoxIcon[doctype]}
              content={doc.name}
              rightIcon={<BiTrash />}
              handleClick={() => handleRemoveDoc(index)}
            />
          ))}
        </Flex>
        <StyledRadioGroup title="공개 범위" defaultValue="all">
          <StyledRadio value="all">전체 공개</StyledRadio>
          <StyledRadio value="only_study">스터디 공개</StyledRadio>
        </StyledRadioGroup>
      </Flex>
    </ActionModal>
  );
};

export default DocumentModal;
