import * as Styled from "./styles";

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
