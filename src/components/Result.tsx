import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './result.scss';
import React from 'react';

interface ResultProps {
  result: number | null;
}

export const Result: React.FC<ResultProps> = ({ result }) => {
  return (
    <Card>
      <CardContent>
        <div className="result">
          <h2 className="result-title">You are entitled to:</h2>
          <h3>{result?.toFixed(2)} days</h3>
        </div>
      </CardContent>
    </Card>
  );
};
