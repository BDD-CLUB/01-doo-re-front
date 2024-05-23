/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { Flex, IconButton, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import React, { useState, ChangeEvent } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiEdit, BiTrash } from 'react-icons/bi';

import AutoResizeTextarea from '@/components/AutoResizeTextarea';

const CurriculumModal = () => {
  const [curriculums, setCurriculums] = useState([
    { key: 'item-1', itemOrder: 1, content: 'item-1', isEdit: false },
    { key: 'item-2', itemOrder: 2, content: 'item-2', isEdit: false },
    { key: 'item-3', itemOrder: 3, content: 'item-3', isEdit: false },
    { key: 'item-4', itemOrder: 4, content: 'item-4', isEdit: false },
  ]);

  const [addCurriculum, setAddCurriculum] = useState('');
  const editCurriculumRef = React.useRef<HTMLTextAreaElement>(null);

  const handleNewContentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddCurriculum(event.target.value);
  };

  const handleEditCurriculumChange = (event: ChangeEvent<HTMLTextAreaElement>, index: number) => {
    const { value } = event.target;

    setCurriculums((prevCurriculums) => {
      const updatedCurriculums = [...prevCurriculums];
      updatedCurriculums[index].content = value;
      return updatedCurriculums;
    });
  };

  const handleAddButtonClick = () => {
    if (addCurriculum.trim() !== '') {
      setCurriculums((prevCurriculums) => [
        ...prevCurriculums,
        {
          key: `item-${prevCurriculums.length + 1}`,
          itemOrder: prevCurriculums.length + 1,
          content: addCurriculum,
          isEdit: false,
        },
      ]);
      setAddCurriculum('');
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

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="DropLand">
          {(provided) => (
            <Flex direction="column" gap="4" m="4" {...provided.droppableProps} ref={provided.innerRef}>
              {curriculums.map((curriculum, index) => (
                <Draggable key={curriculum.key} draggableId={curriculum.key} index={index}>
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
                        ref={editCurriculumRef}
                        zIndex={!curriculum.isEdit ? '-1' : '1'}
                        value={curriculum.content}
                        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => handleEditCurriculumChange(event, index)}
                        RightIconButton={
                          <>
                            <IconButton
                              aria-label="edit"
                              icon={<BiEdit />}
                              onClick={() => {
                                handleEditButtonClick(index);
                              }}
                              size="icon_md"
                              variant="transparent"
                            />
                            <IconButton
                              aria-label="delete"
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
        <Input onChange={handleNewContentChange} value={addCurriculum} />
        <InputRightElement>
          <IconButton
            aria-label="add"
            icon={<AiOutlinePlus />}
            onClick={handleAddButtonClick}
            size="icon_md"
            variant="transparent"
          />
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default CurriculumModal;
