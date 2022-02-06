import React, { useEffect, useState } from "react";
import HTML from "../assets/images/certificates/HTML.jpg";
import CSS from "../assets/images/certificates/CSS.jpg";
import JS from "../assets/images/certificates/JS.jpg";
import ReactJs from "../assets/images/certificates/ReactJs.jpg";
import Loading from "./../components/Loading";
function Certificates() {
  useEffect(() => {
    setisLoading(false);
  }, []);

  const [isLoading, setisLoading] = useState(true);
  const [pictures] = useState([HTML, CSS, JS, ReactJs]);
  const [picIndex, setpicIndex] = useState(0);
  const sliderChange = (type) => {
    switch (type) {
      case "left":
        if (picIndex === 0) {
          setpicIndex(pictures.length - 1);
        } else {
          setpicIndex((prev) => prev - 1);
        }
        break;

      case "right":
        if (picIndex + 1 === pictures.length) {
          setpicIndex(0);
          return;
        } else {
          setpicIndex((prev) => prev + 1);
        }
        break;
      default:
        break;
    }
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="d-flex flex-column align-items-center">
          <div className=" d-flex justify-content-center align-items-center">
            <i
              className="fas fa-arrow-alt-circle-left btn btn p-2 fs-1 text-danger"
              onClick={() => sliderChange("left")}
            />
            <img
              className="col-12 col-md-8 border-bottom rounded-3 border-4 border-danger"
              src={pictures[picIndex]}
              alt="Not Found"
            />
            <i
              className="fas fa-arrow-alt-circle-right btn btn p-2 fs-1 text-danger"
              onClick={() => sliderChange("right")}
            />
          </div>
          <div className="p-2">
            {pictures.map((el, index) =>
              index === picIndex ? (
                <i
                  key={index}
                  style={{ cursor: "pointer" }}
                  className="fas fa-circle text-danger m-1 "
                  onClick={() => setpicIndex(index)}
                ></i>
              ) : (
                <i
                  key={index}
                  style={{ cursor: "pointer" }}
                  className="far fa-circle text-danger m-1 "
                  onClick={() => setpicIndex(index)}
                ></i>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Certificates;
