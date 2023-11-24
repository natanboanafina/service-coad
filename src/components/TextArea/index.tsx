import * as Styled from "./styles";
import { forwardRef } from "react";

interface ITextAreaProps {
  style?: React.CSSProperties;
}
export const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>(
  ({ style, ...rest }, ref) => {
    return (
      <>
        <Styled.TextAreaWrapper style={style} {...rest} ref={ref} />
      </>
    );
  }
);
