import styled, { css } from "styled-components";

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2rem;
    width: ${theme.sizes.fullPercentage};
    height: ${theme.sizes.fullPercentage};

    & ul {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: ${theme.sizes.halfPercentage};
      height: ${theme.sizes.fullPercentage};
    }
    & ul li {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
    }

    @media all and (max-width: 768px) {
      display: none;

      &.show {
        display: flex;
      }

      &.hide {
        display: none;
      }

      & {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        max-width: 250px;
        width: ${theme.sizes.fullPercentage};
        height: ${theme.sizes.fullPercentage};
        background-color: ${theme.colors.navbar.background};
        margin: 0 1rem 0 0;
        padding: 0.2rem;
      }

      & ul {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 5rem;
        width: ${theme.sizes.fullPercentage};
        height: ${theme.sizes.halfPercentage};
      }

      & ul li {
        justify-content: flex-start;
        align-items: center;
        width: ${theme.sizes.fullPercentage};
        height: 2rem;
        border-radius: 10px;
        transition: all 250ms ease-in-out;
      }
      & ul li a {
        padding-left: 0.5rem;
        width: ${theme.sizes.fullPercentage};
        height: ${theme.sizes.halfPercentage};
      }

      & ul li:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  `}
`;
