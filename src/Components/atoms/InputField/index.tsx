import React from 'react';
import './style.css';
import { Text } from '../Text/index';
interface IInputField {
  value?: string;
  placeholder: string;
  StyleChoised: string;
  onChange: () => void;
}
export const InputField: React.FC<IInputField> = ({
  value,
  placeholder,
  StyleChoised,
  onChange,
}) => {
  return (
    <input
      onChange={onChange}
      className={StyleChoised}
      type="text"
      value={value}
      placeholder={placeholder}
    />
  );
};
