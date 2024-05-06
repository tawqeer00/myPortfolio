// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// //import arrow1 from "../assets/img/arrow1.svg";
// //import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

// export const Skills = () => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
//     <section className="skill" id="skills">
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                     <div className="skill-bx wow zoomIn">
//                         <h2>Skills</h2>
//                         <p>Here are some of my skills on which I have been working on for the past 2 years.</p>
//                         <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
//                             <div className="item">
//                                 <img src={meter1} alt=""  />
//                                 <h5>Web Development</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter2} alt="" />
//                                 <h5>Brand Identity</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter3} alt="" />
//                                 <h5>Logo Design</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter1} alt="" />
//                                 <h5>Web Development</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter1} alt="" />
//                                 <h5>Web Development</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter1} alt="" />
//                                 <h5>Web Development</h5>
//                             </div>
//                         </Carousel>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <img className="background-image-left" src={colorSharp} alt="" />
//     </section>
//   )
// }
import React from 'react'
import styled from 'styled-components'
import { skills } from './data/constants'

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(140, 60, 185, 0) 70.83%);
position: relative;

z-index: 1;
align-items: center;


`

const Wrapper = styled.div`

position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
margin-bottom:50px;

@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Title = styled.div`
font-size: 50px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`

    font-size:20px;
    text-align: center;
    max-width: 800px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
      font-size:16px;
      max-width: 400px;
      
        
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
  
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const SkillTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`

const SkillItem = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


export const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working on for the past 2 years.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

