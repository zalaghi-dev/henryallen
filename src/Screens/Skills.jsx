import React from "react";
import SkillCard from "../components/SkillCard";
import { motion } from "framer-motion";

function Skills() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.div variants={itemVariants}>
        <SkillCard
          progress="100"
          name="HTML5"
          icon={<i className="fab fa-html5    "></i>}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <SkillCard
          progress="95"
          name="CSS3"
          icon={<i className="fab fa-css3    "></i>}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <SkillCard
          progress="100"
          name="Sass"
          icon={<i className="fab fa-sass   "></i>}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <SkillCard
          progress="100"
          name="Bootstrap"
          icon={<i className="fab fa-bootstrap    "></i>}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <SkillCard
          progress="96"
          name="JavaScript"
          icon={<i className="fab fa-js    "></i>}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <SkillCard
          progress="90"
          name="ReactJs + Redux"
          icon={<i className="fab fa-react    "></i>}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <SkillCard
          progress="87"
          name="React Native"
          icon={<i className="fab fa-react    "></i>}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <SkillCard
          progress="100"
          name="Git"
          icon={<i className="fab fa-git-alt     "></i>}
        />
      </motion.div>
      <motion.div variants={itemVariants} initial="hidden" animate="show">
        <SkillCard
          progress="0"
          name="NodeJs"
          icon={<i className="fab fa-node-js   "></i>}
        />
      </motion.div>
    </motion.div>
  );
}

export default Skills;
