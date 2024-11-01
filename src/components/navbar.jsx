import { Link } from 'react-router-dom';
import styled from 'styled-components';
import airplane from '../assets/img/navFooter/airplane.png';
import logo from "../assets/img/navFooter/ClipperGPTLogo.png";
import "../assets/font/font.css";

function NavBar() {
  return (
    <Wrap>
      <Link className='navmenu' to={'/'}>
        <LogoContainer>
          <img src={airplane} style={{width: 'auto', height: '20px'}} alt="Airplane" />
          <img src={logo} style={{width: 'auto', height: '20px'}} alt="Travely White" />
        </LogoContainer>
      </Link>
      <Pages>
        <Link className='navmenu' to={'/'}>
          <Menu>Home</Menu>
        </Link>
        <Link className='navmenu' to={'/aboutus'}>
          <Menu>About Us</Menu>
        </Link>
        <Link className='navmenu' to={'/qna'}>
          <Menu>Q&A</Menu>
        </Link>
      </Pages>
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: #043873;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-family: Pretendard-Regular;

  @media (min-width: 768px) {
      width: 100vw;
      min-width: 768px;
      overflow: hidden;
  }

  @media (max-width: 768px) {
    min-width: auto; 
    height: auto; 
    padding: 10px; 
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 30px;
    margin-right: 5px;
  }
`;

const Pages = styled.div`
  text-align: right;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
  

  @media (max-width: 768px) {
    padding-right: 10px;
    justify-content: flex-end; 
    width: 100%;
  }
`;

const Menu = styled.div`
  color: white;
  padding-left: 20px;
  display: flex;
  align-items: center; 
  transition: transform 0.2s ease-in-out; 
  cursor: pointer;
  font-family: Pretendard-Regular;
  
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    padding-left: 10px;
    font-size: 14px;
  }
`;

export default NavBar;
