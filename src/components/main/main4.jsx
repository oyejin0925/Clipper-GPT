import styled from "styled-components";
import { Link } from 'react-router-dom';
import "../../assets/font/pretendard.css";
import tmpVideo from "../../assets/img/main/tmpVideo.png";
import btnTryEditing from "../../assets/img/main/btnTryEditing.png";

function Main3() {

    return (
        <Container>
            <Title>
                <p>그래서, 어떻게 만드냐고요?</p>
            </Title>
            <CommentContainer>
                <p>편집하고 싶은 여행 영상을 업로드하고 제목만 입력해주세요. 영상 제작이 완료되면 이메일로 보내드릴게요.</p>
            </CommentContainer>
            <VideoContainer>
                <img src={tmpVideo} />
            </VideoContainer>
            <BtnContainer>
                <Link to="./editstep1">
                    <img src={btnTryEditing} />
                </Link>
            </BtnContainer>
        </Container>
    );
}

const Container = styled.div`
    background-color: #043873;
    width: 100%; height: 100vh;
    font-family: Pretendard-Regular;
    font-size: 11px;
    min-width: 1440px;
`;
const Title = styled.div`
    font-family: Pretendard-Bold;
    color: white;
    font-size: 60px;
    p {
        margin: 0;
    }
    padding: 20px;
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
const VideoContainer = styled.div`
    text-align: center;
    img {
        width: 650px; height: 400px;
    }
    padding: 20px 0;
`;
const BtnContainer = styled.div`
    text-align: center;
`;

export default Main3;
