// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Badge from 'react-bootstrap/Badge'
import Img from 'react-cool-img';

const myProjects = [
  {
    image: "https://assets.kpmg/content/dam/kpmg/gh/images/gh-award.jpg/jcr:content/renditions/original",
    title: "Award of Puctuality",
    dLink: "Got the Spot award and Certificate of Punctuality by Bansal Group of Institutions",
  },
  {
    image: "https://mediaprocessor.websimages.com/width/431/technicalshivam.webs.com/IMG_20200108_161132_290_01.jpg",
    title: "HacktoberFest 2019",
    dLink:"Got T-shirt and goodies from DigitalOcean For my successful contribution in HacktoberFest 2019.",
    demoLink: "",
  }
  
];

const SocialProfiles = () => {
  const [element, controls] = useScroll();
  return (
    <div className="projects1" id="projects">
      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Achieve</span>ment
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project,index) => {
              return (
                <Col md={4} className="mb-5" key={index+1}>
                  <div className="project-card1">
                    <div className="img-section">
                    <Img
                      placeholder="/images/loading.gif"
                      src={project.image}
                       error="/images/download.png"
                       alt="React Cool Img"
                      />
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info1">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.dLink}</p>
                     {project.demoLink && <div className="d-flex justify-content-between mr-4">
                        <a
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Read ...
                        </a>
                      </div>}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </motion.div>
    </div>
  );
};

export default SocialProfiles;
