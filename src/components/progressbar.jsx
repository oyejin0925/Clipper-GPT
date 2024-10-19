import styled from 'styled-components';

const ProgressBar = ({ currentStep }) => {
    return (
        <ProgressContainer>
            <Step isActive={currentStep >= 1}>
                {currentStep >= 1 && <CheckMark>✔</CheckMark>}
            </Step>
            <Line isActive={currentStep >= 2} />
            <Step isActive={currentStep >= 2}>
                {currentStep >= 2 && <CheckMark>✔</CheckMark>}
            </Step>
            <Line isActive={currentStep >= 3} />
            <Step isActive={currentStep >= 3}>
                {currentStep >= 3 && <CheckMark>✔</CheckMark>}
            </Step>
            <Line isActive={currentStep >= 4} />
            <Step isActive={currentStep >= 4}>
                {currentStep >= 4 && <CheckMark>✔</CheckMark>}
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
    left: 50%; /* 수평 중앙 정렬 */
    transform: translateX(-50%); /* 중앙 정렬을 위한 변환 */
    padding: 20px;
    background-color: #E1E5EA; 
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
    border-top: 1px solid black; border-bottom: 1px solid black;
    background-color: ${({ isActive }) => (isActive ? '#4F9CF9' : '#DADADA')};
`;

const CheckMark = styled.span`
    color: black;
`;

export default ProgressBar;
