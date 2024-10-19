import styled from "styled-components";
import "../../assets/font/pretendard.css";
import videoIcon from "../../assets/img/main/videoIcon.png";
import editIcon from "../../assets/img/main/editIcon.png";
import moneyIcon from "../../assets/img/main/moneyIcon.png";
import reportIcon from "../../assets/img/main/reportIcon.png";

function Main2() {
    return (
        <Container>
            <Title>
                <p>이런 고민, 해보신 적 있나요?</p>
            </Title>
            <BoxContainer>
                <Box className="left" style={{width: '800px'}}>
                    <img src={videoIcon} />
                    <p>사진보다는 더 생생하게 여행을 추억할 수 있는 영상을 남기고 싶어요!</p>
                </Box>
                <Box className="right">
                    <p>영상은 찍었지만 편집 방법이 어렵고 귀찮아 아직 갤러리에 그대로 있어요...</p>
                    <img src={editIcon} />
                </Box>
                <Box className="left" style={{width: '950px'}}>
                    <img src={moneyIcon} />
                    <p>여행 인플루언서를 꿈꾸지면 편집에 너무 많은 시간과 노력이 들고 수익화가 힘들어요</p>
                </Box>
                <Box className="right">
                    <p>여행 영상을 쉽고 편리하게 기록하고 공유하고 싶어요</p>
                    <img src={reportIcon} />
                </Box>
            </BoxContainer>
        </Container>
    );
}

const Container = styled.div`
    background-color: #043873;
    width: 100%; height: 100vh;
    font-family: Pretendard-Regular;
    font-size:22px;
    min-width: 1440px;
`;

const Title = styled.div`
    font-family: Pretendard-Bold;
    color: white; font-size: 50px;
    p {
        margin: 0;
    }
    padding: 30px; padding-left: 50px;
`;

const BoxContainer = styled.div`
    display: flex;
    flex-direction: column; /* 세로 정렬 */
    align-items: stretch; /* 박스가 가득 차도록 설정 */
`;

const Box = styled.div`
    display: flex;
    align-items: center;
    background-color: #D9D9D9;
    height: 15vh;
    border-radius: 10px;
    margin: 10px 50px;

    p{
        margin: 10px;
    }

    &.left {
        justify-content: flex-start;
        padding-left: 15px; 
    }

    &.right {
        justify-content: flex-end;
        margin-left: auto; /* 우측 정렬을 위해 자동 마진 추가 */
        padding: 0 10px 0 15px;
    }
`;

export default Main2;
