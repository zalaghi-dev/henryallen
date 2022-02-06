import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import png from "./assets/images/background.png";
import "./assets/icons/css/all.css";
import Heading from "./components/Heading";
import { Route, Routes } from "react-router-dom";
import Skills from "./Screens/Skills";
import Contact from "./Screens/Contact";
import Certificates from "./Screens/Certificates";
import Loading from "./components/Loading";
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <img
            className="position-fixed w-100 h-100"
            src={png}
            alt="background"
          />
          <div className="w-100 position-absolute">
            <Heading />
            <div className="mt-5  w-75 m-auto">
              <Routes>
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/" />
              </Routes>
            </div>
          </div>
        </>
      )}
    </>
  );
}
