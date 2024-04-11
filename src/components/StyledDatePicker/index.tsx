'use client';

import { Input, InputGroup, Icon, InputRightElement, Box } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { BiCalendar } from 'react-icons/bi';
import 'react-datepicker/dist/react-datepicker.css';

import { StyledDatePickerProps } from './types';

const StyledDatePicker: React.FC<StyledDatePickerProps> = ({ label, selectedDate, onChange }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [boxWidth, setBoxWidth] = useState('0px');

  useEffect(() => {
    if (boxRef.current) {
      setBoxWidth(`${boxRef.current.offsetWidth}px`);
    }
  }, []);

  return (
    <Box ref={boxRef} w="100%">
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        customInput={
          <InputGroup minW={boxWidth}>
            <Input
              textStyle="bold_xl"
              _hover={{ cursor: 'pointer' }}
              _placeholder={{ color: 'white' }}
              placeholder={label}
              readOnly
              value={selectedDate ? selectedDate.toLocaleDateString() : ''}
            />
            <InputRightElement _hover={{ cursor: 'pointer' }}>
              <Icon as={BiCalendar} textStyle="bold_xl" mr="5" color="gray.50" />
            </InputRightElement>
          </InputGroup>
        }
      />
    </Box>
  );
};

export default StyledDatePicker;
