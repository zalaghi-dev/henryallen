import React from "react";
import SkillCard from "../components/SkillCard";

function Skills() {
  return (
    <>
      <SkillCard
        progress="100"
        name="HTML5"
        icon={<i className="fab fa-html5    "></i>}
      />
      <SkillCard
        progress="95"
        name="CSS3"
        icon={<i className="fab fa-css3    "></i>}
      />
      <SkillCard
        progress="100"
        name="Sass"
        icon={<i className="fab fa-sass   "></i>}
      />
      <SkillCard
        progress="100"
        name="Bootstrap"
        icon={<i className="fab fa-bootstrap    "></i>}
      />

      <SkillCard
        progress="96"
        name="JavaScript"
        icon={<i className="fab fa-js    "></i>}
      />
      <SkillCard
        progress="90"
        name="ReactJs + Redux"
        icon={<i className="fab fa-react    "></i>}
      />
      <SkillCard
        progress="87"
        name="React Native"
        icon={<i className="fab fa-react    "></i>}
      />
      <SkillCard
        progress="0"
        name="NodeJs"
        icon={<i className="fab fa-node-js   "></i>}
      />
      <SkillCard
        progress="80"
        name="Github"
        icon={<i className="fab fa-github     "></i>}
      />
    </>
  );
}

export default Skills;
