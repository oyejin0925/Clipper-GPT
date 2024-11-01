import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom'; 
import "../../assets/font/font.css";
import btnGoHome from "../../assets/img/editStep/btnGoHome.png";
import ProgressBar from '../../components/progressbar'; 
import btnGoBack from "../../assets/img/editStep/btnGoBack.png";

function EditStep4() {
    const location = useLocation();
    const navigate = useNavigate(); 

    const files = location.state?.files;
    const thumbnails = location.state?.thumbnails;
    const title = location.state?.title;
    console.log("받아온 비디오 정보:", files);
    console.log("받아온 제목:", title);

    const handleSubmit = () => {
        navigate('../');
    };

    const thumbnailUrl = thumbnails && thumbnails.length > 0 ? thumbnails[0] : null;

    return (
        <Container>
            <GoBack onClick={() => navigate('/editstep3')} className="goback-button">
                <img src={btnGoBack} alt="Go Back" />
            </GoBack>
            <ThumbnailContainer>
                {thumbnailUrl ? (
                    <img src={thumbnailUrl} alt="썸네일" style={{ width: '100%', height: 'auto' }} />
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
                    style={{ cursor: 'pointer', marginTop: '10px', paddingTop: '10px',  width: '190px', height:'auto'  }}
                />
            </BtnContainer>
            <ProgressBar currentStep={4} />
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 50px);
    background-color: #E1E5EA;
    // min-width: 1440px;
    display: flex; 
    flex-direction: column;
    align-items: center;
    font-family: Pretendard-Regular;


    @media (max-width: 768px) {
        width: 100vw;
    }
    @media (prefers-color-scheme: dark) {
        color: #828282; 
    }
`;
const GoBack = styled.div`
    cursor: pointer;
    align-self: flex-start;
    margin-top: 20px; margin-left: 23px;

    @media (min-width: 768px) {
        display: none;
    }
`;
const ThumbnailContainer = styled.div`
    text-align: center;
    width: 270px; 
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-top: 5%;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 300px;
        height: auto;
        margin-top: 10%;
    }
`;

const CommentContainer = styled.div`
    text-align: center;
    padding: 35px 0px;
    p {
        margin: 0;
    }
    color: #828282;

    @media (max-width: 768px) {
        padding: 20px 0;
        p {
            font-size: 14px;
        }
    }
    @media (prefers-color-scheme: dark) {
        color: #828282; 
    }
`;

const BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
        img {
            width: 80%;
            max-width: 200px;
        }
    }
`;

export default EditStep4;
