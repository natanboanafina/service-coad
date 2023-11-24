import styled, { css } from "styled-components";

export const InputRadioWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: ${theme.sizes.fullPercentage};
    height: ${theme.sizes.fullPercentage};
    margin: 0.5rem auto;

    & label {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 20%;
      text-align: left;
      font-size: 1.2rem;
      margin-right: 1rem;
      font-weight: 500;
      color: ${theme.colors.main.form};
    }

    & input {
      align-self: center;
    }
  `}
`;
