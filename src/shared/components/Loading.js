import React from "react";
import "./Loading.css";

const Loading = props => {
  return (
    <div className="loadingBg">
      <p>{props.msg}</p>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
