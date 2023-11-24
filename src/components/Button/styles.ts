import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    border-radius: 10px;
    background-color: ${theme.colors.button.background};
    color: ${theme.colors.default.white};
    font-size: ${theme.font.sizes.base};
    font-weight: 600;
    letter-spacing: 1px;
    width: ${theme.sizes.fullPercentage};
    height: 2rem;
    margin-top: 0.5rem;
    cursor: pointer;

    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: ${theme.colors.button.bgHover};
    }
  `}
`;
