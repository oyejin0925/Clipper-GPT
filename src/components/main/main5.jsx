import styled from "styled-components";
import "../../assets/font/pretendard.css";
import iconHeart from "../../assets/img/main/iconHeart.png";
import btnComment from "../../assets/img/main/btnComment.png";

function Main3() {

    return (
        <Container>
            <SubTitle>
                <p>Travely를 사용해보셨나요?</p>
            </SubTitle>
            <Title>
                <p>더 나은 서비스를 위해 의견을 남겨주세요!</p>
            </Title>
            <CommentBoxContainer>
                <CommentBox>
                    <p>이런 저런 서비스가 추가되면 좋겠어요.</p>
                    <HeartBox>
                        <img src={iconHeart} />
                        <p>234</p>
                    </HeartBox>
                </CommentBox>
                <CommentBox>
                    <p>이런 저런 서비스가 추가되면 좋겠어요.</p>
                    <HeartBox>
                        <img src={iconHeart} />
                        <p>234</p>
                    </HeartBox>
                </CommentBox>
                <CommentBox>
                    <p>이런 저런 서비스가 추가되면 좋겠어요.</p>
                    <HeartBox>
                        <img src={iconHeart} />
                        <p>234</p>
                    </HeartBox>
                </CommentBox>
            </CommentBoxContainer>
            <BtnContainer>
                <img src={btnComment} />
            </BtnContainer>
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
const SubTitle = styled.div`
    font-family: Pretendard-Bold;
    font-size: 40px;
    p {
        margin: 0;
    }
    padding-top: 40px;
    text-align: center;
`;
const Title = styled.div`
    font-family: Pretendard-Bold;
    font-size: 60px;
    p {
        margin: 0;
    }
    padding: 0 20px 20px 20px;
    text-align: center;
`;

const CommentBoxContainer = styled.div`
    padding-left: 18%;
    padding-top: 40px;
`;
const CommentBox = styled.div`
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    width: 70%;
    display: flex;
    justify-content: space-between;
    padding: 0 50px; margin-bottom: 20px;
    align-items: center;
`;
const HeartBox = styled.div`
    margin-top: 10px; margin-bottom: 3px;
    p {
    margin: 0;
    }
`;
const BtnContainer = styled.div`
    text-align: center;
`;

export default Main3;
