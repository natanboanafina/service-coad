import styled, { css } from "styled-components";

export const ListWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    background-color: ${theme.colors.default.white};
    border-radius: 5px;
    border: 3px inset silver;
    width: 80%;
    height: 90%;
    overflow-y: scroll;
    padding: 0.5rem;
  `}
`;
