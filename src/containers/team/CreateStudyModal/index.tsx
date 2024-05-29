'use client';

import { Box, Text, VStack } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import AutoResizeTextarea from '@/components/AutoResizeTextarea';
import ActionModal from '@/components/Modal/ActionModal';
import Selector from '@/components/Selector';
import StyledDatePicker from '@/components/StyledDatePicker';
import CROP from '@/constants/crop';

import { CreateStudyModalProps } from './types';

const AlertContent = ({ message }: { message: string }) => {
  return (
    <Text textStyle="md" color="orange_dark">
      {message}
    </Text>
  );
};

const CreateStudyModal = ({ isOpen, setIsModalOpen }: CreateStudyModalProps) => {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [cropName, setCropName] = useState<string>('');
  const [cropId, setCropId] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [alertName, setAlertName] = useState<boolean>(false);
  const [alertDescription, setAlertDescription] = useState<boolean>(false);
  const [alertSelectedCropId, setAlertSelectedCropId] = useState<boolean>(false);
  const [alertStartDate, setAlertStartDate] = useState<boolean>(false);

  const handlePrevButtonClick = () => {
    setStep(step - 1);
  };
  const handleNextButtonClick = () => {
    if (name === '') setAlertName(true);
    if (description === '') setAlertDescription(true);
    if (name !== '' && description !== '') setStep(step + 1);
  };
  const handleSaveButtonClick = () => {
    if (cropName === '') setAlertSelectedCropId(true);
    if (startDate === null) setAlertStartDate(true);
    if (cropName !== '' && startDate !== null) setIsModalOpen(false);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    if (date !== null) setAlertStartDate(false);
  };
  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const cropRef = useRef(cropName);

  useEffect(() => {
    cropRef.current = cropName;
  }, [cropName]);

  return (
    <ActionModal
      isOpen={isOpen}
      onClose={() => setIsModalOpen(false)}
      title="스터디 생성"
      subButtonText={step === 1 ? '취소' : '이전'}
      mainButtonText={step === 1 ? '다음' : '저장'}
      onSubButtonClick={step === 1 ? () => setIsModalOpen(false) : handlePrevButtonClick}
      onMainButtonClick={step === 1 ? handleNextButtonClick : handleSaveButtonClick}
    >
      <Box overflowY="auto" minH="60vh" maxH="60vh">
        {step === 1 && (
          <>
            <Text textStyle="bold_xl" mt="4" mb="2">
              스터디 이름 *
            </Text>
            {alertName && <AlertContent message="필수 입력 란입니다." />}
            <AutoResizeTextarea
              minH="10vh"
              placeholder="스터디 이름을 작성해주세요"
              value={name}
              onChange={handleNameChange}
              _placeholder={{ color: 'white' }}
              textStyle="bold_xl"
              onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value !== '') setAlertName(false);
                else setAlertName(true);
              }}
            />
            <Text textStyle="bold_xl" mt="4" mb="2">
              스터디 소개 *
            </Text>
            {alertDescription && <AlertContent message="필수 입력 란입니다." />}
            <AutoResizeTextarea
              minH="30vh"
              placeholder="스터디 소개글을 작성해주세요"
              value={description}
              onChange={handleDescriptionChange}
              _placeholder={{ color: 'white' }}
              textStyle="bold_xl"
              onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.value !== '') setAlertDescription(false);
                else setAlertDescription(true);
              }}
            />
          </>
        )}
        {step === 2 && (
          <>
            <Text textStyle="bold_xl" mt="4" mb="2">
              작물 선택 *
            </Text>
            {alertSelectedCropId && <AlertContent message="필수 입력 란입니다." />}
            <Selector
              placeholder="작물을 선택해주세요"
              selected={cropName}
              label={CROP.map((crop) => crop.name)}
              handleSelector={(value) => {
                setCropName(value);
                setCropId(CROP.find((crop) => crop.name === value)?.id || 0);
                cropRef.current = value;
              }}
              handleClose={() => {
                if (cropRef.current !== '') setAlertSelectedCropId(false);
                else setAlertSelectedCropId(true);
              }}
            />
            <Text textStyle="bold_xl" mt="8" mb="2">
              날짜 선택 *
            </Text>
            {alertStartDate && <AlertContent message="필수 입력 란입니다." />}
            <VStack spacing="3">
              <StyledDatePicker label="시작 날짜" selectedDate={startDate} onChange={handleStartDateChange} />
              <StyledDatePicker label="종료 날짜" selectedDate={endDate} onChange={handleEndDateChange} />
            </VStack>
          </>
        )}
      </Box>
    </ActionModal>
  );
};
export default CreateStudyModal;
