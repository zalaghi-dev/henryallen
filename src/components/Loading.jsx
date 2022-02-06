import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";
function Loading() {
  return (
    <div
      style={{ zIndex: "999999999" }}
      className="bg-black position-fixed opacity-75 w-100 h-100 d-flex justify-content-center align-items-center"
    >
      <TailSpin visible color="red" height={100} width={100} />
    </div>
  );
}

export default Loading;
