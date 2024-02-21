import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

import color from '@/constants/color';

import { AttendanceProps } from './types';

const AttendanceRate = ({ attendanceRate }: AttendanceProps) => {
  return (
    <CircularProgress color={color.orange} size="3xs" thickness="5" value={attendanceRate}>
      <CircularProgressLabel color={color.orange} fontSize="2xl" fontWeight="bold">
        {`${attendanceRate}%`}
      </CircularProgressLabel>
    </CircularProgress>
  );
};

export default AttendanceRate;
