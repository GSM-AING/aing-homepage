import styled from "styled-components";
import logo from "../assets/logo.png";
export const Header = () => {
  return (
    <>
      <Appbar>
        <img src={logo} width={40} height={50}></img>
        <Button>
          <Menu>포트폴리오</Menu>
          <Menu>멤버</Menu>
          <Menu>Q&A</Menu>
        </Button>
      </Appbar>
    </>
  );
};

const Appbar = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  margin: 25px;
  @media (min-width: 1200px) {
    margin-left: 366px;
    width: 1090px;
  }
  text-align: center;
  align-items: center;
`;

const Menu = styled.div`
  @media (max-width: 800px) {
    display: none;
    visibility: hidden;
  }
  color: white;
  font-weight: bold;
  font-size: large;
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
