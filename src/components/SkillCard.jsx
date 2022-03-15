import React from "react";
import "../styles/skillCard.css";
import { motion } from "framer-motion";
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};
function SkillCard({ icon, name, progress }) {
  return (
    <motion.div variants={itemVariants} whileHover={{skew:-10 }}>
      <div className="skillCard border border-2 border-danger fw-bolder fs-5 d-flex justify-content-between flex-wrap align-items-center p-2 bg-black my-2">
        <div className="d-flex align-items-center px-3">
          <div className="text-danger fw-bolder fs-1 pe-2">{icon}</div>
          <div className="text-white">{name}</div>
        </div>

        <div className="progress bg-black border border-2 border-white ">
          <div
            style={{ width: `${progress}%` }}
            className="progress-bar bg-danger "
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {progress + "%"}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SkillCard;
