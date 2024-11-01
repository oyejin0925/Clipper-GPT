import styled from 'styled-components';
import iconCheck from "../assets/img/navFooter/iconCheck.png"; // 체크 아이콘 이미지 가져오기

const ProgressBar = ({ currentStep }) => {
    return (
        <ProgressContainer>
            <Step isActive={currentStep >= 1}>
                {currentStep >= 1 && <CheckMark src={iconCheck} alt="Check" />}
            </Step>
            <Line isActive={currentStep >= 2} />
            <Step isActive={currentStep >= 2}>
                {currentStep >= 2 && <CheckMark src={iconCheck} alt="Check" />}
            </Step>
            <Line isActive={currentStep >= 3} />
            <Step isActive={currentStep >= 3}>
                {currentStep >= 3 && <CheckMark src={iconCheck} alt="Check" />}
            </Step>
            <Line isActive={currentStep >= 4} />
            <Step isActive={currentStep >= 4}>
                {currentStep >= 4 && <CheckMark src={iconCheck} alt="Check" />}
            </Step>
        </ProgressContainer>
    );
};

const ProgressContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 20px;
    left: 50%; 
    transform: translateX(-50%);
    padding: 20px;
    background-color: transparent; 
    width: 60%;
`;

const Step = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: ${({ isActive }) => (isActive ? '#4F9CF9' : '#DADADA')};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const Line = styled.div`
    flex-grow: 1;
    height: 8px;
    border-top: 1px solid black; 
    border-bottom: 1px solid black;
    background-color: ${({ isActive }) => (isActive ? '#4F9CF9' : '#DADADA')};
`;

const CheckMark = styled.img`
    width: 20px; 
    height: 20px; 
`;

export default ProgressBar;
