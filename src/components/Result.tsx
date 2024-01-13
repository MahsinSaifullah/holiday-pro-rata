import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './result.scss';
import React from 'react';
import { ICalculateOption } from '../types';

interface ResultProps {
  result: number | null;
  calculateOption: ICalculateOption | null;
}

export const Result: React.FC<ResultProps> = ({ result, calculateOption }) => {
  return (
    <Card>
      <CardContent>
        <div className="result">
          <h2 className="result-title">You are entitled to:</h2>
          <h3>
            {result?.toFixed(2)} {calculateOption === 'days' ? 'days' : 'hours'}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};
