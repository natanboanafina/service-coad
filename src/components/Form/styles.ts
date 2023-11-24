import styled, { css } from "styled-components";

export const FormComponent = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    height: 70%;
    box-shadow: 0 2px 5px ${theme.colors.main.formShadow};
    border-radius: 3px;
    padding: 1rem 2rem;
    transition: all 0.5s ease-in-out;

    @media all and (min-width: 1200px) {
      width: 60%;
    }
    @media all and (max-width: 768px) {
      width: ${theme.sizes.fullPercentage};
    }
  `}
`;
