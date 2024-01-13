import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './result.scss';

export const Result = () => {
  return (
    <Card>
      <CardContent>
        <div className="result">
          <h2 className="result-title">You are entitled to:</h2>
          <h3>21 days</h3>
        </div>
      </CardContent>
    </Card>
  );
};
