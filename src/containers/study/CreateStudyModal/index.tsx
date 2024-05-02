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
  const [studyName, setStudyName] = useState<string>('');
  const [studyDescription, setStudyDescription] = useState<string>('');
  const [crop, setCrop] = useState<string>('작물을 선택해주세요');
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [curriculums, setCurriculums] = useState([
    { id: 1, name: '' },
    { id: 2, name: '' },
    { id: 3, name: '' },
    { id: 4, name: '' },
    { id: 5, name: '' },
  ]);
  const [alertName, setAlertName] = useState<boolean>(false);
  const [alertDescription, setAlertDescription] = useState<boolean>(false);
  const [alertSelectedCrop, setAlertSelectedCrop] = useState<boolean>(false);

  const handleNextButtonClick = () => {
    if (step === 1) {
      if (studyName === '') setAlertName(true);
      if (studyDescription === '') setAlertDescription(true);
      if (studyName !== '' && studyDescription !== '') setStep(step + 1);
    } else if (step === 2) {
      if (crop === '작물을 선택해주세요') setAlertSelectedCrop(true);
      else setStep(step + 1);
    } else {
      setStep(step + 1);
    }
  };
  const handlePrevButtonClick = () => {
    setStep(step - 1);
  };
  const handleStudyNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStudyName(e.target.value);
  };
  const handleStudyDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setStudyDescription(e.target.value);
  };
  const handleStartDateChange = (date: Date | null) => {
    setSelectedStartDate(date);
  };
  const handleEndDateChange = (date: Date | null) => {
    setSelectedEndDate(date);
  };
  const handleAddCurriculum = () => {
    setCurriculums([...curriculums, { id: curriculums.length + 1, name: '' }]);
  };
  const handleCurriculumChange = (index: number, value: string) => {
    const updatedCurriculums = [...curriculums];
    updatedCurriculums[index].name = value;
    setCurriculums(updatedCurriculums);
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
      onMainButtonClick={step === 3 ? () => setIsModalOpen(false) : handleNextButtonClick}
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
              value={studyName}
              onChange={handleStudyNameChange}
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
              value={studyDescription}
              onChange={handleStudyDescriptionChange}
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
            {alertSelectedCrop && <AlertContent message="필수 입력 란입니다." />}
            <Selector
              selected={crop}
              label={['토마토', '고구마', '당근', '완두콩', '벼']}
              handleSelector={(value) => {
                setCrop(value);
                cropRef.current = value;
              }}
              onBlur={() => {
                if (cropRef.current !== '작물을 선택해주세요') setAlertSelectedCrop(false);
                else setAlertSelectedCrop(true);
              }}
            />
            <Text textStyle="bold_xl" mt="8" mb="2">
              날짜 선택
            </Text>
            <VStack spacing="3">
              <StyledDatePicker label="시작 날짜" selectedDate={selectedStartDate} onChange={handleStartDateChange} />
              <StyledDatePicker label="종료 날짜" selectedDate={selectedEndDate} onChange={handleEndDateChange} />
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
              {curriculums.map((curriculum, index) => (
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
