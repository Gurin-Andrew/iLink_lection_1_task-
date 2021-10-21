import React from 'react';
import './styles.css';
import { Text } from '../Text/index';
interface IButton {
  text: string;
  StyleChoised: string;
  onClick: () => void;
  isActive: boolean;
}
export const Button: React.FC<IButton> = ({ text, StyleChoised, onClick, isActive }) => {
  return (
    <button disabled={!isActive} type="button" className={StyleChoised} onClick={onClick}>
      <Text value="button_text">{text}</Text>
    </button>
  );
};
