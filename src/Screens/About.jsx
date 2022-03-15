import React, { useContext } from "react";
import { langContext } from "../lang/Lang";
import profile from "../assets/images/dark.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function About() {
  const context = useContext(langContext);
  return (
    <div className="row w-75 m-auto">
      <div className="col-12 d-flex justify-content-center col-md-6">
        <motion.img
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:[0,1.2,1]}}
        transition={{delay:0.3}}
          style={{ width: "300px" }}
          className="img-fluid rounded-circle border border-3 border-danger"
          src={profile}
          alt="not Found"
        />
      </div>
      <motion.div initial={{opacity:0.5,y:'-50vh'}} animate={{opacity:1,y:0}} className="col-12 col-md-6 text-white lh-lg fs-5 mt-2">
        {context.langs.about}{" "}
        <Link className="text-decoration-none text-danger" to="/contact">
          {context.langs.contactLink}
        </Link>
      </motion.div>
    </div>
  );
}

export default About;
