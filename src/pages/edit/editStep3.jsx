import styled from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom'; 
import { useState } from 'react'; 
import "../../assets/font/font.css";
import btnStartEdit from "../../assets/img/editStep/btnStartEdit.png";
import ProgressBar from '../../components/progressbar'; 
import btnGoBack from "../../assets/img/editStep/btnGoBack.png";

function EditStep3() {
    const baseURL = "http://127.0.0.1:8000"

    const location = useLocation();
    const navigate = useNavigate(); 

    const videos = location.state?.files;
    const thumbnails = location.state?.thumbnails;
    const email = location.state?.email; 

    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (title.trim() === "") {
            alert("브이로그의 제목을 입력해주세요.");
            return;
        }
    
        const formData = new FormData();
        formData.append("email", email);
        formData.append("title", title);
    
        videos.forEach((video, index) => {
            const renamedFile = new File([video.file], `${index}.mp4`, { type: video.file.type });
            formData.append("videos", renamedFile);
        });
    
        try {
            const response = await fetch(baseURL + '/edit/upload', {
                method: 'POST',
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            alert(result.message);
    
            navigate('../editstep4', { state: { title, email, thumbnails } });
        } catch (error) {
            console.error("Error during fetch:", error);
            alert("서버에 오류가 발생했습니다. 나중에 다시 시도해주세요.");
        }
    };

    const thumbnailUrl = thumbnails && thumbnails.length > 0 ? thumbnails[0] : null;

    return (
        <Container>
            <GoBack onClick={() => navigate('/editstep2')} className="goback-button">
                <img src={btnGoBack} alt="Go Back" />
            </GoBack>
            <ThumbnailContainer>
                {thumbnailUrl ? (
                    <img style={{maxHeight: '250px', maxWidth: '300px'}} src={thumbnailUrl} alt="썸네일" />
                ) : (
                    <p>썸네일이 없습니다.</p>
                )}
            </ThumbnailContainer>
            <InputContainer>
            <form onSubmit={handleSubmit}>
                <input 
                    id="input-title"
                    type="text" 
                    placeholder="브이로그의 제목을 써주세요." 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button 
                    type="submit" 
                    style={{ cursor: 'pointer', marginTop: '30px', paddingTop: '10px', width: '190px', height: 'auto', border: 'none', background: 'none' }}
                >
                    <img 
                        src={btnStartEdit} 
                        alt="Get Started" 
                        style={{ width: '100%' }} 
                    />
                </button>
            </form>

            </InputContainer>
            <ProgressBar currentStep={3} />
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 50px);
    background-color: #E1E5EA;
    display: flex; 
    flex-direction: column;
    align-items: center;
    font-family: Pretendard-Regular;
    overflow-hidden;

    @media (max-width: 768px) {
        width: 100vw;
    }
        
    @media (prefers-color-scheme: dark) {
        color: black; 
    }
`;

const GoBack = styled.div`
    cursor: pointer;
    align-self: flex-start;
    margin-top: 20px; 
    margin-left: 23px;

    @media (min-width: 768px) {
        display: none;
    }
`;

const ThumbnailContainer = styled.div`
    text-align: center;
    width: 270px; 
    max-height: 150px; 
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-top: 5%;
    overflow: hidden;

    @media (max-width: 768px) {
        max-width: 300px;
        max-height: 150px;
        // margin-top: 8px;
    }

    img {
        max-width: 300px;
        max-height: 250px;
        object-fit: cover;
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

    @media (prefers-color-scheme: dark) {
        #input-title {
            background-color: white;
            color: black;
        }
        #input-title::placeholder {
            color: #828282;
        }
    }
`;

export default EditStep3;
