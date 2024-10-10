import Typewriter from "typewriter-effect";
import { Container, Row, Col } from "react-bootstrap";
import tawqeer from "../assets/img/tawqeer.jpeg";
import { Bio } from '../components/data/constants';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Tawqeer,A`}
                <Typewriter
                options={{
                  strings: [
                    "Programmer!",
                    "Full Stack Developer!",
                    "MERN Stack developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              </h1>
                  <p> "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things."</p>
                  {/* <button><a href={Bio.resume} target='display'>Check Resume</a></button> */}
                  <Router> <HashLink to={Bio.resume}>
                <button className="vvd"><span>Check Resume</span></button>
                  </HashLink>                  
                 </Router>
                 
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img className="myImage" src={tawqeer} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
  }
