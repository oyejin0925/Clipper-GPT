import styled from "styled-components";
import "../assets/font/pretendard.css";
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
                    <p>A. 인공지능이 편집을 하는데에 시간이 걸립니다. 조금만 기다려주세요. 만약 1일 내로 메일이 오지 않는다면</p>
                    <p className="tabbed">1. 스팸차단함을 확인해주세요.</p>
                    <p className="tabbed">2. 이메일이 오기 전까지 해당 창을 백그라운드에 켜놔주세요.</p>
                    <br />
                    <p>만약 문제가 해결되지 않았다면</p>
                    <p className="tabbed">3. 문의하기를 눌러 상담원에게 메시지를 보내주세요.</p>
                </AboutContainer>
                <InfoContainer>
                    <p className="bold">Q&A</p>
                    <img src={btnAsk} alt="Email Button" />
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
    min-width: 1440px;
    overflow-x: hidden;
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
    padding-bottom: 46px;
    .bold {
        font-family: Pretendard-Bold;
        font-size: 30px;
    }
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
    .tabbed {
        padding-left: 20px;
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
    align-items: center;
    p {
        margin: 0;
    }
`;

export default QnA;
