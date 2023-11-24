import styled, { css } from "styled-components";

interface ITextContentProps {
  as: "h1" | "h2" | "h3" | "p" | "span";
  $weight: "bold" | "medium" | "normal";
}

export const TextContent = styled.h1<ITextContentProps>`
  ${({ theme, $weight, as }) => css`
    color: ${theme.colors.default.black};
    font-size: ${as === "h1"
      ? theme.font.sizes.xLarge
      : as === "h2"
      ? theme.font.sizes.large
      : as === "h3"
      ? theme.font.sizes.medium
      : as === "p"
      ? theme.font.sizes.base
      : theme.font.sizes.small};
    font-weight: ${$weight === "bold" ? 700 : $weight === "medium" ? 500 : 400};
    width: ${theme.sizes.fullPercentage};
    height: ${theme.sizes.fullPercentage};
  `}
`;
