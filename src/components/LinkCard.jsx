import React from "react";
import "../styles/linkCard.css";
import { motion } from "framer-motion";
function LinkCard({ icon, name, link, className }) {
  const item = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.a
      variants={item}
      whileHover={{scale:1.1}}
      href={link}
      rel="noreferrer"
      target="_blank"
      className={
        "linkCard rounded-3 m-2 p-2  d-flex align-items-center text-decoration-none " +
        className
      }
    >
      <div className=" text-danger fs-4 p-1   ">{icon}</div>
      <div className="linkCardText fs-6  text-white fw-bolder">{name}</div>
    </motion.a>
  );
}

export default LinkCard;
