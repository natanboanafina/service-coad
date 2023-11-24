import styled, { css } from "styled-components";

export const StripesWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    background-color: ${theme.colors.main.stripes};
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    width: ${theme.sizes.fullPercentage};
    height: ${theme.sizes.fullPercentage};
    max-height: 3rem;

    & p {
      font-weight: 600;
    }

    & .button-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & .button-wrapper button {
      background-color: transparent;
      border: none;
      border-radius: 50%;
      width: 3rem;
      height: ${theme.sizes.fullPercentage};
      padding: 0.3rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    & .button-wrapper button:hover {
      background-color: ${theme.colors.navbar.openNavHover};
    }

    @media all and (max-width: 768px) {
      & p {
        font-size: ${theme.font.sizes.small};
      }
      & .button-wrapper {
        width: 2.5rem;
      }
      & .button-wrapper button svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  `}
`;

export const FullDataWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.main.stripes};
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    width: ${theme.sizes.fullPercentage};
    gap: 0.5rem;
    padding: 1rem;

    & .data {
      display: flex;
      justify-content: space-evenly;
      align-items: flex-start;
      width: ${theme.sizes.fullPercentage};
      justify-content: flex-start;
    }

    & .data .data-content,
    & .data-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 1rem;
      gap: 1rem;
      width: ${theme.sizes.fullPercentage};
    }
    & .data .data-content p span,
    & .data-content p span {
      font-weight: bold;
      text-align: left;
    }

    @media all and (max-width: 768px) {
      & .data {
        flex-direction: column;
        width: ${theme.sizes.fullPercentage};
      }
      & .data .data-content {
        width: ${theme.sizes.fullPercentage};
      }
      & .data .data-content p,
      & .data .data-content p span,
      & .data-content p span,
      & .data-content p {
        font-size: ${theme.font.sizes.small};
      }
    }
  `}
`;
