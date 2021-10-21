import React, { useState } from 'react';
import './styles.css';
import { InputField } from '../../atoms/InputField';
import { InputLabel } from '../../atoms/InputLabel/label';
import { Text } from '../../atoms/Text/index';
import { Console } from 'console';

interface IInput {
  label: string;
  placeholder: string;
  isError: boolean;
}

export const InputElement: React.FC<IInput> = ({ label, placeholder, isError }) => {
  const [HasError, setError] = useState(isError);
  function FixError(): void {
    setError(false);
  }

  return (
    <div className="uikit">
      <InputLabel>{label}</InputLabel>

      <InputField
        /* not created flag for setError but it should be here:D */
        StyleChoised={isErrored(HasError)}
        placeholder={placeholder}
        onChange={FixError}
      ></InputField>
      {HasError && <Text value="error">Something goes wrong</Text>}
    </div>
  );
  function isErrored(flag: boolean): string {
    return !flag ? 'input__ok' : 'input__errored';
  }
};
InputElement.defaultProps = {
  placeholder: '',
};
