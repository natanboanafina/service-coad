import styled, { css } from "styled-components";

export const SearchbarWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${theme.sizes.fullPercentage};
    height: ${theme.sizes.fullPercentage};

    & input {
      max-width: 550px;
      width: ${theme.sizes.fullPercentage};
      padding: 5px;
      height: 3rem;
      border-radius: 5px;
      outline: none;
    }
  `}
`;
