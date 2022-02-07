import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { numberlength } from "../utils/numberlength";
import { langContext } from "./../lang/Lang";
function Heading() {
  const [date, setDate] = useState({ year: "0000", month: "00", date: "00" });
  const [clock, setClock] = useState({ h: "00", m: "00", s: "00" });
  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      setDate({
        year: numberlength(time.getFullYear()),
        month: numberlength(time.getMonth() + 1),
        date: numberlength(time.getDate()),
      });
      setClock({
        h: numberlength(time.getHours()),
        m: numberlength(time.getMinutes()),
        s: numberlength(time.getSeconds()),
      });
    }, 1000);
  }, []);
  const context = useContext(langContext);

  return (
    <header
      style={{ zIndex: "10000" }}
      className="position-sticky w-100 top-0 bg-black text-white p-3 fs-4  d-flex flex-wrap justify-content-xl-start justify-content-center border-bottom border-5 border-danger"
    >
      <div className="display-6  d-flex headerFont">
        {context.langs.headerTitle}
      </div>
      <div className=" fs-6 p-2 d-flex justify-content-center justify-content-xl-end flex-wrap ">
        <Link
          className="text-decoration-none text-secondary px-2 link-item "
          to="/"
        >
          <i className="fas fa-book-open p-2   "></i> {context.langs.aboutLink}
        </Link>
        <Link
          className="text-decoration-none text-secondary px-2  link-item "
          to="/skills"
        >
          <i className="fas fa-file-code p-2" /> {context.langs.skillsLink}
        </Link>
        <Link
          className="text-decoration-none text-secondary px-2  link-item"
          to="/contact"
        >
          <i className="fas fa-user p-2    "></i>
          {context.langs.contactLink}
        </Link>
        <Link
          className="text-decoration-none text-secondary px-2 link-item"
          to="/certificates"
        >
          <i className="fas fa-file-certificate p-2   "></i>{" "}
          {context.langs.certificatesLink}
        </Link>
      </div>
      <div className="headerFont ms-0 ms-xl-auto  d-flex align-items-center fs-6">
        <i className="far fa-clock p-2   "></i>
        {`${clock.h}:${clock.m}:${clock.s}`}

        <i className="far fa-calendar p-2    "></i>
        {`${date.month}/${date.date}/${date.year}`}
        <div
          onClick={() => {
            context.changeLang === "en"
              ? context.setChangeLang("fa")
              : context.setChangeLang("en");
          }}
          style={{ cursor: "pointer" }}
          className="text-decoration-none fs-3 text-secondary  link-item"
        >
          <i className="fas fa-language p-2 "></i>
        </div>
      </div>
    </header>
  );
}

export default Heading;
