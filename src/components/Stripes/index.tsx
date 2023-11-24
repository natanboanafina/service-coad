import ArrowDown from "../../assets/show-data/ArrowDown";
import ArrowUp from "../../assets/show-data/ArrowUp";
import * as Styled from "./styles";
import { useState } from "react";

interface IStripesProps {
  name: string;
  mail: string;
  cel: string;
  tel: string;
  date: string;
  description: string;
  solicitation: string;
  systemData: string;
  priority: string;
}
export const Stripes: React.FC<IStripesProps> = ({
  name,
  mail,
  cel,
  tel,
  date,
  description,
  solicitation,
  systemData,
  priority
}) => {
  const [isExtended, setIsExtended] = useState(true);
  return (
    <>
      {/* PARTE RESPONSÁVEL PELO DISPLAY DAS INFORMAÇÕES RESUMIDAS */}
      <Styled.StripesWrapper>
        <p>{name}</p>
        <p>{mail}</p>
        <p>{solicitation}</p>
        <div className='button-wrapper'>
          <button onClick={() => setIsExtended(!isExtended)}>
            {!isExtended ? <ArrowDown /> : <ArrowUp />}
          </button>
        </div>
      </Styled.StripesWrapper>
      {/* AO CLICAR NA SETA PARA BAIXO, ABRIRÁ ESSE COMPONENTE PARA VISUALIZAÇÃO DETALHADA */}
      {!isExtended && (
        <Styled.FullDataWrapper>
          <div className='data'>
            <div className='data-content'>
              <p>
                <span>Nome:</span> {name}
              </p>
              <p>
                <span>E-mail:</span> {mail}
              </p>
              <p>
                <span>Tipo de Solicitação: </span>
                {solicitation}
              </p>
              <p>
                <span>Data (usuário): </span>
                {date}
              </p>
            </div>
            <div className='data-content'>
              <p>
                <span>Cel.:</span> {cel}
              </p>
              <p>
                <span>Tel.: </span>
                {tel}
              </p>
              <p>
                <span>Data (sistema): </span>
                {systemData}
              </p>
            </div>
          </div>
          <div className='data-content'>
            <p>
              <span>Solicitação.:</span> {description}
            </p>
          </div>
          <div className='data-content'>
            <p>
              <span>Prioridade: </span>
              {priority}
            </p>
          </div>
        </Styled.FullDataWrapper>
      )}
    </>
  );
};
