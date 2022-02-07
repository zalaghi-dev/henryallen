import React from "react";
import "../styles/linkCard.css";
function LinkCard({ icon, name, link, className }) {
  return (
    <a
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
    </a>
  );
}

export default LinkCard;
