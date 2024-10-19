import styled from "styled-components";
import "../../assets/font/pretendard.css";
// import iconLeftVector from "../../assets/img/main/iconLeftVector.png";
import icon1 from "../../assets/img/main/iconMain31.png";
import icon2 from "../../assets/img/main/iconMain32.png";
import icon3 from "../../assets/img/main/iconMain33.png";
import icon4 from "../../assets/img/main/iconMain34.png";

function Main3() {

    return (
        <Container>
            <Title>
                <p>하지만 Travely와 함께라면 문제 없어요</p>
            </Title>
            <BoxContainer>
                <Box className="white">
                    <img src={icon1} style={{paddingBottom: '12px'}} />
                    <p className="bold">AI 영상 완전 자동 편집</p>
                    <hr />
                    <p className="bold">찍은 영상을 업로드하면 끝!</p>
                    <p className="bold">나머지는 AI가 해줄거에요.</p>
                    <p>컷편집, 자막, 장소 효과 등 기능을 제공합니다.</p>
                    <p>사용자의 발화와 스토리라인, 영상 속 이미지를 분석하여</p>
                    <p>높은 퀄리티의 영상 편집을 만나보세요!</p>
                </Box>
                <Box className="blue">
                    <img src={icon2} style={{paddingBottom: '25px'}} />
                    <p className="bold">여행기록</p>
                    <hr />
                    <p>나만의 <b className="bold">여행기록장</b>으로도</p>
                    <p><b className="bold">아주 친한 친구들</b>만 볼 수 있는 여행 기록장으로도</p>
                    <p>나의 여행을 다른 사람에게 <b className="bold">공유해서 수익을</b> 창출할 수도 있어요!</p>
                </Box>
                <Box className="white">
                    <img src={icon3} style={{paddingBottom: '22.5px'}} />
                    <p className="bold">나와 비슷한 실사용자 솔직 리뷰</p>
                    <hr />
                    <p>실제 방문한 사용자들의 <b className="bold">광고 없는 후기</b>를 알려드려요. 더 자세한 후기는</p>
                    <p>숏츠로도 확인 가능해요!</p>
                    <p>나와 비슷한 나이, 성별, 여행 성향을 가진 후기를 최우선으로 알려드릴게요!</p>
                </Box>
                <Box className="blue">
                    <img src={icon4} />
                    <p className="bold">여행정보&계획 툴</p>
                    <hr />
                    <p>다른 사용자들의 영상을 보고 <b className="bold">일정 따라하기</b> 기능을 통해 내 입맛대로 내 일정으로 옮겨요.</p>
                    <p>여러 영상들을 보며 좋아요만 눌러놓으면 AI가 알아서 사용자가 <b className="bold">좋아할만한 장소와 최적경로</b>를 설정해요.</p>
                </Box>
            </BoxContainer>
            <Comment>
                <p>현재 웹사이트는 데모버전으로 AI 영상 완전자동 편집 기능만 제공합니다.</p>
            </Comment>
        </Container>
    );
}

const Container = styled.div`
    background-color: #E1E5EA;
    width: 100%; height: 100vh;
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
    padding: 20px; padding-bottom: 10px;
    text-align: center;
`;

const BoxContainer = styled.div`
    padding-left: 20px;
    display:flex;
    justify-content: column;
    .white {
        background-color: white;
        hr {
            color: black;
        }
    }
    .blue {
        background-color: #4F9CF9;
        hr {
            color: white;
        }
    }
    p {
        margin: 0;
    }

`;
const Box = styled.div`
    width: 450px;
    padding: 65px 20px; margin: 10px;
    border-radius: 10px;
    box-shadow : 10px 10px 20px 5px LightGray;
    blur-radius: 100px;
    .bold {
        font-family: Pretendard-Bold;
    }
`;
const Comment = styled.div`
    text-align: center;
`;

export default Main3;
