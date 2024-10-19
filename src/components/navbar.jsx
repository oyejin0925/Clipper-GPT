import { Link } from 'react-router-dom';
import styled from 'styled-components';
import airplane from '../assets/img/navFooter/airplane.png';
import logo from "../assets/img/navFooter/ClipperGPTLogo.png";
import "../assets/font/pretendard.css";

function NavBar() {
  return (
    <Wrap>
      <Link className='navmenu' to={'/'}>
        <LogoContainer>
          <img src={airplane} alt="Airplane" />
          <img src={logo} alt="Travely White" />
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
  // min-width: 1080px;
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
    min-width: auto; // 모바일 화면에서 최소 너비 제거
    height: auto; // 높이 자동 조정
    padding: 10px; // 여백 추가
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center; // 이미지 세로 정렬

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
    justify-content: flex-end; // 오른쪽 정렬
    width: 100%; // 전체 너비 사용
  }
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

  @media (max-width: 768px) {
    padding-left: 10px;
    font-size: 14px;
  }
`;

export default NavBar;
