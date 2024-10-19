import { Link } from 'react-router-dom';
import styled from 'styled-components';
import airplane from '../assets/img/navFooter/airplane.png';
import logo from "../assets/img/navFooter/ClipperGPTLogo.png";
import "../assets/font/pretendard.css";


function NavBar() {


  return (
    <Wrap >
      <Link className='navmenu' to={'/'}>
        <Menu>
          <img src={airplane} alt="Airplane" />
          <img src={logo} alt="Travely White" />
        </Menu>
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
  min-width: 1440px;
  background-color: #043873;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-family: Pretendard-Regular;
`;

const Pages = styled.div`
  text-align: right;
  padding-right: 20px;
  display: flex;
  flex-direction: row;
`;

const Menu = styled.div`
  color: white;
  padding-left: 20px;
  display: flex;
  align-items: center; 
  transition: transform 0.2s ease-in-out; 
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  img {
    height: 30px;
    margin-right: 5px;
  }
`;

export default NavBar;
