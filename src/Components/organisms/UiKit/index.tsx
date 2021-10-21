import React from 'react';
import { InputElement } from '../../moleculs/InputElement';
import './styles.css';
import { ButtonElement } from '../../moleculs/ButtonElement';
export const UiKit: React.FC = () => {
  return (
    <div className="UiKit">
      <InputElement isError={false} label="User Name" placeholder="Your Name"></InputElement>
      <InputElement
        isError={true}
        label="User Name"
        placeholder="Start Typing Smth to fix error"
      ></InputElement>

      <ButtonElement isActive={true} text="click me"></ButtonElement>
      <ButtonElement isActive={false} text="disabled"></ButtonElement>
    </div>
  );
};
