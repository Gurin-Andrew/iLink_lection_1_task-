import React from 'react';
import './main.css';
interface INameInput {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}
export const NameInput: React.FC<INameInput> = () => {
  return <div className="nameimput">Hello TS</div>;
};
