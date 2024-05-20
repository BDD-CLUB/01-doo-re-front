/* eslint-disable import/no-extraneous-dependencies */
import { Input, InputGroup, Icon, InputRightElement, Box } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import { BiCalendar } from 'react-icons/bi';
import 'react-datepicker/dist/react-datepicker.css';

import './style.css';
import { StyledDatePickerProps } from './types';

const StyledDatePicker = ({ label, selectedDate, onChange }: StyledDatePickerProps) => {
  return (
    <Box w="100%" role="group">
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        wrapperClassName="styled_date_picker"
        customInput={
          <InputGroup w="100%">
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
