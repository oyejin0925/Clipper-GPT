import styled from "styled-components";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/font/pretendard.css";
import backgroundImg from "../../assets/img/main/mainBgimg.png";
import travelyBlack from "../../assets/img/main/travelyBlack.png";
import btnGetstarted from "../../assets/img/main/btnGetstarted.png";


function Main1() {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const updateScrollWidth = () => {
            setScrollWidth(window.innerWidth - document.documentElement.clientWidth);
        };

        window.addEventListener('resize', updateScrollWidth);
        updateScrollWidth();

        return () => {
            window.removeEventListener('resize', updateScrollWidth);
        };
    }, []);

    return (
        <Container backgroundImage={backgroundImg} scrollWidth={scrollWidth}>
            <TextContainer>
                <Comment>
                    <p>설레이는 여행 계획부터</p>
                    <p>다녀온 후 여행 추억까지</p>
                </Comment>
                <Title>
                    <p><img src={travelyBlack} alt="Travely Logo" /> 에서 쉽고 빠르게</p>
                </Title>
            </TextContainer>
            <BtnContainer>
                <Link to="./editstep1">
                    <img src={btnGetstarted} alt="Get Started" />
                </Link>
            </BtnContainer>
        </Container>
    );
}

const Container = styled.div`
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: center;
    width: ${({ scrollWidth }) => `calc(100vw - ${scrollWidth}px)`};
    height: calc(100vh - 50px);
    min-width: 1440px;
`;

const TextContainer = styled.div`
    text-align: center; 
    padding-top: 20px;
    font-family: Pretendard-Bold;
    p {
        margin: 0; 
    }
`;
const Comment = styled.div`
    font-size: 50px;
    margin-top: 7%;
`;
const Title = styled.div`
    margin-top: 2%;
    font-size: 60px;
`;
const BtnContainer = styled.div`
    text-align: center;
    padding-top: 5%;
`;

export default Main1;
