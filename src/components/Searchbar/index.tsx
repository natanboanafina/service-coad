import * as Styled from "./styles";

interface ISearchbarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Searchbar: React.FC<ISearchbarProps> = ({ value, onChange }) => {
  return (
    <>
      <Styled.SearchbarWrapper>
        <input
          type='search'
          placeholder='Pesquisar'
          value={value}
          onChange={onChange}
        />
      </Styled.SearchbarWrapper>
    </>
  );
};
