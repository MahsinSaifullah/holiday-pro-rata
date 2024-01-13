import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
      <CardActions>
        <Button
          style={{ backgroundColor: '#ff6a13', fontWeight: 'bold' }}
          fullWidth
          variant="contained"
        >
          Calculate
        </Button>
      </CardActions>
    </Card>
  );
};
