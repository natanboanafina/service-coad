import { Text } from "../Text";
import * as Styled from "./styles";

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  style?: React.CSSProperties;
  children: React.ReactNode;
  id: string;
}

export const Form: React.FC<IFormProps> = ({
  id,
  style,
  children,
  ...rest
}) => {
  return (
    <>
      <Styled.FormComponent id={id} style={style} {...rest}>
        <Text
          as='h2'
          $weight='bold'
          content='Solicitação de Serviços'
          style={{ textAlign: "center" }}
        />
        {children}
      </Styled.FormComponent>
    </>
  );
};
