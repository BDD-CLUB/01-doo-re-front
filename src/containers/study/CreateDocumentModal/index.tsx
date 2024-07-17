'use client';

import { Divider, Flex, Input, Text, Textarea, Button } from '@chakra-ui/react';
import { ChangeEvent, useRef, useState } from 'react';
import { BiFile, BiImage, BiTrash } from 'react-icons/bi';
import { BsLink45Deg } from 'react-icons/bs';

import { postDocument } from '@/app/api/document';
import IconBox from '@/components/IconBox';
import ActionModal from '@/components/Modal/ActionModal';
import StyledRadio from '@/components/StyledRadio';
import StyledRadioGroup from '@/components/StyledRadioGroup';
import color from '@/constants/color';
import { DocumentModalProps, DocumentList } from '@/containers/study/CreateDocumentModal/type';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';
import useGetUser from '@/hooks/useGetUser';
import { Document, DocumentAccessType, DocumentType } from '@/types';

const DocumentBoxIcon = {
  IMAGE: <BiImage />,
  DOCUMENT: <BiFile />,
  URL: <BsLink45Deg />,
};

const CreateDocumentModal = ({ isOpen, onClose, groupId, groupType }: DocumentModalProps) => {
  const [doctype, setDocType] = useState<DocumentType>('IMAGE');
  const [docList, setDocList] = useState<DocumentList>({
    IMAGE: [],
    DOCUMENT: [],
    URL: [],
  });
  const imgInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const urlInputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedValue, setSelectedValue] = useState<DocumentAccessType>('ALL');

  const createDocs = useMutateWithToken(postDocument);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleChange = (value: string) => {
    setSelectedValue(value as DocumentAccessType);
  };
  const user = useGetUser();

  const onConfirmButtonClick = () => {
    const documentInfo: Document = {
      title,
      description,
      accessType: selectedValue,
      type: doctype,
      url: (docList.URL[0]?.content as string) || '',
      uploaderId: user?.memberId || 0,
    };
    const documentForm: FormData = new FormData();
    const requestBlob = new Blob([JSON.stringify(documentInfo)], { type: 'application/json' });

    documentForm.append('request', requestBlob);

    if (doctype === 'IMAGE') {
      docList.IMAGE.forEach((img) => {
        documentForm.append('files', img.content as Blob);
      });
    } else if (doctype === 'DOCUMENT') {
      docList.DOCUMENT.forEach((file) => {
        documentForm.append('files', file.content as Blob);
      });
    }
    createDocs(groupType, groupId, documentForm).then((response) => {
      if (response.ok) {
        onClose();
      }
    });

    onClose();
  };

  const handleGetDoc = {
    IMAGE: (e: ChangeEvent<HTMLInputElement>) => {
      const imgs = Array.from(e.target.files || []);
      setDocList((prev) => ({
        ...prev,
        IMAGE: [
          ...prev.IMAGE,
          ...imgs.map((img) => ({
            key: img.name,
            name: img.name,
            content: img,
          })),
        ],
      }));
    },
    DOCUMENT: (e: ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      setDocList((prev) => ({
        ...prev,
        DOCUMENT: [
          ...prev.DOCUMENT,
          ...files.map((file) => ({
            key: file.name.toString(),
            name: file.name,
            content: file,
          })),
        ],
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
        <Input onChange={handleTitleChange} placeholder="학습자료 제목을 입력해주세요." value={title} />
        <Text textStyle="bold_xl">학습자료 소개</Text>
        <Textarea onChange={handleDescriptionChange} placeholder="학습자료 소개를 입력해주세요." value={description} />
        <StyledRadioGroup title="파일 유형" value={doctype} onChange={(v) => setDocType(v as DocumentType)}>
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
            hidden={doctype !== 'URL'}
            placeholder="URL 링크를 입력해주세요."
          />
          <Button w="28" h="7" shadow="md" onClick={() => handleAddDoc[doctype]()} variant="orange">
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
        <input hidden type="file" multiple ref={fileInputRef} onChange={handleGetDoc.DOCUMENT} />
        <Flex direction="column" gap="4" overflow="scroll" maxH="52" shrink="0">
          {docList[doctype] &&
            docList[doctype].map((doc, index) => (
              <IconBox
                key={doc.key}
                leftIcon={DocumentBoxIcon[doctype]}
                content={doc.name}
                rightIcon={<BiTrash />}
                handleClick={() => handleRemoveDoc(index)}
              />
            ))}
        </Flex>
        <StyledRadioGroup title="공개 범위" defaultValue="ALL" onChange={handleChange}>
          <StyledRadio value="ALL">전체 공개</StyledRadio>
          <StyledRadio value="TEAM">팀 공개</StyledRadio>
        </StyledRadioGroup>
      </Flex>
    </ActionModal>
  );
};

export default CreateDocumentModal;
