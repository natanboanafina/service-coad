import { List } from "../../components/List";
import { Stripes } from "../../components/Stripes";
import { Text } from "../../components/Text";
import { useFormData } from "../../context/useFormData";
import * as Styled from "./styles";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Searchbar } from "../../components/Searchbar";

export default function SolicitationList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { formData } = useFormData();

  const pageContent = 10;
  const totalPages = Math.ceil(formData.length / pageContent);
  const initialIndex = (currentPage - 1) * pageContent;
  const finalIndex = initialIndex + pageContent;
  const currentContent = formData.slice(initialIndex, finalIndex);
  const newDate = new Date().toLocaleDateString("pt-BR");

  const filteredContent = formData.filter((data) => {
    const lowerCaseName = data.name.toLowerCase();
    const lowerCaseMail = data.mail.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    if (
      lowerCaseName.includes(lowerCaseSearchTerm) ||
      lowerCaseMail.includes(lowerCaseSearchTerm)
    ) {
      return true;
    } else {
      return false;
    }
  });

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Styled.SolicitationListWrapper>
        <List>
          <Searchbar onChange={handleSearchChange} value={searchTerm} />
          <Text
            as='h2'
            $weight='bold'
            content='Dados Cadastrados'
            style={{ textAlign: "center" }}
          />
          {filteredContent.map((data) => {
            const formattingDataDate = data.date.split("/");
            const dataFormat = new Date(
              `${formattingDataDate[2]}-${formattingDataDate[1]}-${formattingDataDate[0]}`
            );

            if (isNaN(dataFormat.getTime())) {
              console.error("Data inválida:", data.date);
              return null;
            }

            const displayDate = dataFormat.toLocaleDateString("pt-BR");

            return (
              <Stripes
                key={uuidv4()}
                name={data.name}
                mail={data.mail}
                cel={data.mobile}
                tel={data.tel}
                solicitation={data.solicitation}
                description={data.description}
                date={displayDate}
                systemData={newDate}
                priority={data.priority}
              />
            );
          })}
          <Styled.PagesButtonWrapper>
            <Styled.PageButton
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </Styled.PageButton>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                className='page-counter'
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            ))}

            <Styled.PageButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || totalPages === 0}
            >
              Próximo
            </Styled.PageButton>
          </Styled.PagesButtonWrapper>
        </List>
      </Styled.SolicitationListWrapper>
    </>
  );
}
