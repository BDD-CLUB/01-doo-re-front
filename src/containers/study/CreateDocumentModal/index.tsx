'use client';

import { Divider, Flex, Input, Text, Textarea, Button } from '@chakra-ui/react';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { BiFile, BiImage, BiTrash } from 'react-icons/bi';
import { BsLink45Deg } from 'react-icons/bs';

import { postDocument, putDocument } from '@/app/api/document';
import IconBox from '@/components/IconBox';
import ActionModal from '@/components/Modal/ActionModal';
import StyledRadio from '@/components/StyledRadio';
import StyledRadioGroup from '@/components/StyledRadioGroup';
import color from '@/constants/color';
import { DocumentModalProps, DocumentList, CreateDocument } from '@/containers/study/CreateDocumentModal/type';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';
import useGetUser from '@/hooks/useGetUser';
import textStyles from '@/theme/foundations/textStyles';
import { Document, DocumentAccessType, DocumentDetail, DocumentType } from '@/types';

const DocumentBoxIcon = {
  IMAGE: <BiImage />,
  DOCUMENT: <BiFile />,
  URL: <BsLink45Deg />,
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const CreateDocumentModal = ({ isTeam = false, isOpen, onClose, categoryData, category }: DocumentModalProps) => {
  const [doctype, setDocType] = useState<DocumentType>('IMAGE');
  const [docList, setDocList] = useState<DocumentList>({
    IMAGE: [],
    DOCUMENT: [],
    URL: [],
  });
  const imgInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<DocumentAccessType>('ALL');

  const createDocs = useMutateWithToken(postDocument);
  const postDocs = useMutateWithToken(putDocument);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleChange = (value: string) => {
    setSelectedValue(value as DocumentAccessType);
  };

  const handleCloseModal = () => {
    onClose();
    setTitle('');
    setDescription('');
    setSelectedValue('ALL');
    setDocList({
      IMAGE: [],
      DOCUMENT: [],
      URL: [],
    });
    setDocType('IMAGE');
  };

  const user = useGetUser();

  const onConfirmButtonClick = () => {
    const createDocumentInfo: Document = {
      title,
      description,
      accessType: selectedValue,
      type: doctype,
      url: (docList.URL[0]?.content as string) || '',
      uploaderId: user?.memberId || 0,
    };

    const documentForm: FormData = new FormData();

    if (category === 'create') {
      const requestBlob = new Blob([JSON.stringify(createDocumentInfo)], { type: 'application/json' });
      documentForm.append('request', requestBlob);
    }

    if (doctype === 'IMAGE' && category === 'create') {
      docList.IMAGE.forEach((img) => {
        documentForm.append('files', img.content as Blob);
      });
    } else if (doctype === 'DOCUMENT' && category === 'create') {
      docList.DOCUMENT.forEach((file) => {
        documentForm.append('files', file.content as Blob);
      });
    }

    if (category === 'create') {
      const categoryDatas = categoryData as CreateDocument;
      createDocs(categoryDatas.groupType, categoryDatas.groupId, documentForm).then((response) => {
        if (response.ok) {
          handleCloseModal();
        }
      });
    } else if (category === 'update') {
      const categoryDatas = categoryData as DocumentDetail;
      postDocs(categoryDatas.id, { title, description, accessType: selectedValue }).then((response) => {
        if (response.ok) {
          handleCloseModal();
        }
      });
    } else {
      handleCloseModal();
    }
  };

  const handleGetDoc = {
    IMAGE: (e: ChangeEvent<HTMLInputElement>) => {
      const images = Array.from(e.target.files || []);
      let alertFlag = false;
      const filteredImages = images.reduce(
        (r, img) => {
          if (img.size >= MAX_FILE_SIZE) alertFlag = true;
          else
            r.push({
              key: img.name,
              name: img.name,
              content: img,
            });
          return r;
        },
        [] as { key: string; name: string; content: File }[],
      );
      if (alertFlag) alert('10MB 이내의 파일을 첨부해주세요.');
      setDocList((prev) => ({
        ...prev,
        IMAGE: [...prev.IMAGE, ...filteredImages],
      }));
    },
    DOCUMENT: (e: ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      let alertFlag = false;
      const filteredFiles = files.reduce(
        (r, file) => {
          if (file.size >= MAX_FILE_SIZE) alertFlag = true;
          else
            r.push({
              key: file.name,
              name: file.name,
              content: file,
            });
          return r;
        },
        [] as { key: string; name: string; content: File }[],
      );
      if (alertFlag) alert('10MB 이내의 파일을 첨부해주세요.');
      setDocList((prev) => ({
        ...prev,
        DOCUMENT: [...prev.DOCUMENT, ...filteredFiles],
      }));
    },
    URL: () => {
      if (urlInputRef.current?.value) {
        const url = urlInputRef.current.value;
        setDocList((prev) => ({
          ...prev,
          URL: [
            ...prev.URL,
            {
              key: url,
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
    IMAGE: () => {
      imgInputRef.current?.click();
    },
    DOCUMENT: () => {
      fileInputRef.current?.click();
    },
    URL: () => {
      handleGetDoc.URL();
    },
  };

  const handleRemoveDoc = (index: number) => {
    setDocList((prev) => {
      const newList = { ...prev };
      newList[doctype] = newList[doctype].filter((_, idx) => idx !== index);
      return newList;
    });
  };

  useEffect(() => {
    if (isOpen && category === 'update') {
      setTitle((categoryData as DocumentDetail).title);
      setDescription((categoryData as DocumentDetail).description);
      setSelectedValue((categoryData as DocumentDetail).accessType);
    }
  }, [isOpen, category, categoryData]);

  return (
    <ActionModal
      isOpen={isOpen}
      size="xl"
      onClose={handleCloseModal}
      title={`학습자료 ${category === 'create' ? '생성' : '수정'}`}
      subButtonText="취소"
      onSubButtonClick={handleCloseModal}
      mainButtonText="등록"
      onMainButtonClick={onConfirmButtonClick}
    >
      <Flex direction="column" gap="4">
        <Text textStyle="bold_xl">학습자료 제목</Text>
        <Input
          sx={{
            color: 'white',
            ...textStyles.bold_md,
            '::placeholder': {
              color: 'white',
              ...textStyles.bold_md,
            },
          }}
          onChange={handleTitleChange}
          placeholder={category === 'create' ? '학습자료 제목을 입력해주세요.' : (categoryData as DocumentDetail).title}
          value={title}
        />
        <Text textStyle="bold_xl">학습자료 소개</Text>
        <Textarea
          sx={{
            color: 'white',
            ...textStyles.bold_md,
            '::placeholder': {
              color: 'white',
              ...textStyles.bold_md,
            },
          }}
          onChange={handleDescriptionChange}
          placeholder={
            category === 'create' ? '학습자료 소개를 입력해주세요.' : (categoryData as DocumentDetail).description
          }
          value={description}
        />
        {category === 'create' && (
          <>
            <StyledRadioGroup
              title="파일 유형"
              value={category === 'create' ? doctype : (categoryData as DocumentDetail).type}
              onChange={category === 'create' ? (v) => setDocType(v as DocumentType) : () => {}}
            >
              <StyledRadio value="IMAGE">이미지</StyledRadio>
              <StyledRadio value="DOCUMENT">파일</StyledRadio>
              <StyledRadio value="URL">URL 링크</StyledRadio>
            </StyledRadioGroup>
            <Flex justify="end" direction="row" gap="4" shrink="0">
              <Input
                ref={urlInputRef}
                flex="1"
                h="7"
                shadow="md"
                _disabled={{ cursor: 'not-allowed', bg: 'orange_light', _hover: { bg: 'orange_light' } }}
                hidden={doctype !== 'URL'}
                isDisabled={docList.URL.length > 0}
                placeholder={docList.URL.length > 0 ? '링크는 1개만 첨부 가능합니다.' : 'URL 링크를 입력해주세요.'}
              />
              <Button
                w="28"
                h="7"
                shadow="md"
                _disabled={{ cursor: 'not-allowed', bg: 'orange_light', _hover: { bg: 'orange_light' } }}
                isDisabled={doctype === 'URL' && docList.URL.length > 0}
                onClick={category === 'create' ? () => handleAddDoc[doctype]() : () => {}}
                variant="orange"
              >
                추가하기
              </Button>
            </Flex>
            <Divider borderWidth="2px" borderColor={color.orange_dark} />
            <input
              hidden
              type="file"
              multiple
              accept="image/jpg,image/png,image/jpeg,image/gif"
              ref={imgInputRef}
              onChange={handleGetDoc.IMAGE}
            />
            <input
              hidden
              type="file"
              multiple
              ref={fileInputRef}
              accept="text/plain,
                  application/zip,
                  application/pdf,
                  application/vnd.ms-powerpoint,
                  application/vnd.openxmlformats-officedocument.presentationml.presentation,
                  video/mp4,
                  video/x-msvideo,
                  video/webm,
                  audio/mpeg,
                  audio/wav,
                  audio/webm,
                  image/jpeg,
                  image/png,
                  image/gif,
                  image/webp"
              onChange={handleGetDoc.DOCUMENT}
            />
            <Flex direction="column" gap="4" overflow="scroll" maxH="52" shrink="0">
              {docList[doctype] &&
                docList[doctype].map((doc, index) => (
                  <IconBox
                    key={doc.key}
                    leftIcon={DocumentBoxIcon[doctype]}
                    content={doc.name}
                    rightIcon={<BiTrash />}
                    handleClick={category === 'create' ? () => handleRemoveDoc(index) : () => {}}
                  />
                ))}
            </Flex>
          </>
        )}
        {isTeam && (
          <StyledRadioGroup
            title="공개 범위"
            defaultValue={category === 'create' ? 'ALL' : (categoryData as DocumentDetail).accessType}
            onChange={handleChange}
          >
            <StyledRadio value="ALL">전체 공개</StyledRadio>
            <StyledRadio value="TEAM">팀 공개</StyledRadio>
          </StyledRadioGroup>
        )}
      </Flex>
    </ActionModal>
  );
};

export default CreateDocumentModal;
