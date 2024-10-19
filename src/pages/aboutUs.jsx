import styled from "styled-components";
import "../assets/font/pretendard.css";
import iconCukSheep from "../assets/img/aboutQnA/iconCukSheep.png";
import btnEmail from "../assets/img/aboutQnA/btnEmail.png";

function AboutUs() {
    return (
        <Container>
            <Title>
                <p>About Us</p>
            </Title>
            <Wrap>
                <AboutContainer>
                    <img src={iconCukSheep} alt="Cuk Sheep" />
                    <p>저희 팀은</p>
                    <p>여행을 좋아하는 가톨릭대학교</p>
                    <p>인공지능/컴퓨터정보공학부 재학 중인 학생들로</p>
                    <p>여행을 통해 좋은 추억을 남기고자 서비스를 제작하게 되었습니다.</p>
                    <br />
                    <p>Clipper-GPT의 영상 편집 AI는 GPT의 자연어처리 기술과 저희 팀의 자체 제작 
                        인공지능을 기반으로 만든 멀티모달 인공지능으로 보다 기존의 없던 높은 수준
                        의 영상 편집기술을 쉽고 편리하며 합리적인 가격에 제공하는 서비스입니다.
                        앞으로 꾸준한 업데이트를 통해 더 좋은 성능의 AI 서비스 제공을 할 예정입니다.</p>
                </AboutContainer>
                <InfoContainer>
                    <p>사업/투자 문의</p>
                    <img src={btnEmail} alt="Email Button" />
                </InfoContainer>
            </Wrap>
        </Container>
    );
}

const Container = styled.div`
    background-color: #E1E5EA;
    width: 100%; 
    font-family: Pretendard-Regular;
    font-size: 20px;
    min-width: 1440px;
`;

const Title = styled.div`
    font-family: Pretendard-Bold;
    font-size: 60px;
    p {
        margin: 0;
    }
    padding: 10px 20px 20px 20px;
    text-align: center;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 37px;
`;

const AboutContainer = styled.div`
    width: 70%;
    margin-bottom: 30px;
    padding: 20px 50px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    p {
        margin: 0;
    }
`;

const InfoContainer = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;
    margin-bottom: 20px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    font-family: Pretendard-Bold;
    font-size: 20px;
`;

export default AboutUs;
