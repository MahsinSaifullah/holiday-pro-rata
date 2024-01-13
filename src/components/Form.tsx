import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import './form.scss';

export const Form = () => {
  return (
    <Card>
      <CardContent>
        <div className="input-container">
          <h3>Leave entitlement per annum:</h3>
          <TextField />
          <h3>days</h3>
        </div>
        <div className="input-container">
          <h3>Dates to calculate:</h3>
          <DatePicker label="From" />
          <DatePicker label="To" />
        </div>
        <div className="input-container">
          <h3>Work capacity:</h3>
          <TextField />
          <h3>%</h3>
        </div>
      </CardContent>
    </Card>
  );
};
