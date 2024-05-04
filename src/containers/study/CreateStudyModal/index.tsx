'use client';

import { Box, Button, Flex, Input, Text, VStack } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

import AutoResizeTextarea from '@/components/AutoResizeTextarea';
import StyledDatePicker from '@/components/DatePicker';
import ActionModal from '@/components/Modal/ActionModal';
import Selector from '@/components/Selector';

import { CreateStudyModalProps } from './types';

const AlertContent = ({ message }: { message: string }) => {
  return (
    <Text textStyle="md" color="orange_dark">
      {message}
    </Text>
  );
};

const CreateStudyModal = ({ isOpen, setIsModalOpen }: CreateStudyModalProps) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [crop, setCrop] = useState<string>('작물을 선택해주세요');
  const [cropId, setCropId] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [curriculumItems, setCurriculumItems] = useState<CurriculumItemDto[]>([
    { id: 1, name: '', itemOrder: 1, isDeleted: false },
    { id: 2, name: '', itemOrder: 2, isDeleted: false },
    { id: 3, name: '', itemOrder: 3, isDeleted: false },
    { id: 4, name: '', itemOrder: 4, isDeleted: false },
    { id: 5, name: '', itemOrder: 5, isDeleted: false },
  ]);
  const [alertName, setAlertName] = useState<boolean>(false);
  const [alertDescription, setAlertDescription] = useState<boolean>(false);
  const [alertSelectedCropId, setAlertSelectedCropId] = useState<boolean>(false);

  const crops = ['토마토', '고구마', '당근', '완두콩', '벼'];

  const handleNextButtonClick = () => {
    if (step === 1) {
      if (name === '') setAlertName(true);
      if (description === '') setAlertDescription(true);
      if (name !== '' && description !== '') setStep(step + 1);
    } else if (step === 2) {
      if (crop === '작물을 선택해주세요') setAlertSelectedCropId(true);
      else setStep(step + 1);
    }
  };
  const handlePrevButtonClick = () => {
    setStep(step - 1);
  };
  const handleSaveButtonClick = () => {
    const filteredCurriculumItems = curriculumItems.filter((curriculum) => curriculum.name.trim() !== '');
    const updatedCurriculumItems = filteredCurriculumItems.map((curriculum, index) => ({
      ...curriculum,
      id: index + 1,
      itemOrder: index + 1,
    }));
    setCurriculumItems(updatedCurriculumItems);
    setIsModalOpen(false);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };
  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };
  const handleAddCurriculum = () => {
    setCurriculumItems([
      ...curriculumItems,
      {
        id: curriculumItems.length + 1,
        name: '',
        itemOrder: 0,
        isDeleted: false,
      },
    ]);
  };
  const handleCurriculumChange = (index: number, value: string) => {
    const updatedCurriculumItems = [...curriculumItems];
    updatedCurriculumItems[index].name = value;
    setCurriculumItems(updatedCurriculumItems);
  };

  const cropRef = useRef(crop);

  useEffect(() => {
    cropRef.current = crop;
  }, [crop]);

  return (
    <ActionModal
      isOpen={isOpen}
      onClose={() => setIsModalOpen(false)}
      title="스터디 생성"
      subButtonText={step === 1 ? '취소' : '이전'}
      mainButtonText={step === 3 ? '저장' : '다음'}
      onSubButtonClick={step === 1 ? () => setIsModalOpen(false) : handlePrevButtonClick}
      onMainButtonClick={step === 3 ? handleSaveButtonClick : handleNextButtonClick}
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
              selected={crop}
              label={crops}
              handleSelector={(value) => {
                setCrop(value);
                setCropId(crops.indexOf(value) + 1);
                cropRef.current = value;
              }}
              onBlur={() => {
                if (cropRef.current !== '작물을 선택해주세요') setAlertSelectedCropId(false);
                else setAlertSelectedCropId(true);
              }}
            />
            <Text textStyle="bold_xl" mt="8" mb="2">
              날짜 선택
            </Text>
            <VStack spacing="3">
              <StyledDatePicker label="시작 날짜" selectedDate={startDate} onChange={handleStartDateChange} />
              <StyledDatePicker label="종료 날짜" selectedDate={endDate} onChange={handleEndDateChange} />
            </VStack>
          </>
        )}
        {step === 3 && (
          <>
            <Flex align="center" mt="4">
              <Text textStyle="bold_xl" mr="3" mb="2">
                커리큘럼
              </Text>
              <Button minW="14" mb="2" onClick={handleAddCurriculum} size="xs" variant="orange">
                추가
              </Button>
            </Flex>
            <VStack>
              {curriculumItems.map((curriculum, index) => (
                <Input
                  key={curriculum.id}
                  textStyle="bold_xl"
                  _placeholder={{ color: 'white' }}
                  onChange={(e) => handleCurriculumChange(index, e.target.value)}
                  placeholder="커리큘럼명"
                  value={curriculum.name}
                />
              ))}
            </VStack>
          </>
        )}
      </Box>
    </ActionModal>
  );
};
export default CreateStudyModal;
