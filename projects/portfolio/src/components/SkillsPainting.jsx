import { useState, useEffect } from "react";
import styled from "styled-components";

// Styled components for the "painting"
const SkillPainting = styled.div`
  width: 300px;
  height: 200px;
  border: 10px solid #7a5c45; /* Frame color */
  border-radius: 12px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5efe7; /* Canvas color */
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #333333;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const SkillText = styled.div`
  position: absolute;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transform: ${(props) => (props.active ? "translateY(0)" : "translateY(20px)")};
  transition: all 0.8s ease-in-out;
`;

const SkillsCarousel = () => {
  const skills = [
    "Java & Spring Boot",
    "SQL & Database Optimization",
    "Event-Driven Architecture",
    "Microservices",
    "Docker & AWS",
    "Teamwork & Communication",
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000); // Change skill every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [skills.length]);

  return (
    <SkillPainting>
      {skills.map((skill, index) => (
        <SkillText key={index} active={index === currentSkillIndex}>
          {skill}
        </SkillText>
      ))}
    </SkillPainting>
  );
};

export default SkillsCarousel;
