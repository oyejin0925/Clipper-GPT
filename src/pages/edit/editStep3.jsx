import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom'; 
import { useState } from 'react'; 
import "../../assets/font/pretendard.css";
import btnStartEdit from "../../assets/img/editStep/btnStartEdit.png";
import ProgressBar from '../../components/progressbar'; 
import btnGoBack from "../../assets/img/editStep/btnGoBack.png";


function EditStep3() {
    const location = useLocation();
    const navigate = useNavigate(); 

    const files = location.state?.files;
    const thumbnails = location.state?.thumbnails;
    const mail = location.state?.email; 
    console.log("받아온 비디오 정보:", files);
    console.log("받아온 이메일:", mail);

    const [title, setTitle] = useState("");

    const handleSubmit = async () => {
        if (title.trim() === "") {
            alert("브이로그의 제목을 입력해주세요.");
            return;
        }
    
        const formData = new FormData();
        formData.append('mail', mail); 
        formData.append('title', title);
    
        if (files && files.length > 0) {
            files.forEach((file, index) => {
                formData.append(`files[${index}]`, file);
            });
        }
    
        try {
            const response = await fetch('http://34.22.106.77', { 
                method: 'POST',
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            console.log(result);
    
            navigate('../editstep4', { state: { files, thumbnails, title, mail } });
        } catch (error) {
            console.error("Error during fetch:", error);
            alert("서버에 오류가 발생했습니다. 나중에 다시 시도해주세요.");
        }
    };

    // 비디오 썸네일 배열을 매핑하여 첫 번째 썸네일 URL을 가져옴
    const thumbnailUrl = thumbnails && thumbnails.length > 0 ? thumbnails[0] : null;

    return (
        <Container>
            <GoBack onClick={() => navigate('/editstep2')} className="goback-button">
                <img src={btnGoBack} alt="Go Back" />
            </GoBack>
            <ThumbnailContainer>
                {thumbnailUrl ? (
                    <img src={thumbnailUrl} alt="썸네일" style={{ width: '100%', height: 'auto' }} />
                ) : (
                    <p>썸네일이 없습니다.</p>
                )}
            </ThumbnailContainer>
            <InputContainer>
                <input 
                    id="input-title"
                    type="text" 
                    placeholder="브이로그의 제목을 써주세요." 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <img 
                    src={btnStartEdit} 
                    alt="Get Started" 
                    onClick={handleSubmit} 
                    style={{ cursor: 'pointer', marginTop: '30px', paddingTop: '10px' }}
                />
            </InputContainer>
            <ProgressBar currentStep={3} />
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

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    padding-top: 5%;

    #input-title {
        width: 456px; 
        height: 84px;
        font-size: 20px;
        border: 1px solid black;
        border-radius: 10px;
        padding-left: 20px;

        @media (max-width: 768px) {
            width: 300px;
            height: 60px;
            font-size: 16px;
        }
    }

    #input-title::placeholder {
        font-size: 20px;
        color: #828282;

        @media (max-width: 768px) {
            font-size: 16px;
        }
    }
`;

export default EditStep3;
