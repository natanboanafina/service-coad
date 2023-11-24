import * as Styled from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  style,
  type,
  form,
  ...rest
}) => {
  return (
    <>
      <Styled.Button style={style} form={form} type={type} {...rest}>
        {children}
      </Styled.Button>
    </>
  );
};
