import { Nav } from "./components/nav";
import Menu from "../../assets/nav/Menu";
import * as Styled from "./styles";
import { useState, useEffect } from "react";

export const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    document.body.addEventListener(
      "click",
      () => {
        setShowModal(false);
      },
      { capture: true }
    );
  }, []);

  return (
    <>
      <Styled.NavWrapper>
        <Styled.IconWrapper>
          <button type='button' onClick={() => setShowModal(!showModal)}>
            <Menu />
          </button>
        </Styled.IconWrapper>
        {showModal ? (
          <Styled.ResponsiveNav className={showModal ? "show" : "hide"}>
            <Nav className={showModal ? "show" : "hide"} />
          </Styled.ResponsiveNav>
        ) : (
          <Nav />
        )}
      </Styled.NavWrapper>
    </>
  );
};
