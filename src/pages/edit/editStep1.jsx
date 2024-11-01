import styled from "styled-components";
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import "../../assets/font/font.css";
import btnGetStarted from "../../assets/img/editStep/btnGetstarted.png";
import ProgressBar from '../../components/progressbar'; 

function EditStep1() {
    const [email, setEmail] = useState(""); 
    const navigate = useNavigate(); 

    const handleSubmit = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email) {
            if (emailRegex.test(email)) {
                navigate('../editstep2', { state: { email } }); 
            } else {
                alert("유효한 이메일 주소를 입력해주세요."); 
            }
        } else {
            alert("이메일을 입력해주세요."); 
        }
    };

    return (
        <Container>
            <TitleContainer>
                <p>나만의 여행 영상 편집자</p>
                <p><b style={{fontFamily: "yg-jalnan", fontWeight: '800'}}>Clipper-GPT</b>로</p>
                <p>추억을 더 생생하게 간직해보세요.</p>
            </TitleContainer>
            <InputContainer>
                <input 
                    id="input-email"
                    type="text" 
                    placeholder="이메일을 입력해주세요." 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ backgroundColor:'white', color: 'black' }} 
                />
                <img 
                    src={btnGetStarted} 
                    alt="Get Started" 
                    onClick={handleSubmit} 
                    style={{ cursor: 'pointer', marginTop: '10px', paddingTop: '10px', width: '190px', height:'auto' }}
                />
            </InputContainer>
            <ProgressBar currentStep={1} />
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: calc(100vh - 50px);
    background-color: #E1E5EA;
    min-width: 1080px;
    @media (min-width: 768px) {
        width: 100vw;
        min-width: 768px;
        overflow: hidden;
    }
    @media (max-width: 768px) {
        width: 100vw;
        min-width: 340px;
        overflow: hidden;
    }
    @media (prefers-color-scheme: dark) {
        background-color: #E1E5EA;
        color: black; 
        input {
            color: black;
        }
    }
`;

const TitleContainer = styled.div`
    text-align: center; 
    padding-top: 7%;
    font-family: NanumGothicBold;
    font-size: 60px;

    @media (max-width: 768px) {
        font-size: 25px;
        padding: 15% 10px 5% 10px;
    }

    p {
        margin: 0; 
    }
    @media (prefers-color-scheme: dark) {
        color: black; 
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    padding-top: 5%;
    
    #input-email {
        width: 456px; 
        height: 84px;
        font-size: 20px;
        border: 1px solid black;
        border-radius: 10px;
        padding-left: 20px;
        background-color:white;
        color: black;

        @media (max-width: 768px) { 
            width: 300px;
            max-width: 400px;
            height: 60px;
            font-size: 16px;
        }
    }

    #input-email::placeholder {
        font-size: 20px;
        color: #828282;

        @media (max-width: 768px) { 
            font-size: 16px;
    }

    @media (prefers-color-scheme: dark) {
        #input-email::placeholder {
            color: #828282;
        }
    }
`;

export default EditStep1;
