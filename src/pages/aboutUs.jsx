import styled from "styled-components";
import "../assets/font/font.css";
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
                    <MobileContent>
                        <p>저희 Travley는</p>
                        <p>여행을 좋아하는 가톨릭대학교</p>
                        <p>인공지능 / 컴퓨터정보공학부에 재학 중인 학생들로</p>
                        <p>여행을 통해 좋은 추억을 남기고자</p>
                        <p>서비스를 제작하게 되었습니다.</p>
                    </MobileContent>
                    <DesktopContent>
                        <p>저희 팀은</p>
                        <p>여행을 좋아하는 가톨릭대학교</p>
                        <p>인공지능/컴퓨터정보공학부 재학 중인 학생들로</p>
                        <p>여행을 통해 좋은 추억을 남기고자 서비스를 제작하게 되었습니다.</p><br />
                        <p>Clipper-GPT의 영상 편집 AI는 GPT의 자연어처리 기술과 저희 팀의 자체 제작 
                        인공지능을 기반으로 만든 멀티모달 인공지능으로 보다 기존의 없던 높은 수준
                        의 영상 편집기술을 쉽고 편리하며 합리적인 가격에 제공하는 서비스입니다.
                        앞으로 꾸준한 업데이트를 통해 더 좋은 성능의 AI 서비스 제공을 할 예정입니다.</p>
                    </DesktopContent>
                </AboutContainer>
                <InfoContainer>
                    <p>사업/투자 문의</p>
                    <img src={btnEmail} style={{ width: '150px', height:'auto' }} />
                </InfoContainer>
            </Wrap>
        </Container>
    );
}

const Container = styled.div`
    background-color: #E1E5EA;
    width: 100vw; 
    font-family: Pretendard-Regular;
    font-size: 20px;
    height: calc(100vh - 50px);
-
    @media (min-width: 768px) {
        width: 100vw;
        min-width: 340px;
        overflow: hidden;
        font-size: 15px;
    }

    @media (prefers-color-scheme: dark) {
        background-color: #E1E5EA; 
        color: black; 
    }
`;

const Title = styled.div`
    font-family: yg-jalnan;
    font-size: 60px;
    p {
        margin: 0;
    }
    padding: 10px 20px 20px 20px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 23px;
    }
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 37px;

    @media (max-width: 768px) {
        padding-bottom: 20px;
            .bold {
                font-family: yg-jalnan;
                font-size: 23px;
            }
    }
`;

const AboutContainer = styled.div`
    width: 860px;
    margin-bottom: 30px;
    padding: 20px 50px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    p {
        margin: 0;
    }

    @media (max-width: 768px) {
        width: 250px;
        padding: 30px 20px;
        text-align: center;
        font-size: 15px;
    }

    @media (prefers-color-scheme: dark) {
        background-color: white; /* 배경색 유지 */
        border: 1px solid black; /* 테두리 색상 유지 */
        color: black; /* 텍스트 색상 유지 */
    }
`;

const MobileContent = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`;

const DesktopContent = styled.div`
    display: block;

    @media (max-width: 768px) {
        display: none;
    }
`;

const InfoContainer = styled.div`
    width: 860px;
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;
    margin-bottom: 20px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    font-family: Pretendard-Bold;
    font-size: 23px;

    @media (max-width: 768px) {
        min-width: 250px;
        width: 250px;
        padding: 10px 20px;
        align-items: center; 
        text-align: center; 
        font-size: 15px;
    }

    @media (prefers-color-scheme: dark) {
        background-color: white; /* 배경색 유지 */
        border: 1px solid black; /* 테두리 색상 유지 */
        color: black; /* 텍스트 색상 유지 */
    }
`;

export default AboutUs;
