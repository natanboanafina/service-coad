import styled, { css } from "styled-components";
import { Button } from "../../components/Button";

export const SolicitationListWrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(120, 120, 120, 0.5);
    width: ${theme.sizes.fullPercentage};
    height: ${theme.sizes.fullPercentage};
    height: 100vh;
  `}
`;

export const PagesButtonWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: ${theme.sizes.fullPercentage};

    & .page-counter {
      width: fit-content;
      padding: 0.5rem;
      border-radius: 50px;
      text-align: center;
      font-size: ${theme.font.sizes.small};
    }

    & .page-counter:disabled {
      cursor: not-allowed;
    }
  `}
`;

export const PageButton = styled(Button)`
  ${({ theme }) => css`
    width: 20%;
    font-size: ${theme.font.sizes.small};
    letter-spacing: 0.5px;

    &:disabled {
      background-color: ${theme.colors.main.inputText};
      cursor: not-allowed;
    }
  `}
`;
