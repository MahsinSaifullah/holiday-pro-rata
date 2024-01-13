import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ICalculateOption } from '../types';
import React from 'react';

interface CalculateOptionProps {
  onOptionSelect: (option: ICalculateOption) => void;
}

export const CalculateOption: React.FC<CalculateOptionProps> = ({
  onOptionSelect,
}) => {
  return (
    <Stack spacing={2} direction="row">
      <Button
        style={{
          backgroundColor: '#EBE7E7',
          color: 'black',
          fontWeight: 'bold',
        }}
        variant="contained"
        onClick={() => onOptionSelect('days')}
      >
        Calculate By Days
      </Button>
      <Button
        style={{
          backgroundColor: '#EBE7E7',
          color: 'black',
          fontWeight: 'bold',
        }}
        variant="contained"
        onClick={() => onOptionSelect('hours')}
      >
        Calculate By hours
      </Button>
    </Stack>
  );
};
