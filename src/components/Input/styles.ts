import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${theme.sizes.fullPercentage};
    height: ${theme.sizes.fullPercentage};
    margin: 0.5rem auto;
  `}
`;

export const InputContent = styled.input`
  ${({ theme }) => css`
    border-radius: 4px;
    border: 1px solid ${theme.colors.main.form};
    font-size: 1rem;
    width: ${theme.sizes.fullPercentage};
    padding: 1rem 1.2rem;
    outline: none;

    &:focus {
      border: 3px solid ${theme.colors.main.inputBorder};
    }

    &:not(:placeholder-shown) + label,
    &:focus + label {
      background-color: ${theme.colors.default.white};
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0 6px;
      border-right: 3px solid ${theme.colors.main.inputBorder};
      transform: translate(10px, -25px);
    }

    &:not(:focus) + label {
      color: ${theme.colors.main.inputText};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;
    color: ${theme.colors.main.form};
    font-size: ${theme.sizes.base};
    padding-left: ${theme.sizes.base};
    left: 5px;
    transition: 0.3s;
    pointer-events: none;
  `}
`;
