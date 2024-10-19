import styled from "styled-components";
import { useEffect, useState, useRef } from 'react';
import "../assets/font/pretendard.css";
import iconDown from "../assets/img/main/iconDown.png";

import Main1 from "../components/main/main1";
import Main2 from "../components/main/main2";
import Main3 from "../components/main/main3";
import Main4 from "../components/main/main4";
import Main5 from "../components/main/main5";
import Main6 from "../components/main/main6";

function Main() {
    const [scrollWidth, setScrollWidth] = useState(0);
    const [currentSection, setCurrentSection] = useState(0);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const updateScrollWidth = () => {
            setScrollWidth(window.innerWidth - document.documentElement.clientWidth);
        };

        window.addEventListener('resize', updateScrollWidth);
        updateScrollWidth();

        return () => {
            window.removeEventListener('resize', updateScrollWidth);
        };
    }, []);

    const handleGoDownClick = () => {
        if (currentSection < sectionRefs.current.length - 1) {
            const nextSection = currentSection + 1;
            sectionRefs.current[nextSection].scrollIntoView({ behavior: 'smooth' });
            setCurrentSection(nextSection);
        }
    };

    return (
        <Container scrollWidth={scrollWidth}>
            <Section ref={el => sectionRefs.current[0] = el}><Main1 /></Section>
            <Section ref={el => sectionRefs.current[1] = el}><Main2 /></Section>
            <Section ref={el => sectionRefs.current[2] = el}><Main3 /></Section>
            <Section ref={el => sectionRefs.current[3] = el}><Main4 /></Section>
            <Section ref={el => sectionRefs.current[4] = el}><Main5 /></Section>
            <Section ref={el => sectionRefs.current[5] = el}><Main6 /></Section>
            <GoDown onClick={handleGoDownClick}>
                <img src={iconDown} alt="Scroll Down" />
            </GoDown>
        </Container>
    );
}

const Container = styled.div`
    width: ${({ scrollWidth }) => `calc(100vw - ${scrollWidth}px)`};
`;

const Section = styled.div`
`;

const GoDown = styled.div`
    position: fixed;
    bottom: 0px; 
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    cursor: pointer;
`;

export default Main;
