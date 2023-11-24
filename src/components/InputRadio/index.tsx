import * as Styled from "./styles";
import { forwardRef } from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  style?: React.CSSProperties;
}
export const InputRadio = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, id, style, value, ...rest }, ref) => {
    return (
      <>
        <Styled.InputRadioWrapper style={style} {...rest} ref={ref}>
          <label htmlFor={id}>{label}</label>
          <input type='radio' id={id} name='input-radio' value={value} />
        </Styled.InputRadioWrapper>
      </>
    );
  }
);
