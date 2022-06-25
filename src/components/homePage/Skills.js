import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Img from "react-cool-img";

const skills = [
  {
    logo: "/images/skills/laravel.png",
    name: "Laravel",
    link: "https://www.laravel.com/",
  },
  {
    logo: "/images/skills/php.png",
    name: "PHP",
    link: "https://www.w3schools.com/php/",
  },  
  {
    logo: "/images/skills/mysql.png",
    name: "MySQL",
    link: "https://www.w3schools.com/html/",
  },
  {
    logo: "/images/skills/phpmyadmin.png",
    name: "phpMyAdmin",
    link: "https://www.phpmyadmin.net/",
  },
  {
    logo: "/images/skills/html.png",
    name: "HTML",
    link: "https://www.w3schools.com/html/",
  },
  {
    logo: "/images/skills/css-3.png",
    name: "CSS",
    link: "https://www.w3schools.com/css/",
  },
  {
    logo: "/images/skills/js.png",
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    logo: "/images/skills/jquery.png",
    name: "jQuery",
    link: "https://www.w3schools.com/jquERy/",
  },
  {
    logo: "/images/skills/ajax.png",
    name: "AJAX",
    link: "https://www.w3schools.com/xml/ajax_intro.asp",
  },
  {
    logo: "/images/skills/json.png",
    name: "JSON",
    link: "https://www.json.org/",
  },
  {
    logo: "/images/skills/git-logo.png",
    name: "Git",
    link: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control",
  },
  {
    logo: "/images/skills/bootstrap.png",
    name: "Bootstrap",
    link: "https://react-bootstrap.github.io/getting-started/introduction/",
  },
  {
    logo: "/images/skills/logo.png",
    name: "Material UI",
    link: "https://material-ui.com/",
  },
  {
    logo: "/images/skills/react.png",
    name: "ReactJS",
    link: "https://reactjs.org/",
  },
  {
    logo: "/images/skills/nodejs.png",
    name: "NodeJS",
    link: "https://nodejs.org/en/docs/",
  },
  {
    logo: "/images/skills/c.png",
    name: "C",
    link: "https://www.w3schools.in/c-tutorial/",
  },
  {
    logo: "/images/skills/c++.png",
    name: "C++",
    link: "https://www.w3schools.com/CPP/default.asp/",
  },
  {
    logo: "/images/skills/cs.png",
    name: "C#",
    link: "https://www.w3schools.com/cs/index.php/",
  },
  {
    logo: "/images/skills/python.png",
    name: "Python",
    link: "https://www.w3schools.com/PYTHON/",
  },
  {
    logo: "/images/skills/dj.png",
    name: "Django",
    link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/",
  },
  {
    logo: "/images/skills/vs.png",
    name: "Visual-Studio",
    link: "https://en.wikipedia.org/wiki/Microsoft_Visual_Studio/",
  }
  
];

const Skills = () => {
  const [element, controls] = useScroll();
  return (
    <div id="skills" className="skills-section">
      <motion.div
        variants={scrollReveal}
        ref={element}
        animate={controls}
        className="container"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font green-text">Ski</span>lls
          </h1>
        </div>
        <Row>
          {skills.map((skill, index) => {
            return (
              <Col key={index + 1}>
                <div className="skills">
                  <Img
                    placeholder="/images/skills/lod.jpeg"
                    src={skill.logo}
                    error="/images/skills/error.png"
                    alt="React Cool Img"
                  />
                  <a href={skill.link} target="_blank" rel="noreferrer">
                    {" "}
                    <h6>{skill.name}</h6>{" "}
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </motion.div>
    </div>
  );
};

export default Skills;
