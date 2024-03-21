import { CircularProgress, CircularProgressLabel, useBreakpointValue, Text } from '@chakra-ui/react';

import { AttendanceRateProps } from './types';

const AttendanceRate = ({ attendanceRate }: AttendanceRateProps) => {
  return (
    <CircularProgress
      pos="absolute"
      top={{ base: '0', lg: '50%' }}
      right={{ base: '0', lg: '4' }}
      color="orange"
      opacity="0.8"
      transform={{ base: 'translateY(0%)', lg: 'translateY(-50%)' }}
      size={useBreakpointValue({ base: 24, md: 40, lg: 56 })}
      thickness="5"
      value={attendanceRate}
    >
      <CircularProgressLabel color="orange">
        <Text textStyle={useBreakpointValue({ base: 'bold_md', md: 'bold_2xl' })}>{attendanceRate}%</Text>
      </CircularProgressLabel>
    </CircularProgress>
  );
};

export default AttendanceRate;
