import React from 'react';
import { Text } from '../../atoms/Text/index';
import './styles.css';
export const Frame: React.FC = () => {
  return (
    <div className="frame">
      <Text value="h1">Header 1</Text>

      <Text value="h2">Header 2</Text>
      <Text value="h3">Header 2</Text>
      <Text value="h4">Header 4</Text>
      <Text value="t1">Text 1</Text>
      <Text value="t2">Text 2</Text>
    </div>
  );
};
