import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Dayjs } from 'dayjs';
import { FormData, ICalculateOption } from '../types';
import './form.scss';

interface FormProps {
  onCalculate: (formData: FormData | null) => void;
  calculateOption: ICalculateOption | null;
}

export const Form: React.FC<FormProps> = ({ onCalculate, calculateOption }) => {
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: +value,
    });
  };

  return (
    <Card>
      <CardContent>
        <div className="input-container">
          <h3>Leave entitlement per annum:</h3>
          <TextField
            name="leavePerAnnum"
            type="number"
            value={formData?.leavePerAnnum}
            onChange={handleOnChange}
          />
          <h3>{calculateOption === 'days' ? 'days' : 'hours'}</h3>
        </div>
        <div className="input-container">
          <h3>Dates to calculate:</h3>
          <DatePicker
            label="From"
            onChange={(value: Dayjs | null) => {
              setFormData({
                ...formData,
                dateFrom: value,
              });
            }}
          />
          <DatePicker
            label="To"
            onChange={(value: Dayjs | null) => {
              setFormData({
                ...formData,
                dataTo: value,
              });
            }}
          />
        </div>
        <div className="input-container">
          <h3>Work capacity:</h3>
          <TextField
            name="workCapacity"
            type="number"
            error={!!formData?.workCapacity && formData.workCapacity > 100}
            onChange={handleOnChange}
          />
          <h3>%</h3>
        </div>
      </CardContent>
      <CardActions>
        <Button
          style={{ backgroundColor: '#ff6a13', fontWeight: 'bold' }}
          fullWidth
          variant="contained"
          onClick={() => onCalculate(formData)}
        >
          Calculate
        </Button>
      </CardActions>
    </Card>
  );
};
