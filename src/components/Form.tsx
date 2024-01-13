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
  onToggleCalculateOption: () => void;
}

export const Form: React.FC<FormProps> = ({
  onCalculate,
  calculateOption,
  onToggleCalculateOption,
}) => {
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
                dateTo: value,
              });
            }}
          />
        </div>
        <div className="input-container">
          <h3>Work capacity:</h3>
          <TextField
            name="workCapacity"
            type="number"
            value={formData?.workCapacity}
            error={!!formData?.workCapacity && formData.workCapacity > 100}
            onChange={handleOnChange}
          />
          <h3>%</h3>
        </div>
      </CardContent>
      <CardActions className="form-action">
        <Button
          style={{ backgroundColor: '#ff6a13', fontWeight: 'bold' }}
          fullWidth
          variant="contained"
          onClick={() => onCalculate(formData)}
        >
          Calculate
        </Button>
        <Button
          style={{
            color: 'black',
            fontWeight: 'lighter',
            opacity: 0.7,
          }}
          variant="text"
          onClick={() => {
            setFormData({
              leavePerAnnum: 0,
              dateTo: null,
              dateFrom: null,
              workCapacity: 0,
            });
            onToggleCalculateOption();
          }}
        >
          or calulate with {calculateOption === 'days' ? 'hours' : 'days'} ?
        </Button>
      </CardActions>
    </Card>
  );
};
