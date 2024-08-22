'use client';

import { Flex, Text, Textarea, Image } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { BiEdit, BiFile } from 'react-icons/bi';

import { patchEditTeamImage, postCreateTeam, putEditTeam } from '@/app/api/team';
import IconBox from '@/components/IconBox';
import ActionModal from '@/components/Modal/ActionModal';
import S3_URL from '@/constants/s3Url';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';
import useRefetchSideBar from '@/hooks/useRefetchSideBar';

import { TeamModalProps } from './type';

const AlertContent = ({ message }: { message: string }) => {
  return (
    <Text textStyle="md" color="orange_dark">
      {message}
    </Text>
  );
};

const TeamModal = ({ teamInfo, isOpen, onClose }: TeamModalProps) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [thumbnailPath, setThumbnailPath] = useState<string>('');
  const [thumbnail, setThumbnail] = useState<File | null>();
  const [alertName, setAlertName] = useState<boolean>(false);
  const [alertDescription, setAlertDescription] = useState<boolean>(false);

  const createTeam = useMutateWithToken(postCreateTeam);
  const editTeam = useMutateWithToken(putEditTeam);
  const editTeamImage = useMutateWithToken(patchEditTeamImage);

  const refetchSideBar = useRefetchSideBar();

  const resetState = () => {
    setName('');
    setDescription('');
    setThumbnailPath('');
    setThumbnail(null);
    setAlertName(false);
    setAlertDescription(false);
  };

  const resetAndCloseModal = () => {
    resetState();
    onClose();
  };

  const isTeamInfoValid = () => {
    const isValidName = name.trim() !== '';
    const isValidDescription = description.trim() !== '';
    setAlertName(!isValidName);
    setAlertDescription(!isValidDescription);

    return isValidName && isValidDescription;
  };

  const handleEditTeamButtonClick = () => {
    if (!isTeamInfoValid()) return;

    if (teamInfo) {
      editTeam(teamInfo.id, {
        name,
        description,
      }).then((editTeamResponse) => {
        if (editTeamResponse.ok) {
          if (thumbnail) {
            const teamForm = new FormData();
            teamForm.append('file', thumbnail as Blob);

            editTeamImage(teamInfo.id, teamForm).then((editTeamImageResponse) => {
              if (editTeamImageResponse.ok) {
                resetAndCloseModal();
              }
            });
          }
          refetchSideBar();
          resetAndCloseModal();
        }
      });
    }
  };

  const handleAddTeamButtonClick = () => {
    if (!isTeamInfoValid) return;

    const teamForm = new FormData();
    const request = {
      name,
      description,
    };
    const requestBlob = new Blob([JSON.stringify(request)], { type: 'application/json' });

    teamForm.append('request', requestBlob);
    teamForm.append('file', thumbnail as Blob);

    createTeam(teamForm).then((res) => {
      if (res.ok) {
        refetchSideBar();
        resetAndCloseModal();
      }
    });
  };

  useEffect(() => {
    if (teamInfo) {
      setName(teamInfo.name);
      setDescription(teamInfo.description);
      setThumbnailPath(teamInfo.imageUrl ?? '');
    }
  }, [teamInfo]);

  return (
    <ActionModal
      isOpen={isOpen}
      onClose={resetAndCloseModal}
      title={`팀 ${teamInfo ? '수정' : '생성'}`}
      subButtonText="취소"
      onSubButtonClick={resetAndCloseModal}
      mainButtonText={teamInfo ? '수정' : '생성'}
      onMainButtonClick={teamInfo ? handleEditTeamButtonClick : handleAddTeamButtonClick}
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
                setThumbnailPath('');
              }
            }}
          />
          <IconBox
            leftIcon={<BiFile />}
            rightIcon={<BiEdit />}
            content={thumbnail ? thumbnail.name : '파일을 추가해주세요.'}
            handleClick={() => inputFileRef.current?.click()}
          />
          {thumbnailPath ? (
            <Image w="40" alt="thumbnail" src={S3_URL(thumbnailPath)} />
          ) : (
            thumbnail && <Image w="40" alt="thumbnail" src={URL.createObjectURL(thumbnail)} />
          )}
        </Flex>
      </Flex>
    </ActionModal>
  );
};

export default TeamModal;
