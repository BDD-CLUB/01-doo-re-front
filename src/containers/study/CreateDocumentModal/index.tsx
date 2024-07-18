'use client';

import { Divider, Flex, Input, Text, Textarea, Button } from '@chakra-ui/react';
import { ChangeEvent, useRef, useState } from 'react';
import { BiFile, BiImage, BiTrash } from 'react-icons/bi';
import { BsLink45Deg } from 'react-icons/bs';

import { postDocument, putDocument } from '@/app/api/document';
import IconBox from '@/components/IconBox';
import ActionModal from '@/components/Modal/ActionModal';
import StyledRadio from '@/components/StyledRadio';
import StyledRadioGroup from '@/components/StyledRadioGroup';
import color from '@/constants/color';
import {
  DocumentModalProps,
  DocumentList,
  CreateDocument,
  UpdateDocument,
} from '@/containers/study/CreateDocumentModal/type';
import { useMutateWithToken } from '@/hooks/useFetchWithToken';
import useGetUser from '@/hooks/useGetUser';
import { Document, DocumentAccessType, DocumentDetail, DocumentType } from '@/types';

const DocumentBoxIcon = {
  IMAGE: <BiImage />,
  DOCUMENT: <BiFile />,
  URL: <BsLink45Deg />,
};

const CreateDocumentModal = ({ isOpen, onClose, categoryData, category }: DocumentModalProps) => {
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
    const UpdateDocumentInfo: UpdateDocument = {
      title,
      description,
      accessType: selectedValue,
    };
    const documentForm: FormData = new FormData();

    if (category === 'create') {
      const requestBlob = new Blob([JSON.stringify(createDocumentInfo)], { type: 'application/json' });
      documentForm.append('request', requestBlob);
    } else if (category === 'update') {
      const requestBlob = new Blob([JSON.stringify(UpdateDocumentInfo)], { type: 'application/json' });
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
          onClose();
        }
      });
    } else if (category === 'update') {
      const categoryDatas = categoryData as DocumentDetail;
      postDocs(categoryDatas.id, documentForm).then((response) => {
        if (response.ok) {
          onClose();
        }
      });
    }

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
        <Input
          onChange={handleTitleChange}
          placeholder={category === 'create' ? '학습자료 제목을 입력해주세요.' : (categoryData as DocumentDetail).title}
          value={title}
        />
        <Text textStyle="bold_xl">학습자료 소개</Text>
        <Textarea
          onChange={handleDescriptionChange}
          placeholder={
            category === 'create' ? '학습자료 소개를 입력해주세요.' : (categoryData as DocumentDetail).description
          }
          value={description}
        />
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
            hidden={doctype !== 'URL'}
            placeholder="URL 링크를 입력해주세요."
          />
          <Button
            w="28"
            h="7"
            shadow="md"
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
        <input hidden type="file" multiple ref={fileInputRef} onChange={handleGetDoc.DOCUMENT} />
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
        <StyledRadioGroup
          title="공개 범위"
          defaultValue={category === 'create' ? 'ALL' : (categoryData as DocumentDetail).accessType}
          onChange={handleChange}
        >
          <StyledRadio value="ALL">전체 공개</StyledRadio>
          <StyledRadio value="TEAM">팀 공개</StyledRadio>
        </StyledRadioGroup>
      </Flex>
    </ActionModal>
  );
};

export default CreateDocumentModal;
