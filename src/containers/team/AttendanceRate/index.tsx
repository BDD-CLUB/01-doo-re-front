import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

import { AttendanceRateProps } from './types';

const AttendanceRate = ({ attendanceRate }: AttendanceRateProps) => {
  return (
    <CircularProgress color="orange" size="3xs" thickness="5" value={attendanceRate}>
      <CircularProgressLabel color="orange" fontSize="2xl" fontWeight="bold">
        {attendanceRate}%
      </CircularProgressLabel>
    </CircularProgress>
  );
};

export default AttendanceRate;
