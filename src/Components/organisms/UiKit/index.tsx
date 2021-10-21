import React from 'react';
import { InputElement } from '../../moleculs/InputElement';
import './styles.css';
export const UiKit: React.FC = () => {
  return (
    <div className="UiKit">
      <InputElement isError={false} label="User Name" placeholder="Your Name"></InputElement>
      <InputElement
        isError={true}
        label="User Name"
        placeholder="Start Typing Smth to fix error"
      ></InputElement>
    </div>
  );
};
