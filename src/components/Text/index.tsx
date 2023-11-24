import * as Styled from "./styles";

// as = propriedade que permite escolher qual tag HTML o componente será. No caso abaixo, ela pode ser
// h1, h2, h3, p ou span.
// $weight = propriedade que permite escolher o peso da fonte. No caso abaixo, ela pode ser bold,
// medium ou normal. Ela também leva esse cifrão indicando ser uma propriedade read-only. Em suma, ela não modifica o DOM.
interface ITextProps {
  content: string;
  style?: React.CSSProperties;
  as: "h1" | "h2" | "h3" | "p" | "span";
  $weight: "bold" | "medium" | "normal";
}

export const Text: React.FC<ITextProps> = ({
  content,
  style,
  as,
  $weight,
  ...rest
}) => {
  return (
    <>
      <Styled.TextContent as={as} style={style} $weight={$weight} {...rest}>
        {content}
      </Styled.TextContent>
    </>
  );
};
