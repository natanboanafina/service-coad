import styled, { css } from "styled-components";

export const HomeWrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${theme.sizes.fullPercentage};
    height: ${theme.sizes.fullPercentage};
    padding-top: 1rem;
    padding-bottom: 1rem;
  `}
`;
