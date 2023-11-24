import styled, { css, keyframes } from "styled-components";

const nav = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const NavWrapper = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.navbar.background};
    width: ${theme.sizes.fullPercentage};
    min-height: ${theme.sizes.navbar.height};
    height: ${theme.sizes.fullPercentage};
    max-height: max-content;
  `}
`;

export const ResponsiveNav = styled.div`
  ${({ theme }) => css`
    width: ${theme.sizes.fullPercentage};
    height: ${theme.sizes.fullPercentage};

    @media all and (max-width: 768px) {
      position: fixed;
      display: flex;
      justify-content: flex-start;
      background-color: ${theme.colors.navbar.modalBg};
      z-index: 999;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      &.show {
        visibility: visible;
        animation: ${nav} 250ms ease-in-out;
      }

      &.hide {
        visibility: hidden;
        animation: ${nav} 250ms ease-in-out reverse;
      }
    }
  `}
`;

export const IconWrapper = styled.section`
  ${({ theme }) => css`
    display: none;

    @media all and (max-width: 768px) {
      & {
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${theme.sizes.fullPercentage};
        height: fit-content;
      }
      & button {
        background-color: transparent;
        border: none;
        height: 3.5rem;
        width: 3.5rem;
        border-radius: 50%;
        cursor: pointer;
        transition: all 250ms ease-in-out;
      }
      & button:hover {
        background-color: ${theme.colors.navbar.openNavHover};
      }
    }
  `}
`;
