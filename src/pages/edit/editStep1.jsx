import styled from "styled-components";
import { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import "../../assets/font/pretendard.css";
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
                <p>나만의 여행 영상 편집자 <b style={{fontFamily: "Pretendard-Bold"}}>Clipper-GPT로</b></p>
                <p>추억을 더 생생하게 간직해보세요.</p>
            </TitleContainer>
            <InputContainer>
                <input 
                    id="input-email"
                    type="text" 
                    placeholder="이메일을 입력해주세요." 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <img 
                    src={btnGetStarted} 
                    alt="Get Started" 
                    onClick={handleSubmit} 
                    style={{ cursor: 'pointer', marginTop: '10px', paddingTop: '10px' }}
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
    min-width: 1440px;
`;

const TitleContainer = styled.div`
    text-align: center; 
    padding-top: 7%;
    font-family: Pretendard-Regular;
    font-size: 60px;
    p {
        margin: 0; 
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
    }

    #input-email::placeholder {
        font-size: 20px;
        color: #828282;
    }
`;

export default EditStep1;
