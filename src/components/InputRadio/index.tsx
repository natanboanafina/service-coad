import * as Styled from "./styles";
import { forwardRef } from "react";

// Os arquivos com forwardRef foram necessários para que pudessem receber os dados de seus respectivos
// componentes pais e, em seguida, repassá-los para os seus próprios componentes filhos
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
