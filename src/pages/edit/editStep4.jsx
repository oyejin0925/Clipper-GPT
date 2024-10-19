import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom'; 
import "../../assets/font/pretendard.css";
import btnGoHome from "../../assets/img/editStep/btnGoHome.png";
import ProgressBar from '../../components/progressbar'; 

function EditStep4() {
    const location = useLocation();
    const navigate = useNavigate(); 

    const files = location.state?.files;
    const thumbnails = location.state?.thumbnails; // 썸네일 정보 추가
    const title = location.state?.title;
    console.log("받아온 비디오 정보:", files);
    console.log("받아온 제목:", title);

    const handleSubmit = () => {
        navigate('../');
    };

    // 비디오 썸네일 배열을 매핑하여 첫 번째 썸네일 URL을 가져옴
    const thumbnailUrl = thumbnails && thumbnails.length > 0 ? thumbnails[0] : null;

    return (
        <Container>
            <ThumbnailContainer>
                {thumbnailUrl ? (
                    <img src={thumbnailUrl} alt="썸네일" style={{ width: '100%', maxHeight: 'auto' }} />
                ) : (
                    <p>썸네일이 없습니다.</p>
                )}
            </ThumbnailContainer>
            <CommentContainer>
                <p>{`'${title || "제목이 없습니다."}'이 편집 중입니다.`}</p> 
                <p>조금만 기다려주시면 이메일로 전송해드리겠습니다</p>
                <p>Travely 서비스를 사용해주셔서 감사합니다.</p>
            </CommentContainer>
            <BtnContainer>
                <img 
                    src={btnGoHome} 
                    alt="Go Home" 
                    onClick={handleSubmit} 
                    style={{ cursor: 'pointer', marginTop: '10px', paddingTop: '10px' }}
                />
            </BtnContainer>
            <ProgressBar currentStep={4} />
        </Container>
    );
}

const Container = styled.div`
    min-width: 1440px;
    width: 100vw;
    height: calc(100vh - 50px);
    background-color: #E1E5EA;
    font-family: Pretendard-Regular;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ThumbnailContainer = styled.div`
    text-align: center;
    width: 270px; height: 200px;
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-top: 5%;
`;

const CommentContainer = styled.div`
    text-align: center;
    padding: 35px 0px;
    p {
        margin: 0;
    }
    color: #828282;
`;

const BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export default EditStep4;
