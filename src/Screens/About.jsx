import React, { useContext } from "react";
import { langContext } from "../lang/Lang";
import profile from "../assets/images/dark.png";
import { Link } from "react-router-dom";
function About() {
  const context = useContext(langContext);
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center col-md-6">
        <img
          style={{ width: "300px" }}
          className="img-fluid rounded-circle border border-3 border-danger"
          src={profile}
          alt="not Found"
        />
      </div>
      <div className="col-12 col-md-6 text-white lh-lg fs-5 mt-2">
        {context.langs.about}{" "}
        <Link className="text-decoration-none text-danger" to="/contact">
          {context.langs.contactLink}
        </Link>
      </div>
    </div>
  );
}

export default About;
