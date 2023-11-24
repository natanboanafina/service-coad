import * as Styled from "./styles";
import { forwardRef } from "react";

interface IInputProps {
  label: string;
  id: string;
  type: HTMLInputElement["type"];
  style?: React.CSSProperties;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, type, id, style, ...rest }, ref) => {
    return (
      <>
        <Styled.Container style={style} ref={ref}>
          <Styled.InputContent type={type} id={id} placeholder=' ' {...rest} />
          <Styled.Label htmlFor={id}>{label}</Styled.Label>
        </Styled.Container>
      </>
    );
  }
);
