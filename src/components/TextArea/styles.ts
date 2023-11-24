import styled, { css } from "styled-components";

export const TextAreaWrapper = styled.textarea`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.main.form};
    outline: none;
    align-self: center;
    width: ${theme.sizes.fullPercentage};
    height: 100px;
    padding: 0.8rem;
    border-radius: 12px;
    resize: none;
    margin: 1rem 0;
  `}
`;
