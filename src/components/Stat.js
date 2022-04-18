import React from 'react';
import styled from 'styled-components';
import { Heading } from './styles/GlobalStyles';

const Stat = ({statsData, title}) => {

   
    return (
        <StatContainer>
            <Heading>{title}</Heading>
            <Wrapper>
                {statsData.map((item,key)=>{
                    return(
                        <StatBox key={key}>
                            <Icon style={{color: item.color}}>{item.icon}</Icon>
                            <Title>{item.title}</Title>
                        </StatBox>
                    )
                })}
            </Wrapper>
        </StatContainer>
    );
};

export default Stat;

const StatContainer = styled.div`
    background: #f1f1fc;
    color: #000;
    padding: 1rem calc((100vw - 1300px) / 2);
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 10px;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(6, 1fr);
        padding: 0 1rem;
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: repeat(4, 1fr);
    }
`
const StatBox = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem 0; 
`
const Icon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;

`
const Title = styled.div`
    font-size: clamp(0.8rem, 1.5vw, 1rem);
    color: #000;
    font-weight: 400
    /* margin-bottom: 0.5rem; */
`