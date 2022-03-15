import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/icons/css/all.css";
import Heading from "./components/Heading";
import { Route, Routes } from "react-router-dom";
import Skills from "./Screens/Skills";
import Contact from "./Screens/Contact";
import Certificates from "./Screens/Certificates";
import Loading from "./components/Loading";
import About from "./Screens/About";
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
          <div className="w-100 pb-4 position-absolute">
            <Heading />
            <div className="mt-5 p-2 m-auto">
              <Routes>
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/" element={<About />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </>
  );
}
