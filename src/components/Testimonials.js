import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "../assets/css/slider.css"
import styled from 'styled-components';
import { testimonialData } from '../data/StatsData';
import { Heading } from './styles/GlobalStyles';

const Testimonials = () => {
  return (
  <div style={{backgroundColor: "#f1f1fc", padding:"20px 0"}}>
    <Heading>SOME PEOPLE I HAVE WORKED WITH</Heading>
    <Carousel
    autoPlay
    infiniteLoop={true}
    axis="vertical"
    interval={12000}
    transitionTime={1000}
    useKeyboardArrows
    showStatus={false}
    showThumbs={false}
    >
      {testimonialData.map((testimonial) => (
        <TestimonialSlider>
        <TestimonialContainer>
          <TestimonialP1>{testimonial.content}</TestimonialP1>
            <TestimonialP2 className='my-5'>{testimonial.person}</TestimonialP2>
          </TestimonialContainer>
          </TestimonialSlider>
      ))}
      
    </Carousel>
    </div>

  );
};

export default Testimonials;

const TestimonialSlider = styled.div`
  min-height: 400px;
`
const TestimonialContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`
const TestimonialP1 = styled.h6`
  font-size: clamp(1rem, 2vw, 1rem);
    color: #000;
    font-weight: 500;
    line-height: 2;
`
const TestimonialP2 = styled.p`
  font-size: clamp(0.8rem, 1.5vw, 0.8rem);
    color: #f26a2e;
    font-weight: 600;
`