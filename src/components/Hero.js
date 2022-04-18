import React from 'react';
import styled from 'styled-components';
import { Button } from './styles/Button';
import bg1 from "../assets/images/bg2.jpg"
import profile from "../assets/images/profile.jpg"
import  "../assets/css/main.css"

const Hero = ({emailRef}) => {

    const goToEmail = (e) => {
        e.preventDefault();
        console.log("email");
        emailRef.current.scrollIntoView({ behavior: "smooth" });
      };

    return (
        <HeroContainer>
            <HeroBg>
                <BgImage src={bg1}/>
            </HeroBg>
            <HeroContent>
                <HeroItems>
                <div className="cc-profile-image"><a href="#"><img src={profile}/></a></div>
                    <HeroP>Ibrahim Olayioye (Frontend Engineer)</HeroP>
                    <HeroPre>
                        I create Magical User Interaction<br/>

                        I care about speed and performance <br/>

                        I care about scalability and security <br/>
                        
                        I care about results and deadlines <br/>
                    </HeroPre>
        
                 <Button primary="true" type="button" big="true" round="true" onClick={goToEmail}>HIRE ME</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    margin-top: -80px;
    position: relative;
    color: #fff;

    :before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    }

`
const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const BgImage = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover; 
opacity: 0.5;
`
const HeroContent = styled.div`
    z-index: 3;
    max-height: 100%;
    height: calc(100vh -80px);
    padding: 0rem calc((100vw - 1300px)/2);
`
const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
`
const HeroP = styled.p`
    font-size: clamp(1rem, 1.5vw, 1rem);
    margin-bottom: 2rem;
    font-weight: 400px;
    
`
const HeroPre = styled.pre`
    /* font-size: clamp(1rem, 1.5vw, 1rem); */
    color: #fff;
    margin-bottom: 2rem;
    font-weight: 400px;
    line-height: 30px;
`