/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { Box, Text, VStack } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';

import { postStudy, putEditStudy } from '@/app/api/study';
import AutoResizeTextarea from '@/components/AutoResizeTextarea';
import ActionModal from '@/components/Modal/ActionModal';
import Selector from '@/components/Selector';
import StyledDatePicker from '@/components/StyledDatePicker';
import CROP from '@/constants/crop';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';
import useRefetchSideBar from '@/hooks/useRefetchSideBar';

import { StudyModalProps } from './types';

const AlertContent = ({ message }: { message: string }) => {
  return (
    <Text textStyle="md" color="orange_dark">
      {message}
    </Text>
  );
};

const StudyModal = ({ teamId, studyId, studyInfo, isOpen, setIsModalOpen }: StudyModalProps) => {
  const [step, setStep] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [cropName, setCropName] = useState<string>('');
  const [cropId, setCropId] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [alertName, setAlertName] = useState<boolean>(false);
  const [alertDescription, setAlertDescription] = useState<boolean>(false);
  const [alertCropId, setAlertCropId] = useState<boolean>(false);
  const [alertStartMsg, setAlertStartMsg] = useState<string>('');

  const createStudy = useMutateWithToken(postStudy);
  const editStudy = useMutateWithToken(putEditStudy);

  const refetchSidebar = useRefetchSideBar();

  const onClose = () => {
    setStep(1);
    setName('');
    setDescription('');
    setCropName('');
    setCropId(0);
    setStartDate(null);
    setEndDate(null);
    setAlertName(false);
    setAlertDescription(false);
    setAlertCropId(false);
    setAlertStartMsg('');
    setIsModalOpen(false);
  };

  const handlePrevButtonClick = () => {
    setStep(step - 1);
  };
  const handleNextButtonClick = () => {
    if (name === '') setAlertName(true);
    if (description === '') setAlertDescription(true);
    if (name !== '' && description !== '') setStep(step + 1);
  };
  const handleSaveButtonClick = () => {
    if (cropId === 0) setAlertCropId(true);
    if (startDate === null) setAlertStartMsg('시작 날짜를 선택해주세요.');
    else if (endDate && new Date(startDate) > new Date(endDate))
      setAlertStartMsg('시작 날짜가 종료 날짜보다 늦습니다.');
    else if (teamId) {
      createStudy(teamId, {
        name,
        description,
        startDate: dayjs(startDate).format('YYYY-MM-DD'),
        endDate: endDate ? dayjs(endDate).format('YYYY-MM-DD') : '',
        cropId,
      }).then((res) => {
        if (res.ok) {
          refetchSidebar();
          onClose();
        }
      });
    } else if (studyId && studyInfo) {
      editStudy(studyId, {
        name,
        description,
        startDate: dayjs(startDate).format('YYYY-MM-DD'),
        endDate: endDate ? dayjs(endDate).format('YYYY-MM-DD') : '',
        status: startDate <= new Date() ? 'IN_PROGRESS' : 'UPCOMING',
      }).then((res) => {
        refetchSidebar();
        if (res.ok) onClose();
      });
    }
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

  const cropRef = useRef(cropName);

  useEffect(() => {
    cropRef.current = cropName;
  }, [cropName]);

  useEffect(() => {
    if (isOpen && studyInfo) {
      setName(studyInfo.name);
      setDescription(studyInfo.description);
      setCropName(CROP.find((crop) => crop.id === studyInfo.cropId)?.name || '');
      setStartDate(new Date(studyInfo.startDate));
      setEndDate(studyInfo.endDate ? new Date(studyInfo.endDate) : null);
    }
  }, [isOpen, studyInfo]);

  return (
    <ActionModal
      isOpen={isOpen}
      onClose={onClose}
      title={`스터디 ${studyInfo ? '수정' : '생성'}`}
      subButtonText={step === 1 ? '취소' : '이전'}
      mainButtonText={step === 1 ? '다음' : '저장'}
      onSubButtonClick={step === 1 ? onClose : handlePrevButtonClick}
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
        {step === 2 && !studyInfo && (
          <>
            <Text textStyle="bold_xl" mt="4" mb="2">
              작물 선택 *
            </Text>
            {alertCropId && <AlertContent message="필수 입력 란입니다." />}
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
                if (cropRef.current !== '') setAlertCropId(false);
                else setAlertCropId(true);
              }}
            />
          </>
        )}
        {step === 2 && (
          <>
            <Text textStyle="bold_xl" mt="8" mb="2">
              날짜 선택 *
            </Text>
            {alertStartMsg && <AlertContent message={alertStartMsg} />}
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
export default StudyModal;
