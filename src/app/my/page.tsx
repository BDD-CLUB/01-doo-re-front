'use client';

import { Avatar, Box, Button, Card, Flex, Grid, IconButton, Input, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { MdBorderColor } from 'react-icons/md';

import DocumentCard from '@/components/DocumentCard';
import StudyCard from '@/components/StudyCard';
import Title from '@/components/Title';
import S3_URL from '@/constants/s3Url';
import DeleteUserModal from '@/containers/member/Modal/DeleteUserModal';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';
import useGetUser from '@/hooks/useGetUser';
import useRefetchSideBar from '@/hooks/useRefetchSideBar';
import { Document, Study } from '@/types';
import getAvatarSrc from '@/utils/avatarUtils';

import { getMyDocumentList } from '../api/document';
import { deleteUserImage, patchUserImage, patchUserName, useGetSideBarInfoQuery } from '../api/member';
import { getMyStudies } from '../api/study';

const Page = () => {
  const [myStudies, setMyStudies] = useState<Study[]>([]);
  const [myDocuments, setMyDocuments] = useState<Document[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<'나의 학습자료' | '나의 스터디' | '종료 스터디'>(
    '나의 학습자료',
  );
  const [reloadTrigger, setReloadTrigger] = useState<boolean>(false);
  const [isEditProfile, setIsEditProfile] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string>('');
  const [profileImageFormData, setProfileImageFile] = useState<FormData | null>(null);
  const [name, setName] = useState<string>('');
  const [isEditName, setIsEditName] = useState<boolean>(false);
  const [isNoImage, setIsNoImage] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const user = useGetUser();
  const router = useRouter();
  const refetchSidebar = useRefetchSideBar();
  if (user && !user.isLogin) router.replace('/');

  const { data: sidebarInfo } = useGetSideBarInfoQuery();

  const editProfileName = useMutateWithToken(patchUserName, user);
  const editProfileImage = useMutateWithToken(patchUserImage, user);
  const deleteProfileImage = useMutateWithToken(deleteUserImage, user);

  useEffect(() => {
    if (sidebarInfo?.body) {
      const avatarSrc = getAvatarSrc(sidebarInfo.body.imageUrl);
      setProfileImage(avatarSrc ?? '');
      setIsNoImage(!avatarSrc);
      setName(sidebarInfo.body.name);
    }
  }, [sidebarInfo]);

  useEffect(() => {
    if (!user || !user.isLogin) return;
    getMyStudies(user.token, user.memberId).then((res) => {
      if (res.ok && res.body) {
        setMyStudies(res.body);
      }
    });
  }, [user]);

  useEffect(() => {
    if (!user || !user.isLogin) return;
    getMyDocumentList(user.token).then((res) => {
      if (res.ok && res.body) {
        setMyDocuments(res.body);
      }
    });
  }, [user, reloadTrigger]);

  const handleProfileImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      setProfileImageFile(formData);
      setProfileImage(URL.createObjectURL(file));
      setIsNoImage(false);
    }
  };

  const handleProfileInfoUpdate = () => {
    if (name) {
      editProfileName(name).then(() => {
        refetchSidebar();
      });
    }
    if (profileImageFormData && S3_URL(sidebarInfo?.body.imageUrl) !== profileImage) {
      editProfileImage(profileImageFormData).then(() => {
        refetchSidebar();
      });
    }
    if (isNoImage) {
      deleteProfileImage().then(() => {
        refetchSidebar();
      });
    }
    setIsEditName(false);
    setIsNoImage(false);
    setIsEditProfile(false);
  };

  const handleProfileImageDelete = () => {
    setIsNoImage(true);
    setProfileImage('');
    setProfileImageFile(null);
  };

  const handleCancelEditProfile = () => {
    setIsEditName(false);
    setIsNoImage(false);
    setIsEditProfile(false);
    if (sidebarInfo?.body) {
      const avatarSrc = getAvatarSrc(sidebarInfo.body.imageUrl);
      setProfileImage(avatarSrc ?? '');
      setIsNoImage(!avatarSrc);
      setName(sidebarInfo.body.name);
    }
  };

  const handleDeleteModalOpen = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  const filteredStudies = myStudies.filter((study) => {
    if (selectedCategory === '나의 스터디') {
      return study.status !== 'ENDED';
    }
    if (selectedCategory === '종료 스터디') {
      return study.status === 'ENDED';
    }
    return true;
  });

  return (
    <Flex direction="column" gap="4" w="100%" p="8">
      <Title name="마이페이지" description="" />
      <Card w="100%" p="8" bg="white" borderRadius="2xl">
        <Flex align="center" gap="4">
          <Box pos="relative">
            <Avatar
              key={isNoImage ? 'deleted' : 'loaded'}
              borderWidth="3px"
              borderColor="gray.100"
              size="lg"
              src={isNoImage ? undefined : profileImage}
            />
            {isEditProfile && (
              <>
                <Flex
                  pos="absolute"
                  right="0"
                  bottom="0"
                  align="center"
                  justify="center"
                  bg="white"
                  borderRadius="full"
                  shadow="sm"
                >
                  <IconButton
                    shadow="base"
                    aria-label="profile image edit"
                    icon={<MdBorderColor color="black" />}
                    onClick={handleProfileImageClick}
                    size="icon_md"
                    variant="transparent"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleProfileImageChange}
                  />
                </Flex>
                <Flex
                  pos="absolute"
                  bottom="0"
                  left="0"
                  align="center"
                  justify="center"
                  bg="white"
                  borderRadius="full"
                  shadow="sm"
                >
                  <IconButton
                    shadow="base"
                    aria-label="profile image edit"
                    icon={<BsTrashFill color="black" />}
                    onClick={handleProfileImageDelete}
                    size="icon_md"
                    variant="transparent"
                  />
                </Flex>
              </>
            )}
          </Box>
          <Box pos="relative">
            {isEditName ? (
              <Box w={40} borderColor="gray.100" borderBottom={isEditName ? '1px solid' : 'none'}>
                <Input
                  p={0}
                  color="black"
                  fontSize="3xl"
                  fontWeight="bold"
                  bg="white"
                  onChange={(e) => setName(e.target.value)}
                  size="lg"
                  value={name}
                />
              </Box>
            ) : (
              <Text fontSize="3xl" fontWeight="bold" whiteSpace="nowrap">
                {name}
              </Text>
            )}
            {isEditProfile && (
              <Flex
                pos="absolute"
                right="-6"
                bottom="-4"
                align="center"
                justify="center"
                bg="white"
                borderRadius="full"
                shadow="sm"
              >
                <IconButton
                  shadow="base"
                  aria-label="profile name edit"
                  icon={<MdBorderColor color="black" />}
                  onClick={() => setIsEditName(!isEditName)}
                  size="icon_md"
                  variant="transparent"
                />
              </Flex>
            )}
          </Box>
          <Box
            pos="relative"
            maxW="90%"
            m={4}
            p={4}
            bg="gray.50"
            borderRadius="2xl"
            shadow="base"
            _before={{
              content: `""`,
              position: 'absolute',
              borderStyle: 'solid',
              borderWidth: '12px 16px 12px 0',
              borderColor: 'transparent #F7F7F7',
              display: 'block',
              filter: 'drop-shadow(-1px 1px 1px rgba(0, 0, 0, 0.1))',
              width: 0,
              zIndex: 0,
              left: '-16px',
            }}
            _after={{
              content: `""`,
              position: 'absolute',
              borderStyle: 'solid',
              borderWidth: '12px 16px 12px 0',
              borderColor: 'transparent #F7F7F7',
              display: 'block',
              width: 0,
              zIndex: 1,
              left: '-15px',
              top: '16px',
            }}
          >
            <Text>행복은 무엇인가? 누군가를 만나서 그 사람이 행복하다고 느끼는 것이다. - 레오 톨스토이</Text>
          </Box>
        </Flex>
        <Flex justify="flex-end" gap="2" mt="4">
          <Button
            px="4"
            border="1px solid"
            borderColor="gray.100"
            shadow="md"
            onClick={isEditProfile ? handleCancelEditProfile : handleDeleteModalOpen}
            size="sm"
            variant="white"
          >
            {isEditProfile ? '취소' : '회원 탈퇴'}
          </Button>
          <Button
            px="4"
            shadow="md"
            onClick={isEditProfile ? handleProfileInfoUpdate : () => setIsEditProfile(true)}
            size="sm"
            variant="orange_dark"
          >
            {isEditProfile ? '수정 완료' : '프로필 수정'}
          </Button>
        </Flex>
      </Card>
      <Flex gap="8" mt={8}>
        <Flex direction="column" gap="4">
          <Button
            px="4"
            shadow="md"
            _hover={{ bg: selectedCategory === '나의 학습자료' ? 'orange_dark' : 'gray.100' }}
            onClick={() => setSelectedCategory('나의 학습자료')}
            size="sm"
            variant={selectedCategory === '나의 학습자료' ? 'orange_dark' : 'white'}
          >
            나의 학습자료
          </Button>
          <Button
            px="4"
            shadow="md"
            _hover={{ bg: selectedCategory === '나의 스터디' ? 'orange_dark' : 'gray.100' }}
            onClick={() => setSelectedCategory('나의 스터디')}
            size="sm"
            variant={selectedCategory === '나의 스터디' ? 'orange_dark' : 'white'}
          >
            나의 스터디
          </Button>
          <Button
            px="4"
            shadow="md"
            _hover={{ bg: selectedCategory === '종료 스터디' ? 'orange_dark' : 'gray.100' }}
            onClick={() => setSelectedCategory('종료 스터디')}
            size="sm"
            variant={selectedCategory === '종료 스터디' ? 'orange_dark' : 'white'}
          >
            종료 스터디
          </Button>
        </Flex>
        <Flex direction="column" w="100%">
          <Grid gap={{ sm: '2', md: '4', xl: '8' }} templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>
            {selectedCategory !== '나의 학습자료' &&
              filteredStudies.map((study, index) => (
                <StudyCard
                  key={study.id}
                  teamId={2}
                  id={study.id}
                  name={study.name}
                  description={study.description}
                  startDate={study.startDate}
                  endDate={study.endDate}
                  status={study.status}
                  cropId={study.cropId}
                  studyProgressRatio={study.studyProgressRatio}
                  rank={index + 1}
                />
              ))}
            {selectedCategory === '나의 학습자료' &&
              myDocuments &&
              myDocuments.length > 0 &&
              myDocuments.map((data) => (
                <DocumentCard
                  teamId={-1}
                  studyId={-1}
                  id={data.id ?? -1}
                  key={data.id}
                  title={data.title}
                  description={data.description}
                  date={data.date ?? ''}
                  uploaderName={data.uploaderName ?? ''}
                  uploaderMemberId={data.uploaderMemberId ?? -1}
                  setReload={setReloadTrigger}
                  files={data.files ?? []}
                  type={data.type}
                  category="myPage"
                  accessType={data.accessType}
                />
              ))}
          </Grid>
        </Flex>
      </Flex>
      {isDeleteModalOpen && <DeleteUserModal isOpen={isDeleteModalOpen} onClose={handleDeleteModalClose} />}
    </Flex>
  );
};

export default Page;
