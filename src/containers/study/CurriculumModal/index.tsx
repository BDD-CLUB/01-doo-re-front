/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { Flex, IconButton, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import React, { useState, ChangeEvent, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiEdit, BiTrash } from 'react-icons/bi';

import { postCurriculum } from '@/app/api/study';
import AutoResizeTextarea from '@/components/AutoResizeTextarea';
import ActionModal from '@/components/Modal/ActionModal';

import { EditCurriculum, CurriculumModalProps } from './type';

const CurriculumModal = ({ isOpen, onClose, originCurriculums }: CurriculumModalProps) => {
  const { studyId } = useParams<{ studyId: string }>();

  const [curriculums, setCurriculums] = useState<EditCurriculum[]>([]);
  const [deleteCurriculums, setDeleteCurriculums] = useState<EditCurriculum[]>([]);

  const [newCurriculum, setNewCurriculum] = useState<string>('');
  const [newCurriculumId, setNewCurriculumId] = useState<number>((originCurriculums.at(-1)?.id || 0) + 1);

  const editCurriculumRef = React.useRef<HTMLTextAreaElement>();

  const handleNewCurriculumChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewCurriculum(event.target.value);
  };

  const handleCurriculumChange = (index: number) => (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    setCurriculums((prevCurriculums) => {
      const updatedCurriculums = [...prevCurriculums];
      updatedCurriculums[index].name = value;
      return updatedCurriculums;
    });
  };

  const handleAddButtonClick = () => {
    if (newCurriculum.trim() !== '') {
      setCurriculums((prevCurriculums) => [
        ...prevCurriculums,
        {
          id: newCurriculumId + 1,
          itemOrder: prevCurriculums.length + 1,
          name: newCurriculum.trim(),
          isEdit: false,
        },
      ]);

      setNewCurriculum('');
      setNewCurriculumId((prevId) => prevId + 1);
    }
  };

  const handleEditButtonClick = (index: number) => {
    setCurriculums((prevCurriculums) => {
      const updatedCurriculums = [...prevCurriculums];
      updatedCurriculums[index].isEdit = !updatedCurriculums[index].isEdit;

      return updatedCurriculums;
    });
  };

  const handleDeleteButtonClick = (index: number) => {
    setCurriculums((prevCurriculums) =>
      prevCurriculums
        .filter((_, idx) => idx !== index)
        .map((curriculum, idx) => ({
          ...curriculum,
          itemOrder: idx + 1,
        })),
    );
    setDeleteCurriculums((prevCurriculums) => [...prevCurriculums, curriculums[index]]);
  };

  const handleSaveButtonClick = () => {
    const deletedCurriculumItems = deleteCurriculums
      .filter((curriculum) => originCurriculums.some((origin) => origin.id === curriculum.id))
      .map((curriculum) => ({
        id: curriculum.id,
        name: curriculum.name,
        itemOrder: curriculum.itemOrder,
      }));

    const curriculumItems = curriculums.map((curriculum) => ({
      id: curriculum.id,
      name: curriculum.name,
      itemOrder: curriculum.itemOrder,
    }));

    postCurriculum(Number(studyId), curriculumItems, deletedCurriculumItems);
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    setCurriculums((prevCurriculums) => {
      const updatedCurriculums = [...prevCurriculums];
      const movedCurriculum = { ...updatedCurriculums[source.index] };

      updatedCurriculums.splice(source.index, 1);
      updatedCurriculums.splice(destination.index, 0, movedCurriculum);

      updatedCurriculums.forEach((curriculum, index) => {
        const updatedCurriculum = { ...curriculum };
        updatedCurriculum.itemOrder = index + 1;
        updatedCurriculums[index] = updatedCurriculum;
      });

      return updatedCurriculums;
    });
  };

  useEffect(() => {
    setCurriculums(
      originCurriculums.map((curriculum) => ({
        id: curriculum.id,
        itemOrder: curriculum.itemOrder,
        name: curriculum.name,
        isEdit: false,
      })),
    );
  }, [originCurriculums]);

  return (
    <ActionModal
      isOpen={isOpen}
      onClose={onClose}
      title="커리큘럼"
      subButtonText="취소"
      onSubButtonClick={() => {
        onClose();
      }}
      mainButtonText="저장"
      onMainButtonClick={handleSaveButtonClick}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="DropLand">
          {(provided) => (
            <Flex direction="column" gap="4" m="4" {...provided.droppableProps} ref={provided.innerRef}>
              {curriculums.map((curriculum, index) => (
                <Draggable key={curriculum.id} draggableId={curriculum.id.toString()} index={index}>
                  {(innerProvided) => (
                    <Flex
                      ref={innerProvided.innerRef}
                      align="center"
                      gap="2"
                      {...innerProvided.draggableProps}
                      {...innerProvided.dragHandleProps}
                    >
                      <Text textStyle="bold_xl" color={curriculum.isEdit ? 'orange' : 'orange_light'}>
                        {curriculum.itemOrder.toString().padStart(2, '0')}
                      </Text>

                      <AutoResizeTextarea
                        ref={editCurriculumRef.current}
                        bg={curriculum.isEdit ? 'orange' : 'orange_light'}
                        zIndex={!curriculum.isEdit ? '-1' : '1'}
                        value={curriculum.name}
                        onChange={handleCurriculumChange(index)}
                        RightIconButton={
                          <>
                            <IconButton
                              aria-label="edit curriculum"
                              icon={<BiEdit />}
                              onClick={() => {
                                handleEditButtonClick(index);
                              }}
                              size="icon_md"
                              variant="transparent"
                            />
                            <IconButton
                              aria-label="delete curriculum"
                              icon={<BiTrash />}
                              onClick={() => {
                                handleDeleteButtonClick(index);
                              }}
                              size="icon_md"
                              variant="transparent"
                            />
                          </>
                        }
                      />
                    </Flex>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Flex>
          )}
        </Droppable>
      </DragDropContext>

      <InputGroup>
        <Input onChange={handleNewCurriculumChange} value={newCurriculum} />
        <InputRightElement>
          <IconButton
            aria-label="add curriculum"
            icon={<AiOutlinePlus />}
            onClick={handleAddButtonClick}
            size="icon_md"
            variant="transparent"
          />
        </InputRightElement>
      </InputGroup>
    </ActionModal>
  );
};

export default CurriculumModal;
