import styled from "styled-components";
import { Link } from 'react-router-dom';
import "../../assets/font/pretendard.css";
import iconApple from "../../assets/img/main/iconApple.png";
import iconAndroid from "../../assets/img/main/iconAndroid.png";
import btnLaunching from "../../assets/img/main/btnLaunching.png";
import logoWhite from "../../assets/img/main/logoWhite.png";

function Main3() {

    return (
        <Container>
            <Title>
                <p>서비스 계획</p>
            </Title>
            <CommentContainer>
                <p>Travely는 더 나은 AI 영상 편집 서비스와 여행 SNS 서비스로 돌아올 예정입니다.</p>
                <p>2025년에 애플리케이션으로 만나요!</p>
            </CommentContainer>
            <IconContainer>
            <img src={iconApple} /><img src={iconAndroid} />
            </IconContainer>
            <BtnContainer>
                <Link to="./editstep1">
                    <img src={btnLaunching} />
                </Link>
            </BtnContainer>
            <ContactContainer>
                <Logo><img src={logoWhite} /></Logo>
                <Home><p>Home</p></Home>
                <AboutUs><p>about us</p></AboutUs>
                <QnA><p>Q&A</p></QnA>
                <Contact>
                    <p>contact</p>
                    <ContactInfo>
                        <p>서비스 관련 문의</p>
                        <p>사업 및 투자 관련 문의</p>
                    </ContactInfo>
                </Contact>
            </ContactContainer>
            <hr />
            <Footer>
                <p>@2024 Travely</p>
            </Footer>
        </Container>
    );
}

const Container = styled.div`
    background-color: #043873;
    width: 100%; height: 100vh;
    font-family: Pretendard-Regular;
    font-size: 20px;
    min-width: 1440px;
`;
const Title = styled.div`
    font-family: Pretendard-Bold;
    color: white;
    font-size: 60px;
    p {
        margin: 0;
    }
    padding: 20px; padding-top: 50px;
    text-align: center;
`;

const CommentContainer = styled.div`
    text-align: center;
    color: white; 
    font-size: 20px;
    p {
        margin: 0;
    }
`;
const IconContainer = styled.div`
    text-align: center;
    img {
    padding: 30px 20px;
    }
`;
const BtnContainer = styled.div`
    text-align: center;
`;
const ContactContainer  = styled.div`
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: space-evenly;
    font-family: Pretendard-Bold;
    padding: 30px 0;
`;
const Logo  = styled.div`
    margin: 13px 0;
`;
const Home  = styled.div``;
const AboutUs  = styled.div``;
const QnA  = styled.div``;
const Contact  = styled.div``;
const ContactInfo = styled.div`
    font-family: Pretendard-Regular;
    font-size: 15px;
`;
const Footer = styled.div`
    color: white;
    padding-left: 50px;
    font-size: 15px;
`

export default Main3;
