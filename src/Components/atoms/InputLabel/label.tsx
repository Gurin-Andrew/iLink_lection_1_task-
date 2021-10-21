import React from 'react';
import { Text } from '../Text/index';
export const InputLabel: React.FC = ({ children }) => {
  return (
    <div className="input_label">
      <Text value="label_input">{children}</Text>
    </div>
  );
};
