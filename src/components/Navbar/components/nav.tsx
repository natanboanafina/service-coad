import * as Styled from "./styles";
import { Link } from "react-router-dom";

interface INavProps {
  className?: string;
}

export const Nav: React.FC<INavProps> = ({ className }) => {
  return (
    <>
      <Styled.Nav className={className}>
        <ul>
          <li>
            <Link to='/'>Adicionar Serviços</Link>
          </li>
          <li>
            <Link to='/list'>Lista de Adicionados</Link>
          </li>
        </ul>
      </Styled.Nav>
    </>
  );
};
