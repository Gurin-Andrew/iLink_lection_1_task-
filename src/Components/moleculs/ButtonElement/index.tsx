import React, { useState } from 'react';
import { Button } from '../../atoms/button';
interface IButtonElement {
  text: string;
  isActive: boolean;
}
export const ButtonElement: React.FC<IButtonElement> = ({ isActive, text }) => {
  const [Active, setActive] = useState(true);
  const [Clicked, SetClicked] = useState(false);

  function onClick(): void {
    SetClicked(!Clicked);
  }

  const ChoisedStyle = ChooseStyle(Active, Clicked);

  return (
    <div className="button_element">
      <Button
        isActive={isActive}
        text={text}
        StyleChoised={ChoisedStyle}
        onClick={onClick}
      ></Button>
    </div>
  );
};
function ChooseStyle(active: boolean, clicked: boolean): string {
  if (active) {
    if (clicked) {
      return 'button__pressed';
    } else {
      return 'button__regular';
    }
  } else {
    return 'button__inactive';
  }
}
