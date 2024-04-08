'use client';

import { Divider, Flex, Input, Text, Textarea } from '@chakra-ui/react';
import { useState } from 'react';

import ActionModal from '@/components/Modal/ActionModal';
import StyledRadio from '@/components/StyledRadio';
import StyledRadioGroup from '@/components/StyledRadioGroup';
import color from '@/constants/color';
import { DocumentModalProps } from '@/containers/study/DocumentModal/type';

const DocumentModal = ({ studyId, isOpen, onClose }: DocumentModalProps) => {
  const [doctype, setDocType] = useState('img');

  const onConfirmButtonClick = () => {
    console.log(studyId);
    onClose();
  };

  return (
    <ActionModal
      isOpen={isOpen}
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
        <StyledRadioGroup title="파일 유형" value={doctype} onChange={(v) => setDocType(v)}>
          <StyledRadio value="img">이미지</StyledRadio>
          <StyledRadio value="file">파일</StyledRadio>
          <StyledRadio value="url">URL 링크</StyledRadio>
        </StyledRadioGroup>
        <Divider borderWidth="2px" borderColor={color.orange_dark} />
        <StyledRadioGroup title="공개 범위" defaultValue="all">
          <StyledRadio value="all">전체 공개</StyledRadio>
          <StyledRadio value="only_study">스터디 공개</StyledRadio>
        </StyledRadioGroup>
      </Flex>
    </ActionModal>
  );
};

export default DocumentModal;
