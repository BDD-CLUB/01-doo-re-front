'use client';

import { Flex, Text, Textarea, Image } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { BiEdit, BiFile } from 'react-icons/bi';

import IconBox from '@/components/IconBox';
import ActionModal from '@/components/Modal/ActionModal';

import { CreateTeamModalProps } from '../type';

const AlertContent = ({ message }: { message: string }) => {
  return (
    <Text textStyle="md" color="orange_dark">
      {message}
    </Text>
  );
};

const CreateTeamModal = ({ isOpen, setIsOpen }: CreateTeamModalProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [thumbnail, setThumbnail] = useState<File | null>();
  const [alertName, setAlertName] = useState<boolean>(false);
  const [alertDescription, setAlertDescription] = useState<boolean>(false);

  const onSave = () => {
    if (!alertName && !alertDescription) {
      // TODO - API 연결
      setIsOpen(false);
    }
  };

  return (
    <ActionModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="팀 생성"
      subButtonText="취소"
      onSubButtonClick={() => setIsOpen(false)}
      mainButtonText="저장"
      onMainButtonClick={onSave}
    >
      <Flex direction="column" gap="10" w="100%">
        <Flex direction="column">
          <Text textStyle="bold_md">팀 이름</Text>
          {alertName && <AlertContent message="필수 입력 란입니다." />}
          <Textarea
            textStyle="bold_md"
            _placeholder={{ opacity: 0.7, color: 'white' }}
            resize="none"
            onBlur={(e) => {
              if (e.target.value !== '') setAlertName(false);
              else setAlertName(true);
            }}
            onChange={(e) => setName(e.target.value)}
            placeholder="팀 이름을 작성해주세요"
            rows={1}
            value={name}
          />
        </Flex>
        <Flex direction="column">
          <Text textStyle="bold_md">팀 소개글</Text>
          {alertDescription && <AlertContent message="필수 입력 란입니다." />}
          <Textarea
            textStyle="bold_md"
            _placeholder={{ opacity: 0.7, color: 'white' }}
            resize="none"
            onBlur={(e) => {
              if (e.target.value !== '') setAlertDescription(false);
              else setAlertDescription(true);
            }}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="팀 소개글을 작성해주세요"
            rows={6}
            value={description}
          />
        </Flex>
        <Flex align="center" direction="column">
          <Text textStyle="bold_md" w="100%">
            팀 썸네일
          </Text>
          <input
            type="file"
            accept="image/*"
            ref={inputFileRef}
            style={{ display: 'none' }}
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setThumbnail(e.target.files[0]);
              }
            }}
          />
          <IconBox
            leftIcon={<BiFile />}
            rightIcon={<BiEdit />}
            content={thumbnail ? thumbnail.name : '파일을 추가해주세요.'}
            handleClick={() => inputFileRef.current?.click()}
          />
          {thumbnail && <Image w="40" alt="thumbnail" src={URL.createObjectURL(thumbnail)} />}
        </Flex>
      </Flex>
    </ActionModal>
  );
};

export default CreateTeamModal;
