import * as Styled from "./styles";

interface IListProps {
  children: React.ReactNode;
}
export const List: React.FC<IListProps> = ({ children }) => {
  return (
    <>
      <Styled.ListWrapper>{children}</Styled.ListWrapper>
    </>
  );
};
