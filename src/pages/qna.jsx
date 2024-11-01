import styled from "styled-components";
import "../assets/font/font.css";
import btnAsk from "../assets/img/aboutQnA/btnAsk.png";

function QnA() {
    return (
        <Container>
            <Title>
                <p>무엇을 도와드릴까요?</p>
            </Title>
            <Wrap>
                <AboutContainer>
                    <p className="bold">자주 묻는 질문</p>
                    <br />
                    <p>Q. 이메일이 오지 않아요.</p>
                    <br />
                    <MobileContent>
                        <p>A. 인공지능이 편집을 하는데에 시간이 걸립니다. 조금만 기다려주세요.</p>
                        <p>만약 1일 내로 메일이 오지 않는다면</p>
                        <p className="tabbed">1. 스팸차단함을 확인해주세요.</p>
                        <p className="tabbed">2. 이메일이 오기 전까지 해당 창을 백그라운드에 켜놔주세요.</p><br />
                        <p>만약 문제가 해결되지 않았다면</p>
                        <p className="tabbed">3. 문의하기를 눌러 상담원에게 메시지를 보내주세요.</p>
                    </MobileContent>
                    <DesktopContent>
                        <p>A. 인공지능이 편집을 하는데에 시간이 걸립니다. 조금만 기다려주세요. 만약 1일 내로 메일이 오지 않는다면</p>
                        <p className="tabbed">1. 스팸차단함을 확인해주세요.</p>
                        <p className="tabbed">2. 이메일이 오기 전까지 해당 창을 백그라운드에 켜놔주세요.</p>
                        <br />
                        <p>만약 문제가 해결되지 않았다면</p>
                        <p className="tabbed">3. 문의하기를 눌러 상담원에게 메시지를 보내주세요.</p>
                    </DesktopContent>
                </AboutContainer>
                <InfoContainer>
                    <p className="bold">Q&A</p>
                    <img src={btnAsk} style={{ width: '150px', height:'auto' }} />
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
    overflow-x:hidden;
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
    padding-bottom: 46px;
    .bold {
        font-family: Pretendard-Bold;
        font-size: 30px;
    }
    @media (max-width: 768px) {
        padding-bottom: 0px;

        .bold {
            font-family: Pretendard-Bold;
            font-size: 20px;
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
    .tabbed {
        padding-left: 20px;
    }

    @media (max-width: 768px) {
        width: 250px;
        padding: 30px 20px;
        font-size: 15px;
    }

    @media (prefers-color-scheme: dark) {
        background-color: white; 
        border: 1px solid black;
        color: black;
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
    align-items: center;
    font-family: Pretendard-Bold;
    p {
        margin: 0;
    }

    @media (max-width: 768px) {
        min-width: 250px;
        width: 250px;
        padding: 10px 20px;
        align-items: center; 
        text-align: center; 
        margin-bottom: 20px;
        font-size: 15px;
    }

    @media (prefers-color-scheme: dark) {
        background-color: white;
        border: 1px solid black;
        color: black; 
    }
`;

export default QnA;
